import Image from "next/image";
import React from "react";
import wall from "../../../assets/wall.png";
import Link from "next/link";
function Card({ title, sub, img, route, desc }) {
  return (
    <Link href={`/courses/${route}`}>
      <div className="h-[434px] relative border-[1px] cursor-pointer hover:border-gray-600 transition-all border-gray-300 flex-shrink-0  w-[260px] rounded-[30px] p-4  ">
        <div className="relative">
          <Image
            className="h-[196px] object-cover w-[338px] rounded-[28px] "
            src={img}
            alt=""
          />
        </div>
        <div className=" mt-[16px] ">
          <h5 className="text-[15px] ">{title}</h5>
          <p className="text-[14px] w-full mt-[10px] ">{desc}</p>
          <div className="flex absolute bottom-4 mt-4 ">
            <div className="pill px-4 py-3 rounded-[30px] ">Design</div>
            <div className="pill -translate-x-4 px-4 py-3 rounded-[30px] ">
              Visuals
            </div>
            <div className=" -translate-x-[30px] pill  px-4 py-3 rounded-[30px] ">
              Typography
            </div>
            <div className=" flex-shrink-0  -translate-x-[34px] h-[40px] w-[40px] rounded-full flex items-center text-[20px] justify-center border-[1px]  font-clashmd bg-white border-gray-400 text-gray-500 ">
              +
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
