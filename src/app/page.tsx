import AnimatedText from "@/components/AnimatedText";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import React from "react";

const page = () => {
  return (
    <div className=" w-full relative">
      <div className="relative bg-black">
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
      <Footer />
    </div>
  );
};

export default page;
