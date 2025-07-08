import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full relative">
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default page;
