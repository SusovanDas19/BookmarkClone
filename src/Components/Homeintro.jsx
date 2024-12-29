import React from "react";
import Button from "./Button";
import screen1 from "../assets/screen1.svg";

function Homeintro() {
  return (
    <div className="flex flex-row w-full pl-16">
      <div className="flex flex-col font-rubik w-1/2 mt-32 gap-10">
        <h1 className="text-black text-6xl font-medium">
          A Simple Bookmark Manager
        </h1>
        <p className="text-gray-400 text-2xl font-normal">
          A clean and simple interface to organize
          <br /> your favourite websites. Open a new
          <br /> browser tab and see your sites load
          <br /> instantly. Try it for free.
        </p>
        <div className="flex gap-5">
          <Button
            height="h-14"
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
            height="h-14"
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
      <div className="relative w-1/2 mt-20">
        <div className=" bg-cusBlue absolute h-72 w-[600px] rounded-l-full right-0 top-52 "></div>
        <img src={screen1} alt="Screen 1" className="absolute right-40" />
      </div>
    </div>
  );
}

export default Homeintro;
