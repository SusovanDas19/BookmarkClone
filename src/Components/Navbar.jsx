import { Link } from "react-router-dom";
import logoBookmark from "../assets/logoBookmark.svg";
import Button from "./Button";

function Navbar() {
  return (
    <div className="pl-16 w-full h-10 mt-14 flex justify-between pr-16">
      <div>
        <img src={logoBookmark} alt="" />
      </div>
      <div className="flex gap-10  items-center justify-center">
        <Link to="/features">
          <p className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest">FEATURES</p>
        </Link>
        <Link to="/features">
          <p className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest">DOWNLOAD</p>
        </Link>
        <Link to="/features">
          <p className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest">FAQ</p>
        </Link>
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
    </div>
  );
}

export default Navbar;
