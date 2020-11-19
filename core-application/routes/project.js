const router = require("express").Router();
const { auth } = require("../helper/auhMiddleware");
const { check } = require("express-validator");
const {
  createProject,
  joinProject,
  getAProjectWithId,
  getAllProjectForAUser,
  getAllBannedUsersOfProject,
  updateProjectInfo,
  togglebanUserFromProject,
  deleteProject,
  checkIfAdmin,
  getAllProjectMembers,
} = require("../controller/project");

router.post(
  "/create",
  auth,
  check("name", "Project name is required.").notEmpty(),
  check("companyName", "CompanyName name is required.").notEmpty(),
  check("description", "Description name is required.").notEmpty(),
  check(
    "concept",
    "Concept name is required. (end-to-end encryption)"
  ).notEmpty(),
  check("institution", "Institution name is required.").notEmpty(),
  check("deadline", "Tentetive deadline of project is required.").notEmpty(),
  createProject
);
router.put(
  "/:projectId",
  auth,
  check("name", "Project name is required.").notEmpty(),
  check("companyName", "Company name is required.").notEmpty(),
  check("description", "Description is required.").notEmpty(),
  check("concept", "Concept is required. (end-to-end encryption)").notEmpty(),
  check("institution", "Institution is required.").notEmpty(),
  check("deadline", "Tentative deadline of project is required.").notEmpty(),
  updateProjectInfo
);

router.post("/join/:projectId", auth, joinProject);
router.get("/all", auth, getAllProjectForAUser);
router.get("/all/members/:projectId", auth, getAllProjectMembers);
router.get("/:projectId", auth, getAProjectWithId);
router.get("/banned-user/:projectId", auth, getAllBannedUsersOfProject);
router.get("/check-admin/:projectId", auth, checkIfAdmin);
router.put("/ban/:projectId/:userId", auth, togglebanUserFromProject);
router.delete("/:projectId", auth, deleteProject);

module.exports = router;
