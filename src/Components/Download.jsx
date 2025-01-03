import React from "react";
import logoChrome from '../assets/logoChrome.svg'
import logoFirefox from '../assets/logoFirefox.svg'
import logoOpera from '../assets/logoOpera.svg'
import Button from "./Button";

function Download() {
  return (
    <div id="download" className="flex flex-col items-center mt-40 md:mt-80">
      <div className="text-center mb-10">
        <h1 className="font-rubik text-black text-2xl md:text-4xl font-semibold mb-7">Download the extension</h1>
        <p className="text-gray-400 text-sm md:text-base font-rubik">
          We've got more browsers in the pipeline. Please do let us know if
          <br className="hidden md:block" />
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="mt-14 flex flex-col md:flex-row gap-7">
        <Card
         heading="Add to Chrome"
         details="Minimum Version 62"
         logo={logoChrome}
         mt="mt-0"
        />
        <Card
         heading="Add to Firefox"
         details="Minimum Version 55"
         logo={logoFirefox}
         mt="mt-5 md:mt-0"
        />
        <Card
         heading="Add to Opera"
         details="Minimum Version 46"
         logo={logoOpera}
         mt="mt-10 md:mt-0"
        />
      </div>
    </div>
  );
}

function Card({heading, details, logo, mt}){
    return(
        <div className={`${mt} h-auto md:h-96 w-82 md:w-84 gap-5 rounded-lg shadow-md flex flex-col items-center justify-center p-6 md:p-10`}>
            <img src={logo} alt="" className="w-16 md:w-auto" />
            <p className="text-black font-semibold font-rubik text-lg">{heading}</p>
            <p className="w-full text-center font-rubik text-gray-400 text-sm md:text-base">{details}</p>
            <div className="border-2 border-dotted w-full"></div>
            <Button
            height=" h-10 md:h-14"
            width="w-64"
            bgcolor="bg-cusBlue"
            hoverBgColor="hover:bg-white"
            borderColor="border-cusBlue"
            btnTextColor="text-white"
            hoverbtnTextColor="hover:text-cusBlue"
            btnText="Add & Install Extension"
          />
        </div>
    )
}

export default Download;
