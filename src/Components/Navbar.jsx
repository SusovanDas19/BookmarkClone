import React, { useState } from "react";
import logoBookmark from "../assets/logoBookmark.svg";
import { MdMenu } from "react-icons/md";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="w-full">
      <div className="pl-4 md:pl-16 w-full h-10 mt-14 flex justify-between pr-4 md:pr-16">
        <img src={logoBookmark} alt="" className="w-40 h-7 md:w-auto" />
        <MdMenu className="text-3xl md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        <div className="hidden md:flex gap-4 md:gap-10 items-center justify-center">
          <p
            onClick={() => scrollToSection("features")}
            className="text-gray-400 hover:text-cusRed text-sm md:text-base font-rubik tracking-widest cursor-pointer"
          >
            FEATURES
          </p>
          <p
            onClick={() => scrollToSection("download")}
            className="text-gray-400 hover:text-cusRed text-sm md:text-base font-rubik tracking-widest cursor-pointer"
          >
            DOWNLOAD
          </p>
          <p
            onClick={() => scrollToSection("faq")}
            className="text-gray-400 hover:text-cusRed text-sm md:text-base font-rubik tracking-widest cursor-pointer"
          >
            FAQ
          </p>
          <Button
            height="h-8 md:h-10"
            width="w-24 md:w-28"
            bgcolor="bg-cusRed"
            hoverBgColor="hover:bg-white"
            borderColor="border-cusRed"
            btnTextColor="text-white"
            hoverbtnTextColor="hover:text-cusRed"
            btnText="LOGIN"
          />
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col items-center bg-white shadow-md p-4 md:hidden">
          <p
            onClick={() => scrollToSection("features")}
            className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest cursor-pointer mb-2"
          >
            FEATURES
          </p>
          <p
            onClick={() => scrollToSection("download")}
            className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest cursor-pointer mb-2"
          >
            DOWNLOAD
          </p>
          <p
            onClick={() => scrollToSection("faq")}
            className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest cursor-pointer mb-2"
          >
            FAQ
          </p>
          <Button
            height="h-10"
            width="w-28"
            bgcolor="bg-cusRed"
            hoverBgColor="hover:bg-white"
            borderColor="border-cusRed"
            btnTextColor="text-white"
            hoverbtnTextColor="hover:text-cusRed"
            btnText="LOGIN"
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
