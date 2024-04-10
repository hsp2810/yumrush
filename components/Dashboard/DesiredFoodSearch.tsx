import Link from "next/link";
import React, { useState } from "react";

const DesiredFoodSearch = () => {
  const [desiredFoodInput, setDesiredFoodInput] = useState("");

  return (
    <div className='flex-[50] bg-orange-100 p-6 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-semibold mb-4 items-start'>
        Let your cravings choose the food!
      </h2>

      <div className='mb-4'>
        <label htmlFor='food' className='block text-gray-600 font-medium mb-2'>
          Enter Desired Food
        </label>
        <input
          type='text'
          id='food'
          className='w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
          placeholder='Pizza, Sushi, or Tacos...'
          value={desiredFoodInput}
          onChange={(e: any) => setDesiredFoodInput(e.target.value)}
        />
      </div>
      <Link
        href={`/dishes?search=${desiredFoodInput}`}
        className='block text-center w-full text-xl bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 font-medium'
      >
        Find the best places
      </Link>
    </div>
  );
};

export default DesiredFoodSearch;
