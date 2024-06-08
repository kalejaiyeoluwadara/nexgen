import Image from "next/image";
import Hero from "./hero/Hero";
import CustomScroll from "@/CustomScroll";
export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden ">
      {/* <CustomScroll scrollSpeed={1} /> */}
      <Hero />
    </div>
  );
}
