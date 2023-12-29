import React, { useState } from "react";
import SignupModal from "../Modal/SignupModal";
import LoginModal from "../Modal/LoginModal";

function Login() {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="col-span-6 h-64 w-64 ml-64">
        <img className="" src="./X-Logo.png" alt="logo" />
      </div>

      <div className="col-span-6 w-fit flex flex-col ml-80">
        <div className="font-extrabold w-full text-6xl">
          <span>Happening Now</span>
        </div>
        <div className="text-justify mt-12 font-extrabold text-2xl">
          <span>Join today.</span>
        </div>
        <div className="mr-auto h-3 ">
          <button
            className="mt-4 w-full p-2 px-8 flex justify-center text-center rounded-3xl border-2 border-gray-200 hover:bg-gray-300"
            onClick={() => alert("Signing in with Google")}
          >
            <img
              className="h-5 w-5 mt-1 ml-10 "
              src="./g-logo.png"
              alt="logo"
            />

            <span className="mr-10 text-base font-bold">
              Sign In with Google
            </span>
          </button>
        </div>
        <div className="mr-auto mt-8 h-3 w-full">
          <button
            className="mt-5 p-2 px-8 flex justify-center text-center rounded-3xl border-2 border-gray-200 hover:bg-gray-300"
            onClick={() => alert("Signing in with AppleID")}
          >
            <img
              className="h-4 w-4 ml-11 mr-1 mt-1"
              src="./apple.png"
              alt="logo"
            />

            <span className="mr-11 w-full text-base font-bold">
              Sign In with Apple
            </span>
          </button>
        </div>
        <div className="flex mt-14 w-72 ml-2">
          <hr className="flex-grow mt-3 border-t border-gray-100 mr-1 ml-3" />
          <span className="text-gray-600">or</span>
          <hr className="flex-grow mt-3 border-t border-gray-100 ml-1" />
        </div>
        <div className="mr-auto h-3 ">
          <button
            className="mt-1 p-2 px-24 flex justify-center bg-sky-500 text-center rounded-3xl  hover:bg-sky-600"
            onClick={openSignupModal}
          >
            <span className=" mx-1 text-white text-base font-bold">
              Create account
            </span>
          </button>
        </div>
        <div className="text-xs text-slate-500 w-80 mt-9 text-left">
          By signing up, you agree to the
          <span className="text-blue-500 hover:underline hover:cursor-pointer">
            Terms of Service
          </span>
          and
          <span className="text-blue-500 hover:underline hover:cursor-pointer">
            {" "}
            Privacy Policy
          </span>
          , including
          <span className="text-blue-500 hover:underline hover:cursor-pointer">
            {" "}
            Cookie Use
          </span>
          .
        </div>
        <div className="text-justify mt-10 font-bold text-lg">
          <span>Already have an account?</span>
        </div>
        <div className="mr-auto h-3 mt-3 ">
          <button
            className="mt-1 p-2 px-28 border-2 flex justify-center text-center rounded-3xl  border-gray-200 hover:bg-sky-100"
            onClick={openLoginModal}
          >
            <span className=" mx-4 text-base text-sky-500 font-bold">
              Sign in
            </span>
          </button>
        </div>
      </div>
      {isSignupModalOpen && <SignupModal onClose={closeSignupModal} />}
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
    </section>
  );
}

export default Login;
