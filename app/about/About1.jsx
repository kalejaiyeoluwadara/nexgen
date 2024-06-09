import Image from "next/image";
import React from "react";
import bac from "../../assets/bac.png";
import Button from "../components/Button";

function About1() {
  return (
    <div
      id="main"
      className="min-h-[100vh] flex items-center  justify-center w-full "
    >
      <Image
        src={bac}
        className=" object-cover h-[100vh] w-full -z-10 absolute top-0 left-0  "
      />
      <div className=" -translate-y-20 mt-[190px] gap-[32px] items-center justify-center flex flex-col ">
        <h1 className="w-[1208px] leading-normal text-center  text-white   ">
          Transforming & equipping the{" "}
          <span className="text-primary">digital trailblazers</span> of the Next
          Generation.
        </h1>
        <p className="w-[678px] text-[32px] text-white text-opacity-70  text-center ">
          Come help us build the education the world deserves.
        </p>
      </div>
    </div>
  );
}

export default About1;
