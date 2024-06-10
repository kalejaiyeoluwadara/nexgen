"use client";
import React, { useState } from "react";
import Comp from "./comp/Comp1";
import Comp2 from "./comp/Comp2";
import phone from "../../assets/phone.png";
import Button from "@/app/components/Button";
import Image from "next/image";
import { courseDetails } from "@/utils/data";
function About4() {
  const [active, setActive] = useState(0);
  return (
    <main className="bg-white flex flex-col gap-[40px]  ">
      {/* <Comp />
      <Comp2 /> */}
      <div className="flex flex-col border-[2px] border-gray-300 h-auto w-full text-black gap-[16px]  rounded-[20px] p-[32px]  ">
        <h1 className=" text-[30px]  font-clashsm ">
          Explore Our Catalogue of Courses
        </h1>
        <p className="w-[917px]  text-[24px]  ">
          We meticulously plan your digital journey, then add a splash of
          studio-like creativity, making your brand shine online.
        </p>

        {/* Buttons */}
        <section className="flex my-[56px] gap-[10px] ">
          {courseDetails.map((d, id) => {
            return (
              <button
                onClick={() => {
                  setActive(id);
                }}
                className={`px-[30px] ${
                  id === active
                    ? "bg-[#0D292A] text-white "
                    : "bg-white text-[#54656F] "
                } rounded-[16px] text-[16px] font-clashmd transition-all hover:bg-[#0D292A] hover:text-white  py-[18px] border-[1px] border-gray-300  `}
              >
                {d.title}
              </button>
            );
          })}
        </section>
      </div>

      <div className="h-[706px] w-full rounded-[49px] relative overflow-hidden py-[86px] ">
        <Image
          src={phone}
          className="absolute z-10 h-full w-full top-0 left-0 object-cover "
        />
        <div className="absolute z-20 bg-black bg-opacity-[0.5]  h-full w-full top-0 left-0 object-cover " />

        <div className=" relative z-40  h-full  ">
          <div className="flex flex-col w-full justify-center h-full   px-10 ">
            <section className="flex flex-col items-start  ">
              <h1 className=" text-white font-clashbold text-[36px] ">
                Product Design
              </h1>
              <p className="w-[909px] mb-[43px] font-clashreg mt-[10px] text-white text-[23px] ">
                {courseDetails[active].sub}
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
    </main>
  );
}

export default About4;
