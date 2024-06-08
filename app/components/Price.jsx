import React from "react";
import Button from "./Button";
import check from "../../assets/check.svg";
import Image from "next/image";
function Price() {
  return (
    <main className="bg-white">
      <div className="border-[2px] border-gray-200 px-[60px] py-[67px] rounded-[30px]  ">
        <div className="flex justify-between ">
          <p>BASIC</p>
          <Button
            otherStyles={"uppercase rounded-[20px] text-[14px]  "}
            color={"primary"}
            title={"start learning"}
          />
        </div>
        <h1>
          ₦ 50,000 <span className="text-[15px]">/session</span>
        </h1>
        <div className="grid mt-[40px] gap-[50px] grid-cols-2">
          {[1, 2, 3, 4, 5, 6].map((d, id) => {
            return (
              <div className="flex items-center gap-[20px] ">
                <Image src={check} className=" object-cover   " />
                <p>Access to community Resources</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Price;
