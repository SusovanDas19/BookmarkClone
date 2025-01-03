import Button from "./Button";

function Contact() {
  return (
    <div className="w-full h-auto md:h-96 gap-5 bg-cusBlue mt-28 flex flex-col items-center justify-center font-rubik p-4 md:p-0">
      <p className="font-normal tracking-widest text-white text-base md:text-lg">
        35,000+ ALREADY JOINED
      </p>
      <p className="font-medium tracking-widest text-white text-xl md:text-3xl text-center">
        Stay up-to-date with what
        <br className="hidden md:block" /> we're doing
      </p>
      <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto items-center justify-center">
        <input
          type="email"
          placeholder="Enter your email address"
          className="placeholder-gray-400 h-12 w-full md:w-80 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-cusRed"
        />
        <Button
          height="h-12"
          width="w-full md:w-32"
          bgcolor="bg-cusRed"
          borderColor="border-cusRed"
          btnTextColor="text-white"
          hoverbtnTextColor="hover:text-gray-200"
          fontWeight="font-medium"
          btnText="Contact Us"
        />
      </div>
    </div>
  );
}

export default Contact;
