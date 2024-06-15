import React from "react";

function TextBox({ otherStyles, title, sub, sub2, conc }) {
  return (
    <div
      className={`h-[359px] flex flex-col gap-[14px] w-[1006px] rounded-[32px] px-[80px] py-[60px] ${otherStyles} `}
    >
      <h2 className="text-[32px] font-clashsm ">{title}</h2>
      <p className="text-[20px] font-clashreg ">{sub}</p>
      <p className="text-[20px] font-clashreg ">{sub2}</p>
      <p className="text-[20px] text-[#051112] font-clashbold ">{conc}</p>
    </div>
  );
}

export default TextBox;
