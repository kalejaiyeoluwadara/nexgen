import React from "react";

const Container = ({ session, start, end, detail }) => {
  return (
    <div className="w-full bg-[#354C4D] text-white py-[45px] px-[51px] h-[368px] rounded-[40px] ">
      <p className="text-gray-400 font-clashmd text-[12px]  ">
        Session {session}
      </p>
      <div className="mt-[58px]">
        <h3 className=" font-clashsm text-[24px]  ">{start} Intake</h3>
        <p className="mt-[2px] text-gray-400 text-[16px] font-clashmd ">
          Ends in {end}
        </p>
      </div>
      <p className="mt-[25px] font-clashmd text-[16px] ">{detail}</p>
    </div>
  );
};

function Course2() {
  const details = [
    {
      session: "one",
      start: "January",
      end: "March",
      detail: ` Experience the thrill of hands-on learning with our January session.
        Dive into the world of digital skills every Saturday and Sunday,
        dedicating one to two hours per day to mastering the course material.
        This session is your complete journey, offering a comprehensive learning
        experience tailored to your schedule.`,
    },
    {
      session: "two",
      start: "September",
      end: "November",
      detail: ` Join us for another exciting round of learning in September. Just like our January session, this intake provides the same immersive hands-on experience, giving you the flexibility to learn on weekends. Whether you missed the January session or want to revisit and reinforce your learning, September offers you a fresh start to complete the course at your own pace.`,
    },
  ];
  return (
    <main className="bg-sec flex flex-col gap-[20px] ">
      {details.map((d, id) => {
        const { detail, end, session, start } = d;
        return (
          <Container
            start={start}
            detail={detail}
            session={session}
            end={end}
            key={id}
          />
        );
      })}
    </main>
  );
}

export default Course2;
