"use client";
import React, { useRef, useState, useEffect } from "react";
import Card from "./comp/Card";
import chev1 from "../../assets/chev1.svg";
import chev2 from "../../assets/chev2.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { courses } from "../../utils/data";
function Hero3() {
  return (
    <div
      id="courses"
      className="min-h-full bg-white py-[80px] px-[110px] w-full"
    >
      <section>
        <h4>What course are you interested in?</h4>
        <p className="w-[605px] text-[16px]">Select the course to view more</p>
      </section>
      <section className="flex  mt-[40px] gap-4 w-full h-auto ">
        {courses.map((d, id) => {
          return <Card key={id} route={d.route} title={d.course} />;
        })}
      </section>
      <section className="mt-[62px] items-center flex gap-[32px]"></section>
    </div>
  );
}

export default Hero3;
