import React from "react";
import one from "../../../assets/one.png";
import two from "../../../assets/two.png";
import three from "../../../assets/three.png";
import four from "../../../assets/four.png";
import five from "../../../assets/five.png";
import Image from "next/image";
function Images() {
  return (
    <div className="flex relative bottom-0 w-full h-auto mt-[24px] items-end justify-center gap-[10px] ">
      <Image src={one} className="obejct-cover  transition-all " />
      <Image src={two} className="obejct-cover  " />
      <Image src={three} className="obejct-cover  " />
      <Image src={four} className="obejct-cover  " />
      <Image src={five} className="obejct-cover  " />
    </div>
  );
}

export default Images;
