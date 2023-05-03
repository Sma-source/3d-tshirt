import React from "react";

const CustomButton = ({ type, title, handleCick, customStyles }) => {
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      onClick={handleCick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
