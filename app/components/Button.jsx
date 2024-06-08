"use client";
import { motion } from "framer-motion";
import React from "react";
function Button({ color, onClick, title, otherStyles }) {
  return (
    <motion.button
      whileTap={{
        scale: 0.8,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      onClick={onClick}
      className={`flex items-center font-clashmd text-[16px] ${
        color === "primary" ? "bg-primary" : "bg-white"
      } rounded-[90px]  justify-center px-6 py-3 text-black ${otherStyles} `}
    >
      {title}
    </motion.button>
  );
}

export default Button;
