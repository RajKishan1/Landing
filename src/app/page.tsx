import AnimatedText from "@/components/AnimatedText";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import { Testimony } from "@/components/Testimony";
import React from "react";

const page = () => {
  return (
    <div className=" w-full relative">
      <div className="relative ">
        {" "}
        <img
          src="/framer.avif"
          className="absolute top-0 left-0 -z-20 w-[120%] h-auto"
          alt=""
        />
        <NavBar />
        <HeroSection />
        <AnimatedText />
      </div>
      <Carousel />
      <Testimony />
      <Footer />
    </div>
  );
};

export default page;
