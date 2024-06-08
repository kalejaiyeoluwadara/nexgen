import Image from "next/image";
import React from "react";

function Slot({ img, title, sub, sub2 }) {
  return (
    <div className="flex flex-col w-[561px] text-black gap-[16px]  rounded-[20px] p-[32px]  ">
      <div className="h-[48px] w-[48px] bg-pr2 rounded-[8px] flex items-center justify-center  ">
        <Image className="object-cover  " src={img} />
      </div>
      <h5 className="font-[700] text-[24px] ">{title}</h5>
      <p className="w-[531px] text-[16px] ">{sub}</p>
      <p>{sub2}</p>
    </div>
  );
}

export default Slot;
