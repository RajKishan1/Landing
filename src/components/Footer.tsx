import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Footer = () => {
  return (
    <div className="h-screen  bg-black p-0 text-white  ">
      <div className="h-1/2 max-w-[1220px] mx-auto">
        {" "}
        <TextHoverEffect text="Codey" />
      </div>
      <hr className="max-w-[1220px] mx-auto bg-slate-700" />
      <div className="max-w-[1220px] mx-auto ">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Codey</h1>
          <div>icons</div>
        </div>
      </div>
      <hr className="max-w-[1220px] mx-auto"/>
     <p className="text-center"> Codey @2025</p>
    </div>
  );
};

export default Footer;
