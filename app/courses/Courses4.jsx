import React from "react";
import Card from "../hero/comp/Card";
function Courses4() {
  return (
    <main className="bg-white px-[70px] ">
      <h3 className="text-center font-clashmd text-[36px] ">
        Here is our selection of courses
      </h3>
      <div className="grid mt-[40px] grid-cols-3 gap-[44px] ">
        {[
          "Graphic Design",
          "UI/UX Design",
          "Backend Development",
          "Graphic Design",
          "UI/UX Design",
          "Backend Development",
        ].map((d, id) => {
          return <Card title={d} />;
        })}
      </div>
    </main>
  );
}

export default Courses4;
