import React from "react";
import lady from "../../assets/lady.png";
import Image from "next/image";
function Hero2() {
  return (
    <div className="w-full flex pt-[80px] flex-col bg-white px-[110px]  min-h-full ">
      <section>
        <h3 className="">What makes Nex unique?</h3>
        <p className="w-[605px] text-[16px] ">
          At NexGen, your ability to create your own unique learning experience
          is very important to us, that’s why we give our learners access to
          courses tailored to cater to their specific needs with real-time
          applicable learning outcomes that can aid professional development in
          their careers.
        </p>
      </section>
      <section className="mt-[80px]">
        <div>
          <Image src={lady} className="h-[800px] w-[600px] " />
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default Hero2;
