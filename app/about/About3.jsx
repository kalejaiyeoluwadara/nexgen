import React from "react";
import lady from "../../assets/profile2.png";
import Card from "./comp/Card";
import Image from "next/image";
function About3() {
  return (
    <main className="flex bg-sec flex-col">
      <div>
        <h5 className="text-[36px] text-white ">
          Learn from experienced mentors & tutors
        </h5>
        <p className="text-white text-[20px] text-opacity-[0.8]">
          Gain knowledge and skills from Industry Experts
        </p>
      </div>
      <article className="flex  w-full justify-between mt-[40px] gap-[44px] items-center">
        <div className="h-[740px] w-[449px] ">
          <Image
            src={lady}
            className=" h-full bg-[#E2E2E2] w-full object-cover rounded-[32px] "
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          {[1, 2, 3, 4, 5, 6].map((d, id) => {
            return (
              <Card key={id} name={"Oyefeso Afolabi"} role={"Creative Lead"} />
            );
          })}
        </div>
      </article>
    </main>
  );
}

export default About3;
