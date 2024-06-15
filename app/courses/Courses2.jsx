import React from "react";
import man from "../../assets/smile.png";
import Image from "next/image";
import person from "../../assets/person.svg";
import people from "../../assets/people.svg";
import light from "../../assets/light.svg";
import Slot from "../hero/comp/Slot";

function Courses2() {
  const data = [
    {
      title: "Beginner Friendly",
      sub: "We use simplified methods to ensure quick assimilation, enabling you to excel in any course of your choice, even with zero prior knowledge.",
      icon: person,
    },
    {
      title: "Flexible Schedules",
      sub: "We offer courses multiple times a year, in terms of varying lengths — so you can balance school, career, and other life commitments.",
      icon: person,
    },
    {
      title: "Part-Time Learning",
      sub: "Learning doesn’t have to mean putting your life on hold. We’ve designed our courses, certificates, and degrees to give you the flexibility to pace your studies to fit your schedule.",
      icon: person,
    },
  ];
  return (
    <main id="courses2" className="bg-white">
      <section className="mt-[80px] flex gap-[121px] items-center justify-between w-full ">
        <div className="flex flex-col gap-[24px]">
          {data.map((data, id) => {
            return <Slot title={data.title} sub={data.sub} img={data.icon} />;
          })}
        </div>
        <div>
          <Image
            src={man}
            className="h-[811px] object-cover rounded-[32px] w-[621px] "
          />
        </div>
      </section>
    </main>
  );
}

export default Courses2;
