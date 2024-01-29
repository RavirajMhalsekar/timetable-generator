// components/SignInForm.tsx
"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface SignInFormState {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const [state, setState] = useState<SignInFormState>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(state);
  };

  return (
    <div className="mb-[100px]">
      <div className="text-[#707c8b] font-light mb-[50px]">
        <span className="text-[#707c8b] no-underline inline-block text-[1.7em] mx-2.5 my-0 pb-[5px] first:ml-0">
          Sign In
        </span>
      </div>

      <form className="mb-10" onSubmit={handleSubmit}>
        <div className="mb-10">
          <label
            className="block uppercase text-[0.9em] text-[white]"
            htmlFor="email"
          >
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="@apply w-[85%] bg-transparent text-[white] text-[1em] font-light mt-2.5 pb-2.5 border-b-[#445366] border-[none] border-b border-solid;
  outline: none"
            placeholder="Enter your email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-10">
          <label
            className="block uppercase text-[0.9em] text-[white]"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="@apply w-[85%] bg-transparent text-[white] text-[1em] font-light mt-2.5 pb-2.5 border-b-[#445366] border-[none] border-b border-solid;
  outline: none"
            placeholder="Enter your password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-10">
          <button
            type="submit"
            className="bg-[#6b5b95] text-[white] text-[0.8em] font-medium px-[70px] py-[15px] rounded-[25px] border-[none] outline: none transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
