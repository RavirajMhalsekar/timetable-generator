// components/App.js
"use client";
import { useState } from "react";
import Link from "next/link";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import MyComponent from "./MyComponent";
const App = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
  };

  return (
    <div className="h-screen flex text-[white]">
     <div className="w-6/12 bg-[#6b5b95]" >
     <MyComponent/>
     </div>
      <div className="w-6/12 bg-[#12130f] overflow-auto px-10 py-[25px]">
        <div className="flex justify-end mb-[10%]">
          <button
            onClick={handleSignInClick}
            className={`bg-[#40434e] text-[#9da6b1] cursor-pointer text-[0.9em] inline-block no-underline px-[25px] py-2.5 border-[none] first:rounded-tl-[25px] first:rounded-bl-[25px] last:rounded-tr-[25px] last:rounded-br-[25px] ${
              showSignIn ? "bg-opacity-100" : "bg-opacity-50"
            }`}
          >
            <span>Sign In</span>
          </button>
          <button
            onClick={handleSignUpClick}
            className={`bg-[#40434e] text-[#9da6b1] cursor-pointer text-[0.9em] inline-block no-underline px-[25px] py-2.5 border-[none] first:rounded-tl-[25px] first:rounded-bl-[25px] last:rounded-tr-[25px] last:rounded-br-[25px] ${
              showSignIn ? "bg-opacity-50" : "bg-opacity-100"
            }`}
          >
            <span> Sign Up</span>
          </button>
        </div>

        {/* <div className="text-[#707c8b] font-light mb-[50px]">
          <Link
            href="/components/dashboard/auth/SignInForm"
            className={`text-[#707c8b] no-underline inline-block text-[1.7em] mx-2.5 my-0 pb-[5px] first:ml-0 ${
              showSignIn ? "opacity-100" : "opacity-50"
            }`}
          >
            <span>Sign In</span>
          </Link>{" "}
          or{" "}
          <Link
            href="/components/dashboard/auth/SignUpForm"
            className={`text-[#707c8b] no-underline inline-block text-[1.7em] mx-2.5 my-0 pb-[5px] first:ml-0 ${
              showSignIn ? "opacity-50" : "opacity-100"
            }`}
          >
            <span>Sign Up</span>
          </Link>
        </div> */}

        {/* Assuming SignUpForm and SignInForm are functional components */}
        {showSignIn ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default App;