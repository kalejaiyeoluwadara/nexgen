import Image from "next/image";
import React from "react";
import bac from "../../assets/bac.png";
import Button from "../components/Button";
import about from "../../assets/about.png";
import TextBox from "./TextBox";
function About1() {
  return (
    <div
      id="main"
      className="min-h-[100vh] flex items-center  justify-center w-full "
    >
      <Image
        src={bac}
        className=" object-cover h-[100vh] w-full -z-10 absolute top-0 left-0  "
      />
      <div className=" -translate-y-20 mt-[190px] gap-[32px] items-center justify-center flex flex-col ">
        <h1 className="w-[1208px] leading-normal text-center  text-white   ">
          Embark on a <span className="green">transformative</span> learning
          journey with <span className="green">NexGen</span>
          Digital Academy
        </h1>
        <p className="w-[855px] text-[24px] text-white text-opacity-70  text-center ">
          NexGen Digital Academy is a premier tech school dedicated to helping
          learners of all backgrounds achieve their career goals.
        </p>
        <Button
          otherStyles={"text-[18px]"}
          title={"Start Learning"}
          color={"primary"}
        />
        <Image
          src={about}
          className=" h-[488px] rounded-[32px] object-cover mt-[48px] w-[1215px]"
          alt=""
        />
        <div className="flex flex-col -translate-y-20 gap-[24px]">
          <TextBox
            title={"Our Mission"}
            sub={
              "NexGen Digital Academy endeavours to bridge the gap between learners and the tech industry by offering in-demand courses tailored to their needs. "
            }
            sub2={
              "We empower students with the resources to adapt and lead in the ever-evolving tech world, making a lasting impact. "
            }
            conc={
              "Join us on this journey towards professional growth and transformation."
            }
            otherStyles={"bg-new"}
          />
          <TextBox
            title={"Our Vision"}
            sub={
              "We aspire to be Africa’s leading EdTech company, nurturing tech trailblazers who make an indelible impact in the ever-evolving world of technology."
            }
            sub2={
              "Our vision is to be a beacon of innovation in tech education, leading the charge and empowering learners to become digital pioneers. We cultivate skills in a supportive environment where dreams become realities. "
            }
            conc={"Join us to shape the future of technology together!"}
            otherStyles={"bg-[#E7EAEA]"}
          />
        </div>
      </div>
    </div>
  );
}

export default About1;
