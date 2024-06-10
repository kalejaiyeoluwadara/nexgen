"use client";
import React, { useRef, useState, useEffect } from "react";
import Card from "./comp/Card";
import chev1 from "../../assets/chev1.svg";
import chev2 from "../../assets/chev2.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { courses } from "../../utils/data";
function Hero3() {
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
    <div
      id="courses"
      className="min-h-full bg-white py-[80px] px-[110px] w-full"
    >
      <section>
        <h4>What course are you interested in?</h4>
        <p className="w-[605px] text-[16px]">Select the course to view more</p>
      </section>
      <section ref={scrollRef} className="flex  mt-[40px] gap-4 w-full h-auto ">
        {courses.map((d, id) => {
          return <Card key={id} route={d.route} title={d.course} />;
        })}
      </section>
      <section className="mt-[62px] items-center flex gap-[32px]">
        {/* scroll indicator */}
        {/* <div className="h-[4px] w-[80%] bg-black relative">
          <div
            className="bg-primary h-full absolute top-0 left-0"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div> */}
        {/* buttons */}
        {/* <div className="flex gap-[24px]">
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
        </div> */}
      </section>
    </div>
  );
}

export default Hero3;
