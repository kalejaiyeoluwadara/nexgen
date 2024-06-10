"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/Button";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import ic1 from "../../assets/ic1.svg";
import ic2 from "../../assets/ic2.svg";
import ic3 from "../../assets/ic3.svg";
import ic4 from "../../assets/ic4.svg";
import { usePathname } from "next/navigation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsPersonCheckFill, BsArrowRightShort } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
function Nav() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  return (
    <div className="flex absolute top-0 left-0 z-40 w-full py-[24px] items-center justify-between sm:px-[30px]">
      <section>
        <Link href={"/"}>
          <Image
            src={logo}
            className="object-cover cursor-pointer w-[44px] h-[32px]"
            alt="Logo"
          />
        </Link>
      </section>
      <section className="flex gap-[20px]">
        {["courses", "students", "about", "articles", "contact us"].map(
          (tar, id) => {
            const isActive =
              tar === "courses"
                ? pathname.startsWith("/courses")
                : pathname === `/${tar === "contact us" ? "contact" : tar}`;

            return (
              <li
                key={id}
                className={`hover:text-opacity-100 hover:text-primary transition-all text-[16px] ${
                  isActive ? "text-primary" : "text-white text-opacity-60"
                } capitalize font-normal font-urbanist list-none gap-20`}
              >
                {tar === "courses" ? (
                  <button
                    className={` gap-2 flex items-center justify-center ${
                      active ? "text-primary" : ""
                    } `}
                    onClick={() => {
                      setActive(() => !active);
                    }}
                  >
                    {tar}
                    {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                ) : (
                  <Link href={`/${tar === "contact us" ? "contact" : tar}`}>
                    {tar}
                  </Link>
                )}
              </li>
            );
          }
        )}
      </section>
      <section>
        <Link href={"#courses"}>
          <Button title={"View Courses"} />
        </Link>
      </section>
      <AnimatePresence>
        {active && (
          <div className="w-full  absolute z-[100]  flex items-center justify-center  top-20  ">
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 10,
              }}
              transition={{
                duration: 0.4,
              }}
              className="h-[403px] relative  px-[48px] py-[32px] w-[659px] shadow-md rounded-[12px] bg-slate-50 "
            >
              <div>
                <h1 className="text-[24px] text-black font-semibold ">
                  NexGen Courses
                </h1>
                <p className="text-[16px] text-black font-clashreg w-[90%] ">
                  Our courses are flexible and tailored to fit your busy
                  lifestyle, allowing you to learn at your own pace.
                </p>
              </div>
              <div className="grid grid-cols-2 mt-[36px]  gap-[23px]  ">
                {[
                  {
                    icon: ic1,
                    title: "UI/UX Design",
                    url: "uiux-design",
                  },
                  {
                    icon: ic2,
                    title: "Backend Development",
                    url: "backend-development",
                  },
                  {
                    icon: ic3,
                    title: "Frontend Development",
                    url: "backend-development",
                  },
                  {
                    icon: ic4,
                    title: "Mobile App Development",
                    url: "graphic-design",
                  },
                ].map((d, id) => {
                  return (
                    <Link href={`/courses/${d.url}`}>
                      <div className="w-[270px] h-[48px] gap-4 text-black flex items-center ">
                        <div className="h-full relative w-[48px] bg-[#F8FFE6] rounded-[8px] flex items-center justify-center ">
                          <Image
                            src={d.icon}
                            className="object-cover w-full h-full cover "
                          />
                        </div>
                        <h3 className="text-[16px] font-clashsm  ">
                          {d.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link
                onClick={() => {
                  setActive(false);
                }}
                href={"/courses"}
              >
                <button className="bg-[#E7EAEA] flex items-center justify-center font-clashreg text-[16px] w-full mt-[24px] rounded-[4px] h-[63px] ">
                  View all courses <BsArrowRightShort size={20} />
                </button>
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Nav;
