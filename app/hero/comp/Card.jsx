import Image from "next/image";
import React from "react";
import wall from "../../../assets/wall.png";
import Link from "next/link";
function Card({ title, sub, img, route }) {
  return (
    <Link href={`/courses/${route}`}>
      <div className="h-[495px] border-[1px] cursor-pointer hover:border-gray-600 transition-all border-gray-300 flex-shrink-0 w-[377px] rounded-[30px] p-4  ">
        <div className="relative">
          <Image
            className="h-[269px] w-[338px] rounded-[28px] "
            src={wall}
            alt=""
          />
          <p className="absolute text-[8px] font-clashmd left-3 bottom-3">
            1-2Hour per week
          </p>
        </div>
        <div className=" mt-[28px] ">
          <h5 className="text-[15px] ">{title}</h5>
          <p className="text-[10px] mt-[10px] ">
            Dive into the world of UI/UX design and transform your ideas into
            experiences users love. Learn the secrets of visual design,
            understand user needs.
          </p>
          <div className="flex mt-4 ">
            <div className="border-[1px] text-[8px] font-clashmd bg-white border-gray-400 px-4 py-3 rounded-[30px] ">
              Design
            </div>
            <div className="border-[1px] text-[8px] font-clashmd bg-white border-gray-400 -translate-x-4 px-4 py-3 rounded-[30px] ">
              Visuals
            </div>
            <div className="border-[1px] text-[8px] font-clashmd bg-white border-gray-400 -translate-x-[30px]  px-4 py-3 rounded-[30px] ">
              Typography
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
