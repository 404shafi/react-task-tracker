import React from "react";

const Button = ({ color, text, handleClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="add-btn"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
