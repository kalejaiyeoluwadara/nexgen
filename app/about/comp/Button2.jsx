"use client";
import React, { useState } from "react";
function Button2({ title, styles, pr }) {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`h-[56px] text-black w-[187px] transition-all ${
        pr ? "text-black" : "hover:text-white"
      } border-[1px] ${styles} `}
    >
      {title}
    </button>
  );
}

export default Button2;
