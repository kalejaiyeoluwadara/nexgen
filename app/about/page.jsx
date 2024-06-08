import React from "react";
import About1 from "./About1";
import Nav from "../Nav/Nav";
import Faq from "../faq/Faq";
import Test from "../hero/comp/tests";
import Hero5 from "../hero/Hero5";
import About2 from "./About2";
import About3 from "./About3";
import About4 from "./About4";
import "../../public/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";

function Page() {
  return (
    <div>
      {/* <Nav /> */}
      <About1 />
      <About2 />
      <About3 />
      <About4 />
      <Hero5 />
      <Faq />
    </div>
  );
}

export default Page;
