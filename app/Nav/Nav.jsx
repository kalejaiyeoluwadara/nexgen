"use client";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  return (
    <div className="flex absolute top-0 left-0 z-40 w-full py-[24px] items-center justify-between sm:px-[30px]">
      <section>
        <Link href={"/"}>
          <Image
            src={logo}
            className="object-cover cursor-pointer w-[44px] h-[32px]"
            alt="Logo"
          />
        </Link>
      </section>
      <section className="flex gap-[20px]">
        {["courses", "students", "about", "articles", "contact us"].map(
          (tar, id) => {
            const isActive =
              tar === "courses"
                ? pathname.startsWith("/courses")
                : pathname === `/${tar === "contact us" ? "contact" : tar}`;

            return (
              <li
                key={id}
                className={`hover:text-opacity-100 hover:text-primary transition-all text-[16px] ${
                  isActive ? "text-primary" : "text-white text-opacity-60"
                } capitalize font-normal font-urbanist list-none gap-20`}
              >
                <Link href={`/${tar === "contact us" ? "contact" : tar}`}>
                  {tar}
                </Link>
              </li>
            );
          }
        )}
      </section>
      <section>
        <Link href={"#courses"}>
          <Button title={"View Courses"} />
        </Link>
      </section>
    </div>
  );
}

export default Nav;
