import React, { useState } from "react";
import Link from "next/link";
import { MdFastfood, MdFoodBank } from "react-icons/md";
import useLoginUser from "@/lib/useLoginUser";
import { signOut } from "next-auth/react";
import { IoSettings } from "react-icons/io5";
import { useCartContext } from "@/context/CartContext";

const Navbar = () => {
  const { data: homeUser } = useLoginUser();
  const { clearCart } = useCartContext();

  const [isIconRotated, setIsIconRotated] = useState(false);

  const toggleIconRotation = () => {
    setIsIconRotated(!isIconRotated);
  };

  const handleLogout = () => {
    toggleIconRotation();
    const userInput: boolean = window.confirm(
      "Are you sure about loggin out? It will delete your cart and the session will be closed"
    );

    if (userInput) {
      clearCart();
      signOut();
    }
  };

  const iconRotationClass = isIconRotated ? "-rotate-90" : "";
  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 pt-3 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className='font-bold text-2xl text-orange-500 flex items-center'
            >
              <MdFastfood />
              YumRush
            </Link>
          </div>

          {/* Navigation Links */}
          {homeUser && (
            <div className='hidden md:block'>
              <ul className='space-x-4'>
                <li className='inline-block'>
                  <Link
                    href='/'
                    className='text-gray-600 hover:text-orange-500 font-medium transition duration-300'
                  >
                    Home
                  </Link>
                </li>

                <li className='inline-block'>
                  <Link
                    href='/'
                    className='text-gray-600 hover:text-orange-500 font-medium transition duration-300'
                  >
                    Contact
                  </Link>
                </li>
                <li className='inline-block'>
                  <Link
                    href='/'
                    className='text-gray-600 hover:text-orange-500 font-medium transition duration-300'
                  >
                    Previous Orders
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Login Button */}
          {!homeUser ? (
            <div className='md:ml-4'>
              <Link
                href='/login'
                className='hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-md'
              >
                LOGIN
              </Link>
            </div>
          ) : (
            <div className='flex items-center gap-3'>
              <div className='md:ml-4 relative' onClick={toggleIconRotation}>
                <IoSettings
                  className={`text-orange-500 cursor-pointer transition-transform transform ${iconRotationClass}`}
                  size={25}
                />
                {isIconRotated && (
                  <ul className='absolute right-6 bg-white shadow-lg rounded-md text-black z-50'>
                    <li className='w-full hover:bg-slate-300 px-6 py-3 rounded-t-md'>
                      <Link href='/profiles' onClick={toggleIconRotation}>
                        Profile
                      </Link>
                    </li>
                    <hr className='border-t border-gray-300 w-full' />
                    <li className='w-full hover:bg-slate-300 px-6 py-3 rounded-b-md'>
                      <button
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <MdFoodBank
                className={`text-orange-500 cursor-pointer transition-transform transform`}
                size={30}
              />
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button className='text-gray-600 hover:text-orange-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
