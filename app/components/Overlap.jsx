import React from "react";

function Overlap({ styles, data, contentStyle }) {
  return (
    <div className="flex mt-4 text-[8px] ">
      <div className={` overlap px-4 py-3 rounded-[30px] ${contentStyle} `}>
        Design
      </div>
      <div
        className={` overlap -translate-x-4 px-4 py-3 rounded-[30px] ${contentStyle} `}
      >
        Visuals
      </div>
      <div
        className={` overlap -translate-x-[30px]  px-4 py-3 rounded-[30px] ${contentStyle} `}
      >
        Typography
      </div>
    </div>
  );
}

export default Overlap;
