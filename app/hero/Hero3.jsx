import React from "react";
import Card from "./comp/Card";

function Hero3() {
  return (
    <div className="min-h-full bg-white  py-[80px] w-full ">
      <section className="px-[110px]">
        <h3 className="">What course are you interested in?</h3>
        <p className="w-[605px] text-[16px] ">Select the course to view more</p>
      </section>
      <section className="flex no-scrollbar pl-[110px] min-w-full overflow-x-scroll  mt-10 gap-[20px] ">
        {[
          "Graphic Design",
          "UI/UX Design",
          "Backend Development",
          "Mastering UI Design",
        ].map((d, id) => {
          return <Card title={d} />;
        })}
      </section>
    </div>
  );
}

export default Hero3;
