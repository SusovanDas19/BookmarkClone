import ftab1 from "../assets/ftab1.svg";
import ftab2 from "../assets/ftab2.svg";
import ftab3 from "../assets/ftab3.svg";
import Button from "./Button";
import React, { useState } from "react";

function Features() {
  const [selectedFeature, setSelectedFeature] = useState(1);

  function callFetOpt(opt) {
    setSelectedFeature(opt);
  }

  let content;
  if (selectedFeature === 1) {
    content = (
      <FeaturesOpt
        heading="Bookmark in one click"
        details="Organize your bookmarks however you like. Our simple drag-# and-drop interface gives you complete control over how you# manage your favourite sites."
        img={ftab1}
        left="left-28"
      />
    );
  } else if (selectedFeature === 2) {
    content = (
      <FeaturesOpt
        heading="Intelligent search"
        details="Our powerful search feature will help you find saved sites in# no time at all. No need to trawl through all of your# bookmarks."
        img={ftab2}
        left="left-40"
      />
    );
  } else {
    content = (
      <FeaturesOpt
        heading="Share your bookmarks"
        details="Easily share your bookmarks and collections with others.# Create a shareable link that you can send at the click of a# button."
        img={ftab3}
        left="left-40"
      />
    );
  }

  return (
    <div id="features" className="mt-24 md:mt-48">
      <div className="flex flex-col gap-4 md:gap-8 items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-semibold font-rubik">
          Features
        </h1>
        <p className="text-sm md:text-base text-gray-400 text-center">
          Our aim is to make it quick and easy for you to access your{" "}
          <br className="hidden md:block" />
          favourite websites. Your bookmarks sync between your
          <br className="hidden md:block" /> devices so you can access them on
          the go.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-8 md:mt-14">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:items-start items-center w-full md:w-auto">
          <p
            onClick={() => callFetOpt(1)}
            className="text-gray-500 cursor-pointer text-sm md:text-base hover:text-cusRed font-rubik"
          >
            Simple Bookmarking
            {selectedFeature === 1 && (
              <div className="w-full h-1 bg-cusRed mt-2 md:mt-5"></div>
            )}
          </p>
          <p
            onClick={() => callFetOpt(2)}
            className="text-gray-500 cursor-pointer text-sm md:text-base hover:text-cusRed font-rubik"
          >
            Speedy Searching
            {selectedFeature === 2 && (
              <div className="w-full h-1 bg-cusRed mt-2 md:mt-5"></div>
            )}
          </p>
          
          <p
            onClick={() => callFetOpt(3)}
            className="text-gray-500 cursor-pointer text-sm md:text-base hover:text-cusRed font-rubik"
          >
            Easy Sharing
            {selectedFeature === 3 && (
              <div className="w-full h-1 bg-cusRed mt-2 md:mt-5"></div>
            )}
        </p>
        </div>
        <div className="md:flex w-4/5 md:mt-0 mt-3 md:w-1/3 h-px bg-gray-300"></div>
      </div>

      {content}
    </div>
  );
}

function FeaturesOpt({ heading, details, img, left }) {
  const detailLines = details.split("# ").map((line, index) => (
    <span key={index}>
      {line}
      {index < details.split("# ").length - 1 && <br />}
    </span>
  ));

  return (
    <div className="flex w-full flex-col md:flex-row mt-8 md:mt-14 items-center md:items-start">
      <div className="md:relative w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:block">
        <div className="bg-cusBlue absolute h-72 w-full md:w-[600px] rounded-r-full left-0 top-52 hidden md:block"></div>
        <img
          src={img}
          alt="Screen 1"
          className={`md:absolute ${left} w-4/5 md:w-auto`}
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-8 items-center md:items-start w-full md:w-1/2">
        <h1 className="font-semibold text-xl md:text-3xl font-rubik text-center md:text-left">
          {heading}
        </h1>
        <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
          {detailLines}
        </p>
        <Button
          height="h-10"
          width="w-32 md:w-28"
          bgcolor="bg-cusBlue"
          hoverBgColor="hover:bg-white"
          borderColor="border-cusBlue"
          btnTextColor="text-white"
          hoverbtnTextColor="hover:text-cusBlue"
          fontWeight="font-medium"
          btnText="More Info"
        />
      </div>
    </div>
  );
}

export default Features;
