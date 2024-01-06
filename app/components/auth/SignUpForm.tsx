// components/SignUpForm.tsx
"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

interface SignUpFormState {
  email: string;
  password: string;
  name: string;
  hasAgreed: boolean;
}

const SignUpForm: React.FC = () => {
  const [state, setState] = useState<SignUpFormState>({
    email: '',
    password: '',
    name: '',
    hasAgreed: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(state);
  };

  return (
    <div className="mb-[100px]"> 
    <div className="text-[#707c8b] font-light mb-[50px]">  
         <h1  className="text-[#707c8b] no-underline inline-block text-[1.7em] mx-2.5 my-0 pb-[5px] first:ml-0">Sign Up</h1>
     </div> 
      <form onSubmit={handleSubmit} className="formFields">
        <div className="mb-10">
          <label className="block uppercase text-[0.9em] text-[white]" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-[85%] bg-transparent text-[white] text-[1em] font-light mt-2.5 pb-2.5 border-b-[#445366] border-[none] border-b border-solid;
  outline: none"
            placeholder="Enter your full name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-10">
          <label className="block uppercase text-[0.9em] text-[white]" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-[85%] bg-transparent text-[white] text-[1em] font-light mt-2.5 pb-2.5 border-b-[#445366] border-[none] border-b border-solid;
  outline: none"
            placeholder="Enter your password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-10">
          <label className="block uppercase text-[0.9em] text-[white]" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="w-[85%] bg-transparent text-[white] text-[1em] font-light mt-2.5 pb-2.5 border-b-[#445366] border-[none] border-b border-solid;
  outline: none"
            placeholder="Enter your email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-10">
          <label className="text-[#646f7d] text-[0.9em]">
            <input
              className="relative top-[1.5px]"
              type="checkbox"
              name="hasAgreed"
              checked={state.hasAgreed}
              onChange={handleChange}
            />{' '}
            I agree all statements in{' '}
            <a href="null" className="text-[white] no-underline inline-block ml-[5px] pb-0.5 ">
              terms of service
            </a>
          </label>
        </div>

        <div className="mb-10">
          <button type="submit" className="bg-[#6b5b95] text-[white] text-[0.8em] font-medium px-[70px] py-[15px] rounded-[25px] border-[none];
  outline: none">
            Sign Up
          </button>{' '}
          <Link href="/sign-in">
            <span className="text-[#66707d] no-underline inline-block pb-[5px] border-b-[1.5px] border-b-[#6b5b95] border-solid;
">I'm already a member</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
