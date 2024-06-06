import Image from "next/image";
import React from "react";
import bac from "../../assets/bac.png";
import Button from "../components/Button";
import Images from "./comp/Images";

function Hero1() {
  return (
    <div className="min-h-[100vh]  gap-[32px] py-10  flex flex-col items-center justify-center w-full ">
      <Image
        src={bac}
        className=" object-cover min-h-[890px] w-full -z-10 absolute top-0 left-0  "
      />
      <h1 className="w-[1015px] text-white font-lora text-[60px]   ">
        Committed to Nurturing the{" "}
        <span className="text-primary">Next Generation</span> of Tech
        Trailblazers
      </h1>
      <p className="w-[610px] text-[24px] text-white text-opacity-70  text-center ">
        Our flexible, in-demand tech courses are tailored for you to learn and
        advance valuable skills at your convenience.
      </p>
      <Button
        color={"primary"}
        otherStyles={"font-bold w-[230px] h-[62px] rounded-[50px] "}
        title={"Start Learning"}
      />
      <Images />
    </div>
  );
}

export default Hero1;
