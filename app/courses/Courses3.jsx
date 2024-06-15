import React from "react";

const Container = ({ session, start, end, detail }) => {
  return (
    <div
      className={`w-auto bg-[#DDFF8A] text-black py-[45px] px-[51px] h-[381px] rounded-[40px] `}
    >
      <p className="text-[#4C6B00] font-clashmd text-[16px]  ">
        Session {session}
      </p>
      <h1 className="text-[#4C6B00]">01</h1>
      <div className="mt-[17px] flex w-full items-center justify-between ">
        <h3 className=" font-clashsm text-[24px]  ">{start} Intake</h3>
        <p className="mt-[2px] bg-new px-4 py-2 rounded-[15px] text-[#4C6B00] text-[16px] font-clashmd ">
          Ends in {end}
        </p>
      </div>
      <p className="mt-[18px]  w-full text-justify font-clashreg text-[18px] ">
        {detail}
      </p>
    </div>
  );
};
const Container2 = ({ session, start, end, detail }) => {
  return (
    <div
      className={`w-auto bg-[#4C6B00]  text-white py-[45px] px-[51px] h-[381px] rounded-[40px] `}
    >
      <p className="text-[#DDFF8A] font-clashmd text-[16px]  ">
        Session {session}
      </p>
      <h1 className="text-white">02</h1>
      <div className="mt-[17px] flex w-full justify-between ">
        <h3 className=" font-clashsm text-[24px]  ">{start} Intake</h3>
        <p className="mt-[2px] bg-[#648C00] px-4 py-2 rounded-[15px] text-white text-[16px] font-clashmd ">
          Ends in {end}
        </p>
      </div>
      <p className="mt-[18px]  w-full  font-clashreg text-[18px] ">{detail}</p>
    </div>
  );
};
function Course2() {
  const detailsOne = [
    {
      session: "one",
      start: "January",
      end: "March",
      detail: ` Experience hands-on learning with our January session. Dive into digital skills every Saturday and Sunday, dedicating 1-2 hours per day. This comprehensive journey is tailored to fit your schedule.`,
    },
  ];
  const detailsTwo = [
    {
      session: "two",
      start: "September",
      end: "November",
      detail: ` Join us for another round of hands-on learning in September. Like our January session, enjoy an immersive experience every weekend, dedicating 1-2 hours per day. `,
    },
  ];
  return (
    <main className="bg-sec grid grid-cols-2 gap-[20px] ">
      {detailsOne.map((detail, index) => (
        <Container key={index} {...detail} />
      ))}
      {detailsTwo.map((detail, index) => (
        <Container2 key={index} {...detail} />
      ))}
    </main>
  );
}

export default Course2;
