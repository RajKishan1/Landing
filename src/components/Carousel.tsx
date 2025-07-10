"use client";
import React, { useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import { Audiowide } from "next/font/google";
import { Zen_Dots } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ weight: ["400", "500", "600"] });
const zen = Zen_Dots({ weight: ["400"] });
const audio = Audiowide({ weight: ["400"] });
interface prop {
  top: string;
  left: string;
  zIndex: string;
  img: string;
  className: string;
}
export const Detail = ({ top, left, zIndex, img, className }: prop) => {
  return (
    <div
      className={`absolute ${top} ${left} ${zIndex} w-4/5 h-4/5 bg-white/5 backdrop-blur-2xl rounded-2xl px-4 py-8 border-2 border-neutral-800 text-center`}
    >
      {" "}
      <h1 className={`text-4xl font-bold text-white ${zen.className}`}>
        Lorem ipsum dolor sit car happy 💡.
      </h1>
      <p className="w-4/5 text-neutral-400 text-lg font-medium mt-3 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        soluta quod praesentium doloremque beatae, aliquid voluptatum commodi?
        Et, quas minima.soluta quod praesentium doloremque beatae, aliquid
        voluptatum commodi? Et, quas minima.
      </p>
      <p className={`${audio.className} text-9xl font-black text-neutral-400`}>
        01
      </p>
      <img src={`${img}`} className=" w-[200px] h-auto" alt="#" />
    </div>
  );
};
const Carousel = () => {
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { y: 900, opacity: 0 },
      {
        y: 0,
        xPercent: -100,
        opacity: 1,
        duration: 1,
        direction: "horizontal",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%", // when box top hits 80% of viewport
          end: "bottom 20%", // (optional) when to end
          toggleActions: "play none none reverse",
         
        },
      }
    );
  }, []);
  return (
    <div className="mt-28  text-white ">
      <h1
        className={`${inter.className} w-3/4 mx-auto text-[55px] leading-[100%] font-bold mb-20`}
      >
        Not everything powerful <br /> has to look complicated
      </h1>
      <div className=" h-screen w-full bg-black flex gap-4 justify-between">
        <div className=" h-full w-[30%] flex flex-col  justify-around items-center ">
          <h1 className="text-8xl font-bold text-white">Code</h1>{" "}
        </div>
        <div className="relative h-full w-[70%] bg-gradient-to-br from-black to-slate-900 flex items-center justify-center p-16 ">
          {" "}
          <Detail
            top="top-10"
            left="left-10"
            zIndex="z-30"
            img="/gpt2.png"
            className=""
          />
          <Detail
            top="top-15"
            left="left-20"
            zIndex="z-20"
            img="/gpt2.png"
            className=""
          />
          <Detail
            top="top-20"
            left="left-30"
            zIndex="z-10"
            img=""
            className=""
          />
        </div>
      </div>
      <div className="relative"></div>
    </div>
  );
};

export default Carousel;
