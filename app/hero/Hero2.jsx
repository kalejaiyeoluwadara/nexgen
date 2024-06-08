import React from "react";
import lady from "../../assets/lady.png";
import Image from "next/image";
import Slot from "./comp/Slot";
import person from "../../assets/person.svg";
import people from "../../assets/people.svg";
import light from "../../assets/light.svg";
function Hero2() {
  const data = [
    {
      title: "Expert Instructors",
      sub: "Gain invaluable insights and expertise through direct guidance from industry-leading professionals who bring real-world experience and cutting-edge knowledge to the classroom.",
      icon: person,
    },
    {
      title: "Comprehensive Training",
      sub: "Participate in extensive, hands-on training programs and receive personalized mentorship tailored to your individual learning needs and career goals.",
      icon: light,
    },
    {
      title: "Collaborative Community",
      sub: "Become part of a vibrant community of like-minded tech enthusiasts and collaborate on real-world projects to apply your valuable skills.",
      icon: people,
    },
  ];
  return (
    <div className="w-full flex pt-[80px] flex-col bg-white px-[110px]  min-h-full ">
      <section className="">
        <h4 className=" font-clashmd ">What makes Nex unique?</h4>
        <p className="w-full  text-[24px] ">
          At NexGen, your ability to create your own unique learning experience
          is very important to us, that’s why we give our learners access to
          courses tailored to cater to their specific needs with real-time
          applicable learning outcomes that can aid professional development in
          their careers.
        </p>
      </section>
      <section className="mt-[80px] flex gap-[40px] justify-between w-full ">
        <div>
          <Image
            src={lady}
            className="h-[800px] object-cover rounded-[32px] w-[600px] "
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {data.map((data, id) => {
            return <Slot title={data.title} sub={data.sub} img={data.icon} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Hero2;
