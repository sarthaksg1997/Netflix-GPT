import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  return (
    <div>
      <Header />
      <div className="absolute z-10 text-[#fff] h-auto w-1/3 top-[15%] left-1/3 bg-[rgba(0,0,0,0.75)] py-14">
        <h1 className=" ml-[3.3rem] text-[32px] font-medium mb-3 ">
          {showSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        <form action="" className="flex flex-col ">
          {showSignUpForm && (
            <input
              type="text"
              placeholder="Full name"
              className="bg-[#333] rounded w-3/4 mx-auto my-4 leading-[50px] h-[50px] p-[16px]"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="bg-[#333] rounded w-3/4 mx-auto my-4 leading-[50px] h-[50px] p-[16px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#333] rounded w-3/4 mx-auto my-4 leading-[50px] h-[50px] p-[16px]"
          />
          <button className="bg-[#e50914] text-[#fff] font-medium rounded w-3/4 mx-auto my-4 leading-[50px] h-[50px]">
            {showSignUpForm ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-center">
          {showSignUpForm ? "Already registered?" : "New to Netflix?"}
          <button
            onClick={() => setShowSignUpForm(!showSignUpForm)}
            className="text-[#e50914] ml-1"
          >
            {showSignUpForm ? "Sign In Now" : "Sign Up Now"}
          </button>
        </p>
      </div>
      <div className="bg-black">
        <img
          className="opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Login;
