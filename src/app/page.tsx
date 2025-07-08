import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full relative">
      <div className="relative">
        {" "}
        <img
          src="/framer.avif"
          className="absolute top-0 left-0 -z-20 w-[120%] h-auto"
          alt=""
        />
        <NavBar />
        <HeroSection />
      </div>
    </div>
  );
};

export default page;
