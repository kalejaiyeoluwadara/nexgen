"use client";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
function Learn() {
  return (
    <main className="bg-white">
      <div className="border-[2px] border-gray-200 px-[60px] py-[67px] rounded-[30px]  ">
        <h3 className="text-[32px] font-clashmd ">What you'll learn</h3>
        <div className="grid mt-[40px] gap-[50px] grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((d, id) => {
            return (
              <div className="flex items-center gap-[20px] ">
                <IoMdCheckmark size={30} />
                <p>
                  You will master the Python programming language by building
                  100 unique projects over 100 days.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Learn;
