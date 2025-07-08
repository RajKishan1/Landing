import React from "react";
import { HiChevronRight, HiOutlineExternalLink } from "react-icons/hi";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Outfit } from "next/font/google";
import HeroImageSection from "./HeroImageSection";
const outfit = Outfit({ weight: ["500", "700"] });
const HeroSection = () => {
  return (
    <div className=" w-full h-screen flex flex-col items-center gap-4">
      <div
        className={`w-full flex items-center justify-center text-center gap-3 mt-20 text-7xl font-extrabold ${outfit.className}`}
      >
        Turn Your Ideas into <br /> Powerful Prompts & Code
        {/* One place to get all :{" "}
        <WordRotate
          words={["Prompt", "Code"]}
          className={`text-6xl font-extrabold ${outfit.className}`}
        /> */}
      </div>
      <p
        className={`${outfit.className} text-2xl text-neutral-500 font-medium`}
      >
        No need to build from scratch anymore
      </p>
      <div className="flex gap-8 mt-4">
        <a
          href="#"
          className="flex gap-2 items-center px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:rounded-lg hover:scale-110 transition-all "
        >
          Start For Free
          <HiChevronRight size={20} />
        </a>
        <a
          href="#"
          className="flex gap-2 items-center px-6 py-2 text-sm font-semibold text-white bg-neutral-800 rounded-full hover:rounded-lg hover:scale-110 transition-all "
        >
          Buy Now <HiOutlineExternalLink size={20} />
        </a>
      </div>
      <HeroImageSection />
    </div>
  );
};

export default HeroSection;
