import Image from "next/image";
import React from "react";

function Profile({ img, role, name }) {
  return (
    <div className="h-[395px] w-[290px] bg-white text-black p-2 flex items-center justify-start flex-col rounded-[20px] ">
      <div className="h-[285px]   mb-4 rounded-[16px] overflow-hidden bg-[#E2E2E2] w-[266px]">
        <Image src={img} className=" h-full object-cover object-top w-full  " />
      </div>
      <div className="w-full">
        <h3 className="font-clashmd">{name}</h3>
        <p className="capitalise">{role}</p>
      </div>
    </div>
  );
}

export default Profile;
