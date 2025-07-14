import { cn } from "@/lib/utils";
import React from "react";
import TestimonyCard from "./TestimonyCard";

export function Testimony() {
  return (
    <div className="relative flex h-screen  w-full items-center justify-center bg-[#171717]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#222222_1px,transparent_1px),linear-gradient(to_bottom,#222222_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className=" absolute inset-0 flex flex-col items-center justify-center my-6 gap-10 bg-black[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black">
        <p className="relative z-20 bg-clip-text py-8 text-4xl font-bold text-white sm:text-7xl">
          Testimonials
        </p>
        <div className="max-w-[1420px] mt-10 px-16 xl:px-12 grid grid-cols-3 justify-center gap-6 items-center ">
          <TestimonyCard />
          <TestimonyCard />
          <TestimonyCard />

          <TestimonyCard />
          <TestimonyCard />
          <TestimonyCard />
        </div>
      </div>
    </div>
  );
}
