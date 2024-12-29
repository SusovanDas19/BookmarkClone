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
    <div className="mt-20">
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl font-semibold font-rubik">Features</h1>
        <p className="text-base text-gray-400 text-center">
          Our aim is to make it quick and easy for you to access your <br />
          favourite websites. Your bookmarks sync between your
          <br /> devices so you can access them on the go.
        </p>
      </div>
      <div className="flex flex-col  items-center justify-center mt-14">
        <div className="flex gap-10">
          <p
            onClick={() => callFetOpt(1)}
            className="text-gray-500 cursor-pointer text-base hover:text-cusRed font-rubik"
          >
            Simple Bookmarking
            {selectedFeature === 1 && <div className="w-full h-1 bg-cusRed mt-5"></div> }
          </p>
          <p
            onClick={() => callFetOpt(2)}
            className="text-gray-500 cursor-pointer text-base hover:text-cusRed font-rubik"
          >
            Speedy Searching
            {selectedFeature === 2 && <div className="w-full h-1 bg-cusRed mt-5"></div> }
          </p>
          <p
            onClick={() => callFetOpt(3)}
            className="text-gray-500  cursor-pointer text-base hover:text-cusRed font-rubik"
          >
            Easy Sharing
            {selectedFeature === 3 && <div className="w-full h-1 bg-cusRed mt-5"></div> }
          </p>
        </div>
        <div className="flex w-1/3 h-px bg-gray-300"></div>
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
    <div className="flex flex-row mt-14">
      <div className="relative w-1/2">
        <div className=" bg-cusBlue absolute h-72 w-[600px] rounded-r-full left-0 top-52 "></div>
        <img src={img} alt="Screen 1" className={`absolute ${left}`} />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="font-semibold text-3xl font-rubik">{heading}</h1>
        <p className="text-gray-400">{detailLines}</p>
        <Button
          height="h-10"
          width="w-28"
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
