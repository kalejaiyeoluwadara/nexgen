import React from "react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Nav from "../Nav/Nav";

function Hero() {
  return (
    <div className="w-full h-full  ">
      <Nav />
      <Hero1 />
      <Hero2 />
    </div>
  );
}

export default Hero;
