import React from "react";
import man from "../../assets/man.png";
import Image from "next/image";
import person from "../../assets/person.svg";
import people from "../../assets/people.svg";
import light from "../../assets/light.svg";
import Slot from "../hero/comp/Slot";
function Courses2() {
  const data = [
    {
      title: "Part-Time Learning",
      sub: "Learning doesn’t have to mean putting your life on hold. We’ve designed our courses, certificates, and degrees to give you the flexibility to pace your studies to fit your schedule.",
      icon: person,
    },
    {
      title: "Flexible Schedules",
      sub: "We offer courses multiple times a year, in terms of varying lengths — so you can balance school, career, and other life commitments.",
      icon: person,
    },
  ];
  return (
    <main className="bg-white">
      <section className="mt-[80px] flex gap-[40px] items-center justify-between w-full ">
        <div className="flex flex-col gap-[20px]">
          {data.map((data, id) => {
            return <Slot title={data.title} sub={data.sub} img={data.icon} />;
          })}
        </div>
        <div>
          <Image
            src={man}
            className="h-[800px] object-cover rounded-[32px] w-[600px] "
          />
        </div>
      </section>
    </main>
  );
}

export default Courses2;
