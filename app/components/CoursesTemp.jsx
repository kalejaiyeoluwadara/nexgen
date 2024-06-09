"use client";
import Image from "next/image";
import React, { useState } from "react";
import Overlap from "@/app/components/Overlap";
import Button from "@/app/components/Button";
import { FaStar } from "react-icons/fa";

function CoursesTemp({ title, sub, tutor, role, rating, img, tutorImg }) {
  return (
    <main
      id="main"
      className="bg-black relative sm:pl-[33px] pr-[24px] flex flex-col items-center justify-center "
    >
      <Image
        // placeholder="blur"
        alt="Background"
        className="obeject-cover cover  "
        src={img}
      />
      <div className="cover bg-black bg-opacity-[0.6]" />

      <>
        <section className="text-white h-full mt-20 w-full relative z-40 flex flex-col items-start justify-start  ">
          <h1>{title}</h1>
          <p className="w-[910px] text-[20px]  text-gray-200 ">{sub}</p>
          <Overlap />
        </section>

        <section className="flex w-full  relative z-30 items-end justify-between ">
          <div />
          <Button
            otherStyles={" text-[14px] h-[57px] rounded-[21px] "}
            color={"primary"}
            title={"DEMO VERSION"}
          />
          <section className="flex h-[201px] w-[387px] rounded-[33px] flex-col gap-4 p-[34px] text-white bg-tertiary ">
            <div className="flex items-center gap-[16px]">
              <div className="h-[81px] w-[81px] flex items-center justify-center overflow-hidden rounded-full bg-[#858585] ">
                <Image
                  className="h-full w-full object-cover object-top "
                  src={tutorImg}
                />
              </div>
              <div>
                <h3 className="text-[15px] font-clashsm ">{tutor}</h3>
                <p className="text-[12px] font-clashmd ">{role}</p>
              </div>
            </div>
            <div className="flex gap-[5px]">
              <div className="flex gap-[5px]">
                {[1, 2, 3, 4, 5].map((d, id) => {
                  return <FaStar size={20} className="text-[#FFE200]" />;
                })}
              </div>
              <p className="text-[16px] font-clashreg ">{rating}</p>
            </div>
          </section>
        </section>
      </>
    </main>
  );
}

export default CoursesTemp;
