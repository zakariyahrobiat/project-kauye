import Link from "next/link";
import Image from "next/image";

import { useAppContext } from "./_app";
export default function Home() {
  const { data, handleForm, handleSubmit, successContainer, errorContainer } =
    useAppContext();

  return (
    <div className="flex justify-center items-center text-center w-screen ">
      <div className="w-full md:w-9/12 lg:w-1/2 pt-10 ">
        <div className="flex justify-center items-center">
          <Image
            src="/images/logo.png"
            alt=""
            srcSet=""
            height={49}
            width={34.11}
            className=""
          />
        </div>
        <h1 className="text-base font-semibold px-4 text-metal">
          Create Account
        </h1>
        <p className="font-bold text-xs pb-5 text-grey">
          Create a free Kauye account to get started,{" "}
        </p>
        <form action="" onSubmit={handleSubmit}>
          <div className="form">
            <div className="px-5 md:px-0">
              <div className="form-control relative mb-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john-doe@gmail.com"
                  className="w-full border border-border p-2 rounded-2xl placeholder:text-placeHolder placeholder:font-normal placeholder:text-xs"
                  value={data.email}
                  onChange={handleForm}
                />
                <Image
                  src="/images/success.png"
                  alt=""
                  srcSet=""
                  height={30}
                  width={30}
                  className="success absolute right-3 top-1 hidden  "
                  ref={successContainer}
                />
                <Image
                  src="/images/error.png"
                  alt=""
                  srcSet=""
                  height={30}
                  width={30}
                  className="err absolute right-3 top-1 hidden"
                  ref={errorContainer}
                />
              </div>
              <div className="form-control relative mb-3">
                <input
                  type="tel"
                  name="number"
                  id="number"
                  value={data.number}
                  onChange={handleForm}
                  className="w-full border border-border p-2 rounded-2xl placeholder:text-placeHolder placeholder:font-normal placeholder:text-xs"
                />
                <Image
                  src="/images/success.png"
                  alt=""
                  srcSet=""
                  height={30}
                  width={30}
                  className="success absolute right-3 top-1 hidden  "
                  ref={successContainer}
                />
                <Image
                  src="/images/error.png"
                  alt=""
                  srcSet=""
                  height={30}
                  width={30}
                  className="err absolute right-3 top-1 hidden  "
                  ref={errorContainer}
                />
              </div>
              <div className="form-control relative mb-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="xxxxxxxxxxxxxx"
                  value={data.password}
                  onChange={handleForm}
                  className="w-full border border-border p-2 rounded-2xl placeholder:text-placeHolder placeholder:font-normal placeholder:text-xs"
                />
                <Image
                  src="/images/success.png"
                  alt=""
                  srcSet=""
                  height={30}
                  width={30}
                  className="success absolute right-3 top-1 hidden  "
                  ref={successContainer}
                />
                <Image
                  src="/images/error.png"
                  alt=""
                  srcSet=""
                  height={30}
                  width={30}
                  className="err absolute right-3 top-1 hidden  "
                  ref={errorContainer}
                />
              </div>
            </div>
          </div>
          <div className="bg-[url('/images/background.png')] bg-cover bg-no-repeat w-full h-full px-5">
            <div className="text-left">
              <input type="checkbox" name="option" id="option" />
              <label htmlFor="option" className="text-xs font-bold text-black">
                I accept Kauye terms & conditions
              </label>
            </div>
            <p className="text-xs font-light pt-5 pb-56 text-metal">
              Already have an account{" "}
              <Link href="" className="font-normal text-blue">
                Sign In
              </Link>{" "}
            </p>

            <button className="border text-white w-full p-2 rounded-3xl mb-10 bg-button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
