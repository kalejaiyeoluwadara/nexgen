"use client";
import { FaTimes, FaPlus } from "react-icons/fa";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import plus from "../../assets/plus.svg";
import times from "../../assets/times.svg";
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
  {
    question:
      "Can I enroll in multiple courses simultaneously at NexGen Digital Academy?",
    answer: `No, you can’t. The reason for this is to ensure that learners enjoy a focused and immersive learning experience, as we aim to promote concentrated effort and engagement with the content available for each course. And also, to facilitate better tracking of progress and assessment of individual performance, providing a more personalized and supportive learning environment.`,
  },
  {
    question: "How does online learning at NexGen Digital Academy work?",
    answer: `Our online learning platform provides video lectures, interactive quizzes, and hands-on projects. You can access the learning materials at your own pace and convenience.
`,
  },
  {
    question: "What is the duration of the courses?",
    answer: `Course durations vary. You can find specific information about the duration of each course on the course description page.
`,
  },
  {
    question: "Do I receive a certificate upon course completion?",
    answer: `Yes, upon successful completion of a course, you will receive a certificate that you can showcase on your LinkedIn profile or resume.
`,
  },
  {
    question: "How can I interact with instructors and other learners?",
    answer: `NexGen Digital Academy provides discussion forums, live Q&A sessions, and community features where you can interact with instructors and fellow learners.
`,
  },
  {
    question: "Can I access the courses on mobile devices?",
    answer: `Yes, our platform is mobile-friendly. You can access courses from your computer, tablet, or smartphone.
`,
  },
  {
    question: "What technical requirements do I need for the courses?",
    answer: `Ensure you have a stable internet connection and a device (computer, tablet, or smartphone) that meets the minimum system requirements outlined in the course details.`,
  },
  {
    question: "Is there any financial aid or scholarship available?",
    answer: `NexGen Digital Academy offers two installment payments for each course. And offers promotions and discounts occasionally. Our websites and socials are always updated with the current opportunities available. And you can reach out to the support team for available opportunities.`,
  },
  {
    question: "Is there a refund policy for course fees?",
    answer: `Our refund policy is outlined in the terms and conditions. Please review this information on our website or contact our support team for details.`,
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
      className="w-screen min-h-screen text-white pt-[161px] flex flex-col items-center justify-center  bg-black"
    >
      <motion.h1 className=" text-[36px] font-clashmd mb-[40px] text-center">
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
              <h1 className="text-[20px] font-clashmd ">{faq.question}</h1>
              <span className="transition-all font-[600]">
                {activeIndex === index ? (
                  <Image width={17} height={17} alt="Plus" src={times} />
                ) : (
                  <Image width={17} height={17} alt="Plus" src={plus} />
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
                    className="p-4 font-clashreg text-[18px]   "
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
