"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Audiowide } from "next/font/google";
import { Zen_Dots } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ weight: ["400", "500", "600"] });
const zen = Zen_Dots({ weight: ["400"] });
const audio = Audiowide({ weight: ["400"] });

const Carousel = () => {
  return (
    <div className="mt-28  text-white ">
      <h1
        className={`${inter.className} w-3/4 mx-auto text-[55px] leading-[100%] font-bold mb-20`}
      >
        Not everything powerful <br /> has to look complicated
      </h1>
      <div className=" h-screen w-full bg-black flex gap-4 ">
        <div className=" h-full w-[30%] flex flex-col pt-20 justify-around items-center ">
          <h1 className="text-8xl font-bold text-white">Code</h1>{" "}
          <img src="/gpt2.png" className=" w-[300px] h-auto" alt="#" />
        </div>
        <div className=" h-full w-[70%] bg-gradient-to-br from-black to-slate-900 flex items-center justify-center p-16">
          <div className="w-4/5 h-4/5 bg-white/5 backdrop-blur-3xl rounded-2xl px-4 py-8 border-2 border-neutral-800 text-center">
            {" "}
            <h1 className={`text-4xl font-bold text-white ${zen.className}`}>
              Lorem ipsum dolor sit car happy 💡.
            </h1>
            <p className=" text-neutral-400 text-lg font-medium mt-3 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae soluta quod praesentium doloremque beatae, aliquid
              voluptatum commodi? Et, quas minima.soluta quod praesentium
              doloremque beatae, aliquid voluptatum commodi? Et, quas minima.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Carousel;
