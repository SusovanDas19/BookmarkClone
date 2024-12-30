import { Link } from "react-router-dom";
import logoBookmarkWhite from "../assets/logoBookmarkWhite.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



function Footer() {
  return (
    <div className="bg-[#252b46] w-full h-44 flex flex-row justify-between">
      <div className="flex gap-10  items-center justify-center ml-16">
        <img src={logoBookmarkWhite} alt="" />
        <Link to="/features">
          <p className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest">
            FEATURES
          </p>
        </Link>
        <Link to="/features">
          <p className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest">
            DOWNLOAD
          </p>
        </Link>
        <Link to="/features">
          <p className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest">
            FAQ
          </p>
        </Link>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center mr-16">
        <FaFacebookSquare className="text-3xl font-semibold text-white hover:text-cusRed cursor-pointer"/>
        <FaSquareXTwitter className="text-3xl font-semibold text-white hover:text-cusRed cursor-pointer"/>
      </div>
    </div>
  );
}

export default Footer;
