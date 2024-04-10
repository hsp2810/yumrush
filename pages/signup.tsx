import React, { useCallback, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { register } from "@/utils/api/users/auth";
import toast from "react-hot-toast";

type Label = {
  htmlFor: string;
  title: string;
};

type Input = {
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SignupPage = () => {
  return (
    <div className='flex'>
      <UserRegister />
      <div className='border-l border-gray-300 h-[90vh] rounded-full'></div>
      <BusinessRegister />
    </div>
  );
};

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserRegister = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      if (!username || !name || !email || !password) {
        return toast.error("Please fill all the fields");
      }

      const response = await register({ username, name, email, password });
      setUsername("");
      setEmail("");
      setName("");
      setPassword("");
      toast(response.data.message);
    },
    [username, name, email, password]
  );
  return (
    <div className='flex-[50] bg-orange-50 min-h-[90vh] flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-[60%]'>
        <h2 className='text-3xl font-semibold text-orange-500 mb-6 uppercase text-center'>
          Signup as User
        </h2>
        <form className='w-full'>
          <div className='mb-2'>
            <Label htmlFor='username' title='Username' />
            <Input
              id='username'
              type='text'
              placeholder='Enter your username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <Label htmlFor='name' title='Name' />
            <Input
              id='name'
              type='text'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <Label htmlFor='email' title='Email' />
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <Label htmlFor='password' title='Password' />
            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='my-5 flex items-start'>
            <input type='checkbox' id='remember' className='mr-2 mt-1' />
            <label
              htmlFor='remember'
              className='text-gray-600 font-medium text-xs text-justify cursor-pointer'
            >
              By clicking 'Register,' you agree to our Terms and Conditions.
              Please take a moment to review our Terms and Conditions, which
              outline the rules and guidelines for using our platform
            </label>
          </div>
          <button
            type='submit'
            className='w-full uppercase bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 font-medium'
            onClick={handleUserRegister}
          >
            Signup as user
          </button>
        </form>
        <div className='mt-5'>
          <span className='font-medium text-gray-600'>
            Already have an account?{" "}
            <Link href='/login' className='ml-1 text-orange-500 uppercase'>
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

const BusinessRegister = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPassword, setBusinessPassword] = useState("");
  return (
    <div className='flex-[50] bg-orange-50 min-h-[90vh] flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-[60%]'>
        <h2 className='text-3xl font-semibold text-orange-500 mb-6 uppercase text-center'>
          Signup as Business
        </h2>
        <form className='w-full'>
          <div className='mb-2'>
            <Label htmlFor='businessName' title='Store/Restaurant Name' />
            <Input
              id='businessName'
              type='text'
              placeholder='Enter your Store/Restaurant name'
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <Label htmlFor='businessEmail' title='Business Email' />
            <Input
              id='businessEmail'
              type='email'
              placeholder='Enter business email'
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <Label htmlFor='businessPassword' title='Password' />
            <Input
              id='businessPassword'
              type='password'
              placeholder='Enter your password'
              value={businessPassword}
              onChange={(e) => setBusinessPassword(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <Label htmlFor='file' title='Upload store license' />
            <FileInput />
          </div>
          <div className='my-5 flex items-start'>
            <input type='checkbox' id='businessConsent' className='mr-2 mt-1' />
            <label
              htmlFor='businessConsent'
              className='text-gray-600 font-medium text-xs text-justify cursor-pointer'
            >
              By clicking 'Register,' you agree to our Terms and Conditions.
              Please take a moment to review our Terms and Conditions, which
              outline the rules and guidelines for using our platform
            </label>
          </div>
          <button
            type='submit'
            className='w-full uppercase bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 font-medium'
          >
            Signup as business
          </button>
        </form>
        <div className='mt-5'>
          <span className='font-medium text-gray-600'>
            Already have an account?{" "}
            <Link href='/login' className='ml-1 text-orange-500 uppercase'>
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

const Label = ({ htmlFor, title }: Label) => {
  return (
    <label htmlFor={htmlFor} className='block text-gray-600 font-medium mb-2'>
      {title}
    </label>
  );
};

const Input = ({ type, id, placeholder, value, onChange }: Input) => {
  return (
    <input
      type={type}
      id={id}
      className='w-full border text-gray-600 border-orange-500 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const FileInput = () => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const selectedFile = e.target.files?[0]
    // Handle the selected file here
  };

  return (
    <label className='block text-gray-600 font-medium'>
      <span className='block text-center bg-orange-100 cursor-pointer w-full border text-gray-500 border-orange-500 rounded-md py-2 px-3 hover:bg-orange-200 hover:border-orange-200 hover:text-orange-500 transition delay-75'>
        Choose a file
      </span>
      <input
        type='file'
        id='file'
        className='hidden'
        onChange={handleFileChange}
      />
    </label>
  );
};

export default SignupPage;
