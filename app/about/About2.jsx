import React from "react";
import Slot from "./comp/Slots";
import light from "../../assets/light.svg";
function About2() {
  return (
    <div className="flex py-[40px] px-[110px] min-h-[506px] bg-white justify-between items-center ">
      <Slot
        img={light}
        title={"Our Mission"}
        sub={
          "With unwavering commitment, NexGen Digital Academy endeavours to narrow the bridge between learners and the realities of their world. Our mission unfolds through the provision of sought-after tech courses, thoughtfully curated to cater to the unique needs of our learners. "
        }
        sub2={
          "In this nurturing environment, we extend the invaluable opportunity for empowerment and equip learners with the essential resources. The aim is clear: fostering individuals who not only adapt to change but emerge as catalysts for transformation in the ever-evolving Tech industry, leaving an indelible mark on their respective generations. Join us in this journey towards professional growth and lasting impact."
        }
      />
      <Slot
        img={light}
        title={"Our Vision"}
        sub={
          "We aspire to be one of Africa’s leading EdTech Company, nurturing a community of tech trailblazers making indelible impact in the emerging and constantly changing world of Technology. Our vision entails being a beacon of innovation in the realm of technology education. "
        }
        sub2={
          "We’re not just content with just keeping up; we want to lead the charge, empowering our learners to become the next generation of digital pioneers. We’re all about nurturing and cultivating skills and fostering a supportive environment where dreams can become realities. Join us on this incredible journey to shape the future of technology together!"
        }
      />
    </div>
  );
}

export default About2;
