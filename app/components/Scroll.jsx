"use client";
import React, { useState } from "react";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
function Scroll2() {
  const [show, setShow] = useState(false);
  return (
    <Link href={"/"}>
      <motion.div
        whileTap={{
          scale: 0.975,
        }}
        onMouseOver={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
        className={` sm:visible  cursor-pointer z-40 flex items-center justify-center border-[1px] border-white border-opacity-40 transition-all  ${
          show ? "pb-[30px]" : "pb-[0px]"
        } rounded-[50%] sm:h-[95px] overflow-hidden sm:w-[95px] w-[60px] h-[60px] bg-none text-black `}
      >
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{
                top: "-100px",
                left: "5px",
                opacity: 1,
              }}
              animate={{
                top: 0,
                left: 0,
                opacity: 0,
              }}
              exit={{
                top: "-100px",
                left: "-30px",
                opacity: 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full absolute rounded-[50%] w-full -z-20 bg-white  "
            />
          )}
        </AnimatePresence>

        <FaArrowUpLong className="text-white" size={20} />
      </motion.div>
    </Link>
  );
}

export default Scroll2;
