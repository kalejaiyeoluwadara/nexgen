import React from "react";
import Backend1 from "./Backend1";
import Learn from "@/app/components/Learn";
import CoursePage from "@/app/components/CoursePage";
import Hero3 from "@/app/hero/Hero3";
import Faq from "@/app/faq/Faq";
import Price from "@/app/components/Price";

export default function Page() {
  return (
    <div>
      <Backend1 />
      <Learn />
      <CoursePage />
      <Price />
      <Price />
      <Hero3 />
      <Faq />
    </div>
  );
}
