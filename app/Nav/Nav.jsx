import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import logo from "../../assets/logo.svg";
import Image from "next/image";
function Nav() {
  return (
    <div className="flex  relative top-0 w-full py-[24px] items-center justify-between sm:px-[30px] ">
      <section>
        <Image src={logo} className=" object-cover w-[44px] h-[32px]  " />
      </section>
      <section className="flex gap-[20px]  ">
        {["courses", "students", "about", "articles", "contact"].map(
          (tar, id) => {
            return (
              <li className="text-white hover:text-opacity-[1] transition-all text-[16px] capitalize font-normal font-urbanist text-opacity-60 list-none gap-20  ">
                <Link href={`/${tar}`}>{tar}</Link>
              </li>
            );
          }
        )}
      </section>
      <section>
        <Button title={"View Courses"} />
      </section>
    </div>
  );
}

export default Nav;
