import Link from "next/link";
import Image from "next/image";
const Verify = () => {
  return (
    <div className="flex justify-center items-center text-center w-screen ">
      <div className="w-full md:w-9/12 lg:w-1/2 ">
        <p>Welcome to Kauye</p>
        <h1 className="text-sm font-bold">Verify Account</h1>

        <p className="px-5 pt-5 pb-10 text-xs font-normal">
          Please enter the 4-digit code just sent to +1 (562) 859-4936
        </p>

        <div>
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
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="w-full border border-black"
          />
        </div>
        <p>Resend code in 00:56</p>
      </div>
    </div>
  );
};

export default Verify;
