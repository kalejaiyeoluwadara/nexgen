import Image from "next/image";
import React from "react";
import light from "../../../assets/person.svg";
import Button2 from "./Button2";
function Comp() {
  return (
    <div className="flex flex-col border-[2px] border-gray-300 h-[510px]  w-full text-black gap-[16px]  rounded-[20px] p-[32px]  ">
      <div className="h-[48px] w-[48px] bg-pr2 rounded-[8px] flex items-center justify-center  ">
        <Image className="object-cover  " src={light} />
      </div>
      <h1 className=" text-[18px] ">Explore Our Catalogue of Courses</h1>
      <p className="w-[676px] text-[36px]  ">
        We meticulously plan your digital journey, then add a splash of
        studio-like creativity, making your brand shine online.
      </p>
      <div className="flex w-full mt-[46px] gap-[10px]">
        <Button2
          title={"Graphics Design"}
          pr={true}
          styles={"border-primary hover:bg-primary "}
        />
        <Button2
          title={"Product Design"}
          styles={"border-[#FF0000] hover:bg-[#FF0000]  "}
        />
        <Button2
          title={"Backend Development"}
          styles={"border-[#0094FF] w-[236px] hover:bg-[#0094FF]  "}
        />
        <Button2
          title={"Frontend Development"}
          styles={" w-[244px] border-[#FF00A8] hover:bg-[#FF00A8]  "}
        />
        <Button2
          pr={true}
          title={"Data analysis"}
          styles={"border-[#B5FF00] hover:bg-[#B5FF00]  "}
        />
      </div>
    </div>
  );
}

export default Comp;
