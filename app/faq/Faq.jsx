"use client";
import { FaTimes, FaPlus } from "react-icons/fa";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I enroll in courses at NexGen Digital Academy?",
    answer: `To enroll for our courses, visit our website at- (please input the link for the website here) navigate to the “Courses” section. Select the course you’d like to choose and follow the enrollment and application process.`,
  },
  {
    question: "What type of courses does NexGen Digital Academy offer?",
    answer:
      "NexGen Digital Academy offers a wide range of courses in (input the courses here). Explore our course catalog for more details.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="w-screen min-h-screen text-white flex flex-col items-center justify-center sm:px-20 px-[10px] mb-[100px] bg-black"
    >
      <motion.h1 className=" text-[36px] mb-[40px] text-center">
        Frequently Asked Questions
      </motion.h1>

      <div className="flex flex-col tablet:w-full tablet:px-[50px] sm:w-full flex-wrap gap-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={` transition-all rounded-[20px] sm:px-6 ${
              activeIndex === index
                ? "bg-primary text-black "
                : "text-white bg-tertiary"
            } py-4`}
            layout
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left p-4 flex justify-between items-center"
            >
              <h1 className="text-[20px]">{faq.question}</h1>
              <span className="transition-all font-[600]">
                {activeIndex === index ? (
                  <FaTimes size={15} />
                ) : (
                  <FaPlus size={15} />
                )}
              </span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    height: { duration: 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className="p-4  text-[18px]   "
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
