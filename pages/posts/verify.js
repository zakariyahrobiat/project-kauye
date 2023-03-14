import Link from "next/link";
import Image from "next/image";
const Verify = () => {
  return (
    <div className="flex justify-center items-center text-center w-screen h-screen relative ">
      <div className="w-full md:w-9/12 lg:w-1/2 px-2 py-4 h-full bg-background ">
        <div className="text-left">
          <p className="text-base font-normal pb-3">Welcome to Kauye</p>
          <h1 className="text-4xl font-bold pb-5">Verify Account</h1>
        </div>
        <p className="px-5 pt-5 pb-10 text-base font-semibold">
          Please enter the 4-digit code just sent to +1 (562) 859-4936
        </p>

        <div className="flex justify-center items-center px-16 gap-3 text-center">
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="w-full border border-black py-3 text-center rounded-lg"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="w-full border border-black"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="w-full border border-black"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="w-full border border-black"
          />
        </div>
        <p className="absolute bottom-10 font-semibold text-base">
          Resend code in 00:56
        </p>
      </div>
    </div>
  );
};

export default Verify;
