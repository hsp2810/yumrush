import React, { useState, useCallback } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { login } from "@/utils/api/users/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("harshit123@gmail.com");
  const [password, setPassword] = useState("password");

  const handleLogin = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      if (!email || !password) {
        return toast.error("Please fill both email and password");
      }

      await login(email, password);
    },
    [email, password]
  );

  return (
    <div className='bg-orange-50 min-h-[90vh] flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-[30%]'>
        <h2 className='text-3xl font-semibold text-orange-500 mb-6 uppercase text-center'>
          login
        </h2>
        <form className='w-full'>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-600 font-medium mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full border text-gray-600 border-orange-500 rounded-md py-2 px-3 focus:outline-none focus:border-none focus:ring-2 focus:ring-orange-400 focus:border-transparent'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-600 font-medium mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              className='w-full border text-gray-600 border-orange-500 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mb-4 flex items-center'>
            <input type='checkbox' id='remember' className='mr-2' />
            <label htmlFor='remember' className='text-gray-600 font-medium'>
              Business user?
            </label>
          </div>
          <button
            type='submit'
            className='w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 font-medium uppercase'
            onClick={handleLogin}
          >
            LogIn
          </button>
        </form>
        <div className='mt-3'>
          <span className='font-medium text-gray-600'>
            Do not have an account?{" "}
            <Link href='/signup' className='ml-1 text-orange-500 uppercase'>
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
