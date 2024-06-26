import Image from "next/image";
import React from "react";
import stats from "../../../assets/stats.png";

function Test({ height }) {
  return (
    <div
      className="flex flex-col w-[340px] flex-shrink-0 border-[1px] border-gray-300 rounded-[20px] items-start justify-center px-[32px] border-opacity-25 gap-2"
      style={{ height: `${height}px` }}
    >
      <p className="font-clashreg text-[16px]">
        “Well-structured and cover a wide range of topics, making it easy for
        learners of all levels to grasp complex concepts. The instructors are
        clearly experts in their field, delivering the material with enthusiasm
        and clarity delivering the material with enthusiasm and clarity. “
      </p>
      <div className="flex mt-8 items-center justify-start gap-3">
        <Image src={stats} className="object-cover" alt="Profile" />
        <h3 className="text-[15px] font-clashmd">Jack Jones</h3>
      </div>
    </div>
  );
}

export default Test;
