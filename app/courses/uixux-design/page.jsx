"use client";
import React, { useState } from "react";
// import Graphic from "./Graphic";
import Learn from "@/app/components/Learn";
import CoursePage from "@/app/components/CoursePage";
import Price from "@/app/components/Price";
import Hero3 from "@/app/hero/Hero3";
import prof from "../../../assets/profile2.png";
import Faq from "@/app/faq/Faq";
import frontend from "../../../assets/frontend.png";
import CoursesTemp from "@/app/components/CoursesTemp";
import { coursesPages } from "@/utils/data";
function Page() {
  const [data, setData] = useState(coursesPages[0].uiux);
  return (
    <>
      <CoursesTemp {...data} />
      <Learn />
      <CoursePage />
      <Price />
      <Price />
      <Hero3 />
      <Faq />
    </>
  );
}

export default Page;
