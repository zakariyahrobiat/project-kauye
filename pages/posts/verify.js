import Link from "next/link";
import Image from "next/image";
const Verify = () => {
  return (
    <div className="flex justify-center items-center text-center w-screen h-screen relative bg-background ">
      <div className="w-full md:w-9/12 lg:w-1/2 px-3 py-5 h-full background ">
        <div className="text-left">
          <p className="text-base font-normal pb-4 text-black">
            Welcome to <span className="text-button">Kauye</span>
          </p>
          <h1 className="text-4xl font-bold pb-5 text-black">
            VERIFY <br /> ACCOUNT
          </h1>
        </div>
        <p className="px-5 pt-5 pb-10 text-base font-medium text-light">
          Please enter the 4-digit code just sent to <br />
          <span className="font-semibold text-bold"> +1 (562) 859-4936</span>
        </p>

        <div className="flex justify-center items-center px-16 gap-3 text-center">
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="input w-full  py-3 text-center text-bold rounded-lg bg-white placeholder:text-black placeholder:font-semibold placeholder:text-xl "
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="input w-full  py-3 text-center text-bold rounded-lg placeholder:text-black placeholder:font-semibold placeholder:text-xl"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="input w-full  py-3 text-center text-bold rounded-lg placeholder:text-black placeholder:font-semibold placeholder:text-xl"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="input w-full  py-3 text-center text-bold rounded-lg placeholder:text-black placeholder:font-semibold placeholder:text-xl"
          />
        </div>
        <p className="absolute bottom-10 font-semibold text-base text-code">
          Resend code in 00:56
        </p>
      </div>
    </div>
  );
};

export default Verify;
