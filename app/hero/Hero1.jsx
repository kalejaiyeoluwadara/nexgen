import Image from "next/image";
import React from "react";
import bac from "../../assets/bac.png";
import Button from "../components/Button";
import Images from "./comp/Images";

function Hero1() {
  return (
    <div
      id="main"
      className="min-h-[100vh]  relative gap-[32px] pt-40  flex flex-col items-center justify-center w-full "
    >
      <Image
        src={bac}
        className=" object-cover min-h-full w-full -z-10 absolute top-0 left-0  "
      />
      <h1 className="w-[1015px] text-white text-[60px]   ">
        Committed to Nurturing the{" "}
        <span className="text-primary">Next Generation</span> of Tech
        Trailblazers
      </h1>
      <p className="w-[710px] text-[24px] font-clashreg text-white text-opacity-70  text-center ">
        Our flexible, in-demand tech courses are tailored for you to learn and
        advance valuable skills at your convenience.
      </p>
      <Button
        color={"primary"}
        otherStyles={" w-[230px] h-[62px] rounded-[50px] text-[18px] "}
        title={"Start Learning"}
      />
      <Images />
    </div>
  );
}

export default Hero1;
