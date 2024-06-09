import React from "react";
import Profile from "./comp/Profile";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import Button from "../components/Button";
function Hero4() {
  const data = [
    {
      name: "Ogundele Israel",
      img: profile1,
      role: "Senior Software Engineer",
    },
    {
      name: "Olaoye Jesumbo",
      img: profile3,
      role: "Senior Software Engineer",
    },
    {
      name: "Oyefeso Afolabi",
      img: profile2,
      role: "Creative Designer",
    },
  ];
  return (
    <div className="bg-sec min-h-[858px] px-[110px] py-[80px] text-white w-full ">
      <section className="">
        <h3 className="text-[36px] font-clashmd ">
          Learn from experienced mentors & tutors
        </h3>
        <p className="w-[605px] text-[20px] ">
          Gain knowledge and skills from Industry Experts
        </p>
      </section>
      <section className="flex items-center justify-center mt-20 gap-[40px]">
        {data.map((d, id) => {
          return <Profile img={d.img} name={d.name} role={d.role} />;
        })}
      </section>
      <section className="flex w-full items-center justify-center mt-20 ">
        <Button
          color={"primary"}
          otherStyles={"w-[290px] h-[60px] rounded-[50px] "}
          title={"Mentors $ Tutors"}
        />
      </section>
    </div>
  );
}

export default Hero4;
