import React from "react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Nav from "../Nav/Nav";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
import Hero5 from "./Hero5";
import Faq from "../faq/Faq";

function Hero() {
  return (
    <div className="w-full h-full  ">
      <Nav />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Faq />
    </div>
  );
}

export default Hero;
