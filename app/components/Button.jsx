import React from "react";

function Button({ color, onClick, title, otherStyles }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center font-lora font-semibold ${
        color === "primary" ? "bg-primary" : "bg-white"
      } rounded-[90px]  justify-center px-6 py-3 text-black ${otherStyles} `}
    >
      {title}
    </button>
  );
}

export default Button;
