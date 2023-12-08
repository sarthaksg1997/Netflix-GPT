import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateFormData } from "../common/validate";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  //   signInWithPopup,
} from "firebase/auth";

import { auth, googleProvider } from "../common/firebase";

const Login = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  //   const signInWithGoogle = async () => {
  //     try {
  //       await signInWithPopup(auth, googleProvider);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  const clickHandler = (event) => {
    event.preventDefault();
    const response = validateFormData(
      emailRef.current?.value,
      passwordRef.current?.value
    );

    setErrorMessage(response);

    if (response) return;

    if (showSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current?.value,
        passwordRef.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setErrorMessage(null);
          navigate("/home");
          // ...
        })
        .catch(() => {
          setErrorMessage("Email already in use");
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current?.value,
        passwordRef.current?.value
      )
        .then((userCredential) => {
          // Signed in
          setErrorMessage(null);
          navigate("/home");
          // ...
        })
        .catch(() => {
          setErrorMessage("Invalid credential");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute z-10 text-[#fff] h-auto w-1/3 top-[15%] left-1/3 bg-[rgba(0,0,0,0.75)] py-14">
        <h1 className=" ml-[3.3rem] text-[32px] font-medium mb-3 ">
          {showSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        <form className="flex flex-col ">
          <input
            type="text"
            ref={emailRef}
            placeholder="Email Address"
            className="bg-[#333] rounded w-3/4 mx-auto my-4 leading-[50px] h-[50px] p-[16px]"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            className="bg-[#333] rounded w-3/4 mx-auto my-4 leading-[50px] h-[50px] p-[16px]"
          />
          {errorMessage !== null && (
            <p className="text-[#e50914] ml-[13%] mb-3">{errorMessage}</p>
          )}
          <button
            className="bg-[#e50914] text-[#fff] font-medium rounded w-3/4 mx-auto my-4 leading-[50px] h-[50px]"
            onClick={clickHandler}
          >
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
        {/* <button
          className="text-[#e50914] ml-[31%] mt-4"
          onClick={signInWithGoogle}
        >
          {" "}
          Or signin with google
        </button> */}
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
