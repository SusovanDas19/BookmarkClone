import logoBookmark from "../assets/logoBookmark.svg";
import Button from "./Button";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pl-16 w-full h-10 mt-14 flex justify-between pr-16">
      <div>
        <img src={logoBookmark} alt="" />
      </div>
      <div className="flex gap-10  items-center justify-center">
        <p
          onClick={() => scrollToSection("features")}
          className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest cursor-pointer"
        >
          FEATURES
        </p>
        <p
          onClick={() => scrollToSection("download")}
          className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest cursor-pointer"
        >
          DOWNLOAD
        </p>
        <p
          onClick={() => scrollToSection("faq")}
          className="text-gray-400 hover:text-cusRed text-base font-rubik tracking-widest cursor-pointer"
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
    </div>
  );
}

export default Navbar;
