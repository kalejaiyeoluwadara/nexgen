import Image from "next/image";
import React from "react";
import bac from "../../assets/bac.png";
import Button from "../components/Button";

function Course() {
  return (
    <div className="min-h-[100vh]    w-full ">
      <Image
        src={bac}
        className=" object-cover min-h-[890px] w-full -z-10 absolute top-0 left-0  "
      />
      <div className=" mt-[110px] gap-[32px] items-center justify-center flex flex-col ">
        <h1 className="w-[1208px] text-center  text-white font-lora text-[60px]   ">
          Transforming & equipping the{" "}
          <span className="text-primary">digital trailblazers</span> of the Next
          Generation.
        </h1>
        <p className="w-[558px] text-[24px] text-white text-opacity-70  text-center ">
          Come help us build the education the world deserves.
        </p>
      </div>
    </div>
  );
}

export default Course;