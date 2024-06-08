import React from "react";
import Test from "./comp/tests";

function Hero5() {
  return (
    <div className="bg-black text-white pt-[80px] min-h-full w-full px-[80px] ">
      <section className="flex items-center justify-center">
        <h3 className="text-[36px] font-clashmd ">What our Alumni says</h3>
      </section>
      <section className="grid grid-cols-3 items-center justify-center gap-2 mt-10 ">
        {[1, 2, 3, 4, 5, 6].map((d, id) => {
          return <Test />;
        })}
      </section>
    </div>
  );
}

export default Hero5;
