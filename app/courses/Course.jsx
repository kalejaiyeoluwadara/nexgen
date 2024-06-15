import Image from "next/image";
import React from "react";
import bac from "../../assets/bac.png";
import Button from "../components/Button";
function Course() {
  return (
    <div
      id="main"
      className="min-h-[100vh]  relative py-20  flex flex-col items-center justify-center w-full "
    >
      <Image
        src={bac}
        className=" object-cover min-h-full w-full -z-10 absolute top-0 left-0   "
      />
      <div className=" py-[80px] gap-[23px] items-center justify-center flex flex-col ">
        <h1 className="w-[1217px] text-center text-[60px] font-clashmd text-white   ">
          Learn the skills to build your
          <span className="text-primary"> digital Future</span>
        </h1>
        <p className="w-[1066px] text-[24px] text-white text-opacity-70  text-center ">
          Want to become a trailblazer in the ever-evolving world of tech, enrol
          now and be the pioneer of the Next Generation?
        </p>
      </div>
      {/* <div className="w-full flex items-center justify-center   ">
        <Button
          otherStyles={"h-[62px] text-[20px]  w-[304px] "}
          title={"View our courses"}
        />
      </div> */}
    </div>
  );
}

export default Course;
