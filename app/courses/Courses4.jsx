import React from "react";
import Card from "../hero/comp/Card";
import { courses } from "../../utils/data";
function Courses4() {
  return (
    <main id="courses" className="bg-white px-[70px] ">
      <h3 className="text-center font-clashmd text-[36px] ">
        Here is our selection of courses
      </h3>
      <div className="grid mt-[40px] grid-cols-3 gap-[44px] ">
        {courses.map((d, id) => {
          return <Card title={d.course} img={d.image} route={d.route} />;
        })}
      </div>
    </main>
  );
}

export default Courses4;
