"use client";
import React, { useRef, useState, useEffect } from "react";
import Profile from "./comp/Profile";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import Button from "../components/Button";
import chev1 from "../../assets/chev1.svg";
import chev2 from "../../assets/chev2.svg";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  const handleScroll = () => {
    const { current } = scrollRef;
    setScrollLeft(current.scrollLeft);
  };

  useEffect(() => {
    const { current } = scrollRef;
    setScrollWidth(current.scrollWidth - current.clientWidth);
    current.addEventListener("scroll", handleScroll);

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollPercentage = (scrollLeft / scrollWidth) * 100;

  return (
    <div className="bg-sec min-h-[858px] px-[90px] py-[80px] text-white w-full ">
      <section className="">
        <h3 className="text-[36px] font-clashmd ">
          Learn from experienced mentors & tutors
        </h3>
        <p className="w-[605px] text-[20px] ">
          Gain knowledge and skills from Industry Experts
        </p>
      </section>
      <section
        ref={scrollRef}
        className="flex  overflow-x-scroll no-scrollbar mt-20 gap-4 w-full h-auto  "
      >
        {data.map((d, id) => {
          return <Profile img={d.img} name={d.name} role={d.role} />;
        })}
      </section>
      <section className="mt-[62px] items-center flex gap-[32px]">
        {/* scroll indicator */}
        <div className="h-[4px] w-[80%] bg-black relative">
          <div
            className="bg-primary h-full absolute top-0 left-0"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
        {/* buttons */}
        <div className="flex gap-[24px]">
          <motion.button
            whileTap={{
              scale: 0.8,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            onClick={() => scroll("left")}
            className="btn "
          >
            <Image src={chev1} className="object-cover" />
          </motion.button>
          <motion.button
            whileTap={{
              scale: 0.8,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            onClick={() => scroll("right")}
            className="btn"
          >
            <Image src={chev2} className="object-cover" />
          </motion.button>
        </div>
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
