const Verify = () => {
  return (
    <div className="flex justify-center items-center text-center w-screen h-screen relative bg-background ">
      <div className="w-full  px-3 py-5 md:px-5 md:py-10 h-full background ">
        <div className="text-left">
          <p className="text-base font-normal pb-4 text-black md:text-xl">
            Welcome to <span className="text-button">Kauye</span>
          </p>
          <h1 className="text-4xl font-bold pb-5 text-black md:pb-10 ">
            VERIFY <br className="hidden" /> ACCOUNT
          </h1>
        </div>
        <p className="px-5 pt-5 pb-10 text-base font-medium text-light md:text-xl md:pb-16 md:pt-10">
          Please enter the 4-digit code just sent to{" "}
          <br className="md:hidden" />
          <span className="font-semibold text-bold"> +1 (562) 859-4936</span>
        </p>

        <div className="flex justify-center items-center px-16 gap-3 text-center md:px-28">
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="input w-full  py-3 md:py-10 text-center text-bold rounded-lg bg-white placeholder:text-black placeholder:font-semibold font-semibold text-xl placeholder:text-xl md:placeholder:text-3xl md:text-3xl "
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="input w-full  py-3 md:py-10 text-center text-bold rounded-lg placeholder:text-black placeholder:font-semibold font-semibold placeholder:text-xl text-xl md:placeholder:text-3xl md:text-3xl"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="input w-full  py-3 md:py-10 text-center text-bold rounded-lg placeholder:text-black placeholder:font-semibold font-semibold placeholder:text-xl text-xl md:placeholder:text-3xl md:text-3xl"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="5"
            className="input w-full  py-3 md:py-10 text-center text-bold rounded-lg placeholder:text-black placeholder:font-semibold font-semibold placeholder:text-xl text-xl md:placeholder:text-3xl md:text-3xl"
          />
        </div>
        <p className="absolute bottom-10 md:bottom-20 font-semibold text-base text-code md:text-xl">
          Resend code in 00:56
        </p>
      </div>
    </div>
  );
};

export default Verify;
