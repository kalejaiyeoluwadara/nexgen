import Image from "next/image";
import React from "react";
import bac from "../../assets/bac.png";
function Hero1() {
  return (
    <div className="h-full w-full ">
      <Image
        src={bac}
        className=" object-cover h-full w-full -z-10 absolute top-0 left-0  "
      />
    </div>
  );
}

export default Hero1;
