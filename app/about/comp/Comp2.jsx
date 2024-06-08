import Image from "next/image";
import React from "react";
import phone from "../../../assets/phone.png";
import symbol from "../../../assets/symbol.png";
import Button from "@/app/components/Button";
function Comp2() {
  return (
    <div className="h-[706px] w-full rounded-[49px] relative overflow-hidden py-[86px] ">
      <Image
        src={phone}
        className="absolute z-10 h-full w-full top-0 left-0 object-cover "
      />
      <div className="absolute z-20 bg-black bg-opacity-[0.7] h-full w-full top-0 left-0 object-cover " />
      <div className=" relative z-40 h-full  ">
        <div className="w-full flex justify-end ">
          <Image src={symbol} className=" relative right-5 " />
        </div>
        <div className="flex w-full items-center justify-between px-10 mt-10 ">
          <section className="flex flex-col items-start justify-center ">
            <h1 className=" text-white font-clashmd text-[23px] ">
              Product Design
            </h1>
            <p className="w-[609px] font-clashreg mt-[10px] text-white text-[23px] ">
              Dive into a world of creating stunning visuals and designs using
              Adobe Creative Cloud and graphic design principles that will make
              your brand stand out.
            </p>
          </section>
          <Button
            color={"primary"}
            otherStyles={"h-[60px] w-[190px] "}
            title={"Start Learning"}
          />
        </div>
      </div>
    </div>
  );
}

export default Comp2;
