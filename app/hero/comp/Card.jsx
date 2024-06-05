import Image from "next/image";
import React from "react";
import wall from "../../../assets/wall.png";
function Card({ title, sub, img }) {
  return (
    <div className="h-[495px] border-[1px] border-gray-300 w-[377px] rounded-[30px] p-4  ">
      <div className="relative">
        <Image
          className="h-[269px] w-[338px] rounded-[28px] "
          src={wall}
          alt=""
        />
        <p className="absolute left-3 bottom-3">1-2Hour per week</p>
      </div>
      <div className=" mt-2 ">
        <h3 className="font-bold ">{title}</h3>
        <p className="text-[15px] mt-1 ">
          Dive into the world of UI/UX design and transform your ideas into
          experiences users love. Learn the secrets of visual design, understand
          user needs.
        </p>
        <div className="flex mt-4 ">
          <div className="border-[1px] bg-white border-black px-4 py-3 rounded-[30px] ">
            Design
          </div>
          <div className="border-[1px] bg-white border-black -translate-x-4 px-4 py-3 rounded-[30px] ">
            Visuals
          </div>
          <div className="border-[1px] bg-white border-black -translate-x-[30px]  px-4 py-3 rounded-[30px] ">
            Typography
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
