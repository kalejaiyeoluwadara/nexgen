import React from "react";
import Image from "next/image";
import light from "../../assets/person.svg";
import Button from "./Button";
// Assuming you have a Button component

const CoursePage = () => {
  return (
    <main className="bg-sec">
      <section className="w-full h-full grid grid-cols-5 gap-[30px] grid-rows-2 ">
        <div className=" h-[316px] col-span-3 rounded-[20px] text-white p-[32px]  bg-tertiary flex flex-col  ">
          <div className="h-[48px] w-[48px] bg-pr2 rounded-[8px] flex items-center justify-center  ">
            <Image className="object-cover " src={light} />
          </div>
          <h3 className="text-[20px] mt-[33px] font-clashsm ">Requirements</h3>
          <ul className=" px-4 flex list-disc flex-col mt-[20px] ">
            {[1, 2, 3, 4].map((d, id) => {
              return <li>No programming experience is required.</li>;
            })}
          </ul>
        </div>
        {/* two */}
        <div className=" h-[316px] col-span-2 rounded-[20px] text-white p-[32px]  bg-tertiary flex flex-col  ">
          <div className="h-[48px] flex-shrink-0 w-[48px] bg-pr2 rounded-[8px] flex items-center justify-center  ">
            <Image className="object-cover " src={light} />
          </div>
          <h3 className="text-[20px] mt-[23px] font-clashsm ">
            Course Content
          </h3>
          <p className="text-gray-300 font-clashreg text-[16px] mt-[20px] ">
            Each session is a standalone opportunity to gain valuable skills and
            complete the course successfully.{" "}
          </p>
          <Button
            title={"Download Roadmap"}
            color={"primary"}
            otherStyles={"w-full mt-[20px] "}
          />
        </div>
        {/* three */}
        <div className=" h-[316px] col-span-5 rounded-[20px] text-white p-[32px]  bg-tertiary flex flex-col  ">
          <div className="h-[48px] flex-shrink-0 w-[48px] bg-pr2 rounded-[8px] flex items-center justify-center  ">
            <Image className="object-cover " src={light} />
          </div>
          <h3 className="text-[20px] mt-[23px] font-clashsm ">
            Course Description
          </h3>
          <p className="text-gray-300 font-clashreg text-[16px] mt-[20px] ">
            Mastering UI Design is an advanced course offered by NexGen Digital
            Academy that focuses on equipping students with the skills and
            knowledge needed to become proficient UI designers. This course is
            designed for individuals who have a foundational understanding of UI
            design principles and are looking to elevate their skills to an
            advanced level.
          </p>
          <p className="text-gray-300 font-clashreg text-[16px] mt-[20px] ">
            Through a combination of theoretical learning and practical
            projects, students will dive deep into topics such as advanced user
            interface design, interactive prototyping, usability testing, and
            design systems.
          </p>
        </div>
      </section>
    </main>
  );
};

export default CoursePage;
