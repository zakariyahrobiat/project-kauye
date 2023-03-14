import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "./_app";
export default function FirstPost() {
  const { data, handleForm, handleSignIn } = useAppContext();
  return (
    <div className="flex justify-center items-center text-center w-screen relative h-screen">
      <div className="w-full md:w-9/12 lg:w-1/2 pt-3 md:pt-10 h-full">
        <div className="flex justify-between items-center text-left px-3">
          <div>
            <p className="text-base font-normal text-black md:text-xl md:pb-5 font-urbanist">
              Welcome to <span className="text-button"> Kauye</span>
            </p>
            <h1 className="font-semibold text-4xl text-black font-urbanist">
              SIGN UP
            </h1>
          </div>
          <div>
            <p className="text-ash font-normal text-xs md:text-xl font-urbanist">
              Have an <br /> account ? <br />
              <Link href="" className="text-blue">
                {" "}
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <p className="text-base font-urbanist font-semibold pt-10 pb-5 text-black md:text-xl md:pb-10">
          Enter your username or email address
        </p>
        <form action="" onSubmit={handleSignIn} className="">
          <div className="p-3 md:p-0">
            <div className="mb-4 relative md:mb-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                value={data.email}
                onChange={handleForm}
                className="w-full border border-silver p-4 rounded-lg bg-input placeholder:text-placeHolder placeholder:semibold placeholder:text-base"
              />
              <Image
                src="/images/Icon.png"
                alt=""
                srcSet=""
                width={30}
                height={30}
                className="absolute right-3 top-3"
              />
            </div>
            <div className="flex justify-between items-center gap-5 mb-4 relative  md:mb-8">
              <select
                name="code"
                id="code"
                className="w-1/4 border border-silver p-4 rounded-lg bg-input "
              >
                <option value="code">+234</option>
                <option value="code">+1</option>
              </select>
              <div className="w-3/4">
                <input
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="803 383 3822"
                  value={data.number}
                  onChange={handleForm}
                  className="w-full border border-silver py-4 px-2 rounded-lg bg-input placeholder:text-placeHolder placeholder:semibold placeholder:text-base"
                />
                <Image
                  src="/images/Icon.png"
                  alt=""
                  srcSet=""
                  width={30}
                  height={30}
                  className="absolute right-3 top-3"
                />
              </div>
            </div>
            <div className="relative mb-5  md:mb-8">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={data.password}
                onChange={handleForm}
                className="w-full border border-silver p-4 rounded-lg bg-input placeholder:text-placeHolder placeholder:semibold placeholder:text-base"
              />
              <Image
                src="/images/Icon.png"
                alt=""
                srcSet=""
                width={30}
                height={30}
                className="absolute right-3 top-3"
              />
            </div>
            <div className="text-left">
              <input type="checkbox" name="terms" id="term" />
              <label
                htmlFor="terms"
                className="font-semibold text-ms text-terms font-inter md:text-xl "
              >
                By signing up, you agree to the{" "}
                <Link href="" className="text-button">
                  {" "}
                  Terms of Service and Privacy Policy
                </Link>
              </label>
            </div>
          </div>
          <div className="absolute bottom-0 w-full left-0 flex justify-between items-center bg-button h-28 p-3 rounded-b-3xl">
            <button className="text-base font-bold text-white font-urbanist">
              Sign up
            </button>
            <img
              src="/images/Line.png"
              width={119}
              height={52}
              alt=""
              srcSet=""
            />
          </div>
        </form>
      </div>
    </div>
  );
}
