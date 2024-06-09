"use client";
import React, { useState } from "react";
import Backend1 from "./Backend1";
import Learn from "@/app/components/Learn";
import CoursePage from "@/app/components/CoursePage";
import Hero3 from "@/app/hero/Hero3";
import Faq from "@/app/faq/Faq";
import Price from "@/app/components/Price";
import CoursesTemp from "@/app/components/CoursesTemp";
import { coursesPages } from "@/utils/data";
export default function Page() {
  const [data, setData] = useState(coursesPages[0].backend);
  return (
    <div>
      <CoursesTemp {...data} />
      <Learn />
      <CoursePage />
      <Price />
      <Price />
      <Hero3 />
      <Faq />
    </div>
  );
}
