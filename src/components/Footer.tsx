import React from "react";
import { TextHoverEffect } from "../../text-hover-effect";

const Footer = () => {
  return (
    <div className="h-screen bg-black p-20 text-black ">
      <div className="h-1/2 ">
        {" "}
        <TextHoverEffect text="Codey" />
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
