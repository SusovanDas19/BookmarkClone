import Button from "./Button";

function Contact() {
  return (
    <div className="w-full h-96 gap-5 bg-cusBlue mt-28 flex flex-col items-center justify-center font-rubik">
      <p className="font-normal tracking-widest text-white text-lg">
        35,000+ ALREADY JOINED
      </p>
      <p className="font-medium tracking-widest text-white text-3xl text-center">
        Stay up-to-date with what
        <br /> we're doing
      </p>
      <div className="flex flex-row gap-5 w-">
        <input
          type="email"
          placeholder="Enter your email address"
          className="placeholder-gray-400 h-11 w-80 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-cusRed"
        />
        <Button
          height="h-12"
          width="w-32"
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
