import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute min-w-full">
        <img
          className="min-w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg"
        />
      </div>
      <form className="w-3/12 rounded-xl bg-black/70 p-12 absolute mt-36 mx-auto text-white right-0 left-0">
        <h2 className="font-bold text-3xl py-4">
          Sign {isSignInForm ? "In" : "Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Name"
            className="p-4 rounded-lg my-4 w-full bg-gray-700"
          />
        )}{" "}
        <input
          type="email"
          placeholder="Enter Email Address"
          className="p-4 rounded-lg my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 rounded-lg my-4 w-full  bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-800 w-full rounded-lg">
          Sign {isSignInForm ? "In" : "Up"}
        </button>
        <p onClick={() => toggleSignInform()} className="py-6 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a member? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
