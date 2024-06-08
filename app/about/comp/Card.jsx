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
      <h1 className="text-[24px]">{name}</h1>
      <p className="text-[18px]">{role}</p>
      <div className="flex gap-2">
        <div className="h-[39px] w-[39px] rounded-[8px] border-[1px] border-gray-400 flex items-center justify-center ">
          <FaInstagram size={20} />
        </div>
        <div className="h-[39px] w-[39px] rounded-[8px] border-[1px] border-gray-400 flex items-center justify-center ">
          <FaXTwitter size={20} />
        </div>
      </div>
    </div>
  );
}

export default Card;
