import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Footer = () => {
  return (
    <div className="h-screen  bg-black p-0   ">
      <div className="h-1/2 max-w-[1220px] mx-auto">
        {" "}
        <TextHoverEffect text="Codey" />
      </div>
      {/* <hr className="max-w-[1220px] mx-auto bg-slate-800 my-4" /> */}
      <div className="h-2/5 max-w-[1220px] mx-auto text-white flex items-center justify-between border-b border-t border-neutral-700">
        <div className="flex flex-col p-8">
          <h1 className="text-2xl font-bold">Codey</h1>
          <div>icons</div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p>about</p>
          <p>help</p>
        </div>
      </div>

      <p className="text-center text-white mt-2"> Codey @2025</p>
    </div>
  );
};

export default Footer;
