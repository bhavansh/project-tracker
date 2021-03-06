import React from "react";

const CloseIcon = ({ handleRemoveInputField, index }) => {
  return (
    <div
      className=" flex items-center justify-center rounded-full h-4 w-4 cursor-pointer bg-red-600"
      onClick={(e) => {
        handleRemoveInputField(index);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-2 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
