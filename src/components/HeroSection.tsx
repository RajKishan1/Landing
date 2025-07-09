import React from "react";
import { HiChevronRight, HiOutlineExternalLink } from "react-icons/hi";
import { Outfit } from "next/font/google";
import { BlurFade } from "@/components/magicui/blur-fade";

import HeroImageSection from "./HeroImageSection";
const outfit = Outfit({ weight: ["500", "700"] });
const HeroSection = () => {
  return (
    <div className=" w-full  flex flex-col items-center gap-4">
      <BlurFade direction="up" duration={1} className=" flex flex-col items-center gap-4">
        {" "}
        <div
          className={`w-full flex items-center justify-center text-white text-center gap-3 mt-36 text-7xl font-bold ${outfit.className}`}
        >
          Turn Your Ideas into <br /> Powerful Prompts & Code
        </div>
        <p
          className={`${outfit.className} text-2xl text-neutral-500 font-medium`}
        >
          No need to build from scratch anymore
        </p>
      </BlurFade>
      <div className="flex gap-4 mt-4">
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
