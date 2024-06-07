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
      <div className=" mt-[110px] gap-[23px] items-center justify-center flex flex-col ">
        <h1 className="w-[942px] text-center  text-white font-lora text-[60px]   ">
          Learn the skills to build your
          <span className="text-primary"> digital Future</span>
        </h1>
        <p className="w-[700px] text-[24px] text-white text-opacity-70  text-center ">
          Want to become a trailblazer in the ever-evolving world of tech, enrol
          now and be the pioneer of the Next Generation?
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-[65px]  ">
        <Button
          otherStyles={
            "h-[62px] text-[20px] font-semibold font-lora w-[304px] "
          }
          title={"View our courses"}
        />
      </div>
    </div>
  );
}

export default Course;
