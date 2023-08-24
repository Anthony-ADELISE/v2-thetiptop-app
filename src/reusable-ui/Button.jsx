import React from "react";

const Button = ({ label, className }) => {
  return (
    <button
      className={`w-full bg-greenTip py-5 cursor-pointer text-white rounded-xl font-bold ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
