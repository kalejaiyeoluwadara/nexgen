import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import logo from "../../assets/logo.svg";
import { BsArrowBarUp } from "react-icons/bs";
import Link from "next/link";
import Scroll2 from "../components/Scroll";
function Footer() {
  return (
    <div className="min-h-screen  py-[80px] px-[103px] w-full text-white bg-black  ">
      <article className="flex justify-between">
        <section className="flex flex-col gap-4">
          <article>
            <div className="flex gap-2 items-center justify-start ">
              <Image src={logo} className="object-cover  " />
              <div>
                <h3 className="text-[20px] leading-[12px] ">NextGen</h3>
                <p className="text-opacity-[0.6] text-white ">
                  Digital Academy
                </p>
              </div>
            </div>
            <p className="w-[473px] text-opacity-[0.8] text-white mt-[24px] ">
              With NexGen Digital Academy, you have the tools, resources, and
              support needed to transform your digital aspirations into reality.
              Start your journey with us and unleash your digital potential
              today!
            </p>
          </article>
          <article className="mt-[88px]">
            <h3>Subscribe to our newsletter</h3>
            <p className="w-[444px] mt-[5px]  text-opacity-[0.8] text-white ">
              The stories you’ll be talking about tomorrow —delivered straight
              to your inbox today
            </p>
            <div className="flex gap-3 mt-[16px]">
              <input
                placeholder="EMAIL ADDRESS"
                className="w-[319px] px-3 h-[66px] rounded-[12px] bg-black border-[1px] border-gray-700 "
                type="email"
              />
              <Button
                otherStyles={"h-[62px] w-[154px] "}
                color={"primary"}
                title={"Subscribe"}
              />
            </div>
          </article>
        </section>
        {/* Sec section */}
        <section>
          <div className="flex gap-[66px]">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white text-[16px] text-opacity-[0.8]">
                Quick Navigation
              </h3>
              <ul className="mt-[30px] flex flex-col gap-[21px] ">
                {["home", "about us", "contact", "courses"].map((d, id) => {
                  return (
                    <li className="text-white text-[16px] capitalize text-opacity-[0.8] ">
                      <Link href={`/${d === "about us" ? "about" : d}`}>
                        - {d}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-center text-[16px] text-opacity-[0.8]">
                Socials
              </h3>
              <ul className="mt-[30px] flex flex-col gap-[21px] ">
                {["Instagram", "LinkedIn", "Facebook"].map((d, id) => {
                  return (
                    <li className="text-white text-opacity-[0.8]">
                      <Link href={"/"}>- {d}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Up button */}
          <div className="flex my-[62px] items-center justify-center h-[] w-[]  ">
            <Scroll2 />
          </div>
        </section>
      </article>
      <section className="flex mt-[52px] justify-between">
        <p className="  text-opacity-[0.8] text-white ">
          Copyright 2024 © Nexgen.{" "}
        </p>
        <div className="flex text-white text-opacity-[0.8] gap-[35px] ">
          <p>Privacy Policy </p>
          <p>Terms & Conditions</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
