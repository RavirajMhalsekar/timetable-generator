// components/SignUpForm.tsx
"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface SignUpFormState {
  email: string;
  password: string;
  confirmPassword: string;
  hasAgreed: boolean;
  passwordMatchError: string;
}

const SignUpForm: React.FC = () => {
  const [form, setForm] = useState<SignUpFormState>({
    email: "",
    password: "",
    confirmPassword: "",
    hasAgreed: false,
    passwordMatchError: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;

    // Explicitly cast target to HTMLInputElement to avoid TypeScript error
    const value =
      (target as HTMLInputElement).type === "checkbox"
        ? (target as HTMLInputElement).checked
        : (target as HTMLInputElement).value;

    const name = target.name;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear password match error when passwords are changed
    if (name === "password" || name === "confirmPassword") {
      setForm((prevForm) => ({
        ...prevForm,
        passwordMatchError: "",
      }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if passwords match
    if (form.password !== form.confirmPassword) {
      setForm((prevForm) => ({
        ...prevForm,
        passwordMatchError: "Passwords do not match",
      }));
      return;
    }

    console.log("The form was submitted with the following data:");
    console.log(form);
    setForm({
      email: "",
      password: "",
      confirmPassword: "",
      hasAgreed: false,
      passwordMatchError: "",
    });
  };

  return (
    <div className="mb-[100px]">
      <div className="text-[#707c8b] font-light mb-[50px]">
        <h1 className="text-[#707c8b] no-underline inline-block text-[1.7em] mx-2.5 my-0 pb-[5px] first:ml-0">
          Sign Up
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="formFields">
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
            className="w-[85%] bg-transparent text-[white] text-[1em] font-light mt-2.5 pb-2.5 border-b-[#445366] border-[none] border-b border-solid outline: none"
            placeholder="Enter your email"
            name="email"
            value={form.email}
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
            className="w-[85%] bg-transparent text-[white] text-[1em] font-light mt-2.5 pb-2.5 border-b-[#445366] border-[none] border-b border-solid outline: none"
            placeholder="Enter your password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-10">
          <label
            className="block uppercase text-[0.9em] text-[white]"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-[85%] bg-transparent text-[white] text-[1em] font-light mt-2.5 pb-2.5 border-b-[#445366] border-[none] border-b border-solid outline: none"
            placeholder="Enter your password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          {form.passwordMatchError && (
            <p className="text-red-500">{form.passwordMatchError}</p>
          )}
        </div>
        <div className="mb-10">
          <label className="text-[#646f7d] text-[0.9em]">
            <input
              className="relative top-[1.5px]"
              type="checkbox"
              name="hasAgreed"
              checked={form.hasAgreed}
              onChange={handleChange}
              required
            />{" "}
            I agree all statements in{" "}
            <a
              href="#"
              className="text-[white] no-underline inline-block ml-[5px] pb-0.5 "
            >
              terms of service
            </a>
          </label>
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

export default SignUpForm;
