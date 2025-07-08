import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ weight: ["400", "500", "600"] });
interface prop {
  Text: string;
}
export const Links = ({ Text }: prop) => {
  return (
    <a
      href=""
      className="text-neutral-400 font-medium text-[16px] hover:text-white"
    >
      {Text}
    </a>
  );
};

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full h-16 backdrop-blur-lg bg-transparent z-10 pt-4">
      <div
        className={`max-w-[1220px] text-sm mx-auto my-auto flex items-center justify-between ${inter.className}`}
      >
        <div className="font-bold text-lg text-white ">Codey</div>
        <div className="flex gap-5">
          <Links Text="About" />
          <Links Text="Help" />
          <Links Text="Pricing" />
        </div>
        <div className="flex items-center gap-3 text-sm font-medium">
          Login{" "}
          <a
            href="#"
            className="bg-white text-black px-3 py-1.5 text-sm rounded-full"
          >
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
