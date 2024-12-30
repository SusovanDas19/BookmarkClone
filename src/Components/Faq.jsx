import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Faq() {
  const [faqNum, setFaqNum] = useState(null);
  const faqRef = useRef(null);
  function callFaq(num) {
    setFaqNum(faqNum == num ? null : num);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setFaqNum(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [faqRef]);

  let question = (
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat
      amet doloribus
      <br /> consequuntur eos similique provident tempora voluptates iure quia
      fuga dicta
      <br /> voluptatibus culpa mollitia recusandae delectus id suscipit labore?
    </span>
  );

  return (
    <div id="faq" className="flex flex-col items-center justify-center mt-28 font-rubik">
      <div className="flex flex-col items-center justify-center gap-8 mb-10">
        <h1 className="text-4xl text-black font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-center">
          Here are some of our FAQs. If you have any other questions
          <br /> you'd like answered please feel free to email us.
        </p>
      </div>
      <div className="flex flex-col w-[650px] gap-5" ref={faqRef}>
        <div
          onClick={() => callFaq(1)}
          className="cursor-pointer flex flex-col items-start justify-start"
        >
          <div className="flex items-start justify-between w-full text-gray-500 hover:text-cusRed">
            <p>What is Bookmark?</p>
            {faqNum == 1 ? (
              <IoIosArrowUp className="text-3xl font-semibold text-cusRed" />
            ) : (
              <IoIosArrowDown className="text-3xl font-semibold" />
            )}
          </div>
          {faqNum == 1 && <div className="text-gray-400 mt-4">{question}</div>}
          <div className="w-full h-px bg-gray-300 mt-3"></div>
        </div>
        <div
          onClick={() => callFaq(2)}
          className="cursor-pointer flex flex-col items-start justify-start"
        >
          <div className="flex items-start justify-between w-full text-gray-500 hover:text-cusRed">
            <p>How can I request a new browser?</p>
            {faqNum == 2 ? (
              <IoIosArrowUp className="text-3xl font-semibold text-cusRed" />
            ) : (
              <IoIosArrowDown className="text-3xl font-semibold" />
            )}
          </div>
          {faqNum == 2 && <div className="text-gray-400 mt-4">{question}</div>}
          <div className="w-full h-px bg-gray-300 mt-3"></div>
        </div>
        <div
          onClick={() => callFaq(3)}
          className="cursor-pointer flex flex-col items-start justify-start"
        >
          <div className="flex items-start justify-between w-full text-gray-500 hover:text-cusRed">
            <p>Is ther a mobile app?</p>
            {faqNum == 3 ? (
              <IoIosArrowUp className="text-3xl font-semibold text-cusRed" />
            ) : (
              <IoIosArrowDown className="text-3xl font-semibold" />
            )}
          </div>
          {faqNum == 3 && <div className="text-gray-400 mt-4">{question}</div>}
          <div className="w-full h-px bg-gray-300 mt-3"></div>
        </div>
        <div
          onClick={() => callFaq(4)}
          className="cursor-pointer flex flex-col items-start justify-start"
        >
          <div className="flex items-start justify-between w-full text-gray-500 hover:text-cusRed">
            <p>What about other Chromium browsers</p>
            {faqNum == 4 ? (
              <IoIosArrowUp className="text-3xl font-semibold text-cusRed" />
            ) : (
              <IoIosArrowDown className="text-3xl font-semibold" />
            )}
          </div>
          {faqNum == 4 && <div className="text-gray-400 mt-4">{question}</div>}
          <div className="w-full h-px bg-gray-300 mt-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
