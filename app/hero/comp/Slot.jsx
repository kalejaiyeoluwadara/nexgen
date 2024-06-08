import Image from "next/image";
import React from "react";

function Slot({ img, title, sub }) {
  return (
    <div className="flex flex-col w-[561px] text-black gap-[16px] border-[1px] border-gray-300 rounded-[20px] p-[32px]  ">
      <div className="h-[48px] w-[48px] bg-primary rounded-[8px] flex items-center justify-center  ">
        <Image className="object-cover  " src={img} />
      </div>
      <h5>{title}</h5>
      <p>{sub}</p>
    </div>
  );
}

export default Slot;
