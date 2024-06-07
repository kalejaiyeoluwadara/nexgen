"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
function Card({ name, role, link1, link2, state = false }) {
  const [active, setActive] = useState(state);
  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
      className={`flex justify-between hover:bg-primary cursor-pointer hover:text-black items-center rounded-[20px] transition-all px-4 w-[625px] h-[99px] ${
        active ? "bg-primary text-black " : "bg-tertiary text-white "
      }  `}
    >
      <h3 className="text-[24px]">{name}</h3>
      <p>{role}</p>
      <div className="flex gap-2">
        <FaInstagram />
        <FaXTwitter />
      </div>
    </div>
  );
}

export default Card;
