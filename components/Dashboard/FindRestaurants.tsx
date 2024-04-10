import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";

const FindRestaurants = () => {
  const [resInput, setResInput] = useState("");

  return (
    <div className='flex-[50] bg-orange-100 p-6 rounded-lg shadow-lg'>
      <div className='flex justify-between'>
        <h2 className='text-2xl font-semibold mb-4 items-start'>
          Start your day or finish it with a great meal!
        </h2>
        <div className='p-2 cursor-pointer rounded-full transition h-fit hover:bg-white hover:text-orange-500'>
          <BiCurrentLocation className='text-2xl ' />
        </div>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='address'
          className='block text-gray-600 font-medium mb-2'
        >
          Enter Your Address
        </label>
        <input
          type='text'
          id='address'
          className='w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
          placeholder='123 Main Street, City, State'
          value={resInput}
          onChange={(e: any) => setResInput(e.target.value)}
        />
      </div>
      <Link
        href={"/restaurants"}
        className='block text-center w-full text-xl bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 font-medium'
      >
        Find Restaurants Near You
      </Link>
    </div>
  );
};

export default FindRestaurants;
