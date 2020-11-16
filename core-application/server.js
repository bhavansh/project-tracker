const express = require("express");
const path = require("path");
require("dotenv").config({ path: "./config/keys.env" });
const cors = require("cors");
const app = express();

// Connect to the database
require("./helper/db");

// Basic Middlewares
app.use(cors());
app.use(express.json({ extended: true }));

const { auth: authMiddleWare } = require("./helper/auhMiddleware");
app.get("/api/v1/", authMiddleWare, (req, res) => {
  res.status(200).json({
    msg: "Hello from Project Tracker.",
  });
});

// Import Routes
const auth = require("./routes/auth");
const user = require("./routes/user");
const project = require("./routes/project");
const todo = require("./routes/todo");

// Routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/user", user);
app.use("/api/v1/project", project);
app.use("/api/v1/todo", todo);

//Serve static assets in Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server up and running on port ${port} ....`);
});
