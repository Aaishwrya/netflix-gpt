import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { BG_IMAGE } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute min-w-full">
        <img
          className="min-w-full"
          src={BG_IMAGE}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 rounded-xl bg-black/70 p-12 absolute mt-36 mx-auto text-white right-0 left-0"
      >
        <h2 className="font-bold text-3xl py-4">
          Sign {isSignInForm ? "In" : "Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Name"
            ref={name}
            className="p-4 rounded-lg my-4 w-full bg-gray-700"
          />
        )}{" "}
        <input
          type="email"
          ref={email}
          placeholder="Enter Email Address"
          className="p-4 rounded-lg my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-4 rounded-lg my-4 w-full  bg-gray-700"
        />
        <p className="text-red-800 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-800 w-full rounded-lg"
          onClick={handleSubmit}
        >
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
