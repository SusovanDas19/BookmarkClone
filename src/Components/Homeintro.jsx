import React from "react";
import Button from "./Button";
import screen1 from "../assets/screen1.svg";

function Homeintro() {
  return (
    <div className="flex flex-col md:flex-row w-full pl-4 md:pl-16 justify-center items-center mb-24 md:mb-48">
      <div className="relative w-full md:w-1/2 mt-10 md:mt-20 flex-shrink justify-center items-center order-1 md:order-2">
        <div className="bg-cusBlue absolute h-72 w-full md:w-[600px] rounded-l-full right-0 top-0  md:top-16 hidden md:block"></div>
        <img src={screen1} alt="Screen 1" className=" md:absolute w-full md:-top-32 md:w-4/5 sm:w-2/3 flex-shrink" />
      </div>
      <div className="flex flex-col font-rubik w-full md:w-1/2 mt-16 md:mt-32 gap-5 md:gap-10 justify-center items-center md:items-start order-2 md:order-1">
        <h1 className="text-black text-4xl md:text-6xl font-medium flex-shrink text-center md:text-left">
          A Simple Bookmark <br /> Manager
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl font-normal flex-shrink text-center md:text-left">
          A clean and simple interface to organize
          <br className="hidden md:block" /> your favourite websites. Open a new
          <br className="hidden md:block" /> browser tab and see your sites load
          <br className="hidden md:block" /> instantly. Try it for free.
        </p>
        <div className="flex flex-col md:flex-row gap-5 w-full md:items-start items-center">
          <Button
            height="h-12 md:h-14"
            width="w-40"
            bgcolor="bg-cusBlue"
            hoverBgColor="hover:bg-white"
            borderColor="border-cusBlue"
            btnTextColor="text-white"
            hoverbtnTextColor="hover:text-cusBlue"
            fontWeight="font-medium"
            btnText="Get It On Chrome"
          />
          <Button
            height="h-12 md:h-14"
            width="w-40"
            bgcolor="bg-gray-300"
            hoverBgColor="hover:bg-white"
            borderColor="border-gray-300"
            btnTextColor="text-black"
            hoverbtnTextColor="hover:text-gray-600"
            fontWeight="font-medium"
            btnText="Get It On Firefox"
          />
        </div>
      </div>
    </div>
  );
}

export default Homeintro;
