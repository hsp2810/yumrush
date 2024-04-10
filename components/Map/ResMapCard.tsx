import { Restaurant } from "@/types";
import Link from "next/link";
import React from "react";
import { BiMap, BiSolidFoodMenu, BiSolidMap } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaBowlFood } from "react-icons/fa6";
import { BiTimeFive } from "react-icons/bi";

const ResMapCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className='relative bg-orange-100 flex mb-4 w-[25rem] h-fit rounded-lg shadow-md py-4 px-7'>
      <span className='absolute right-2 top-5 px-2 py-1 bg-red-500 text-white rounded-full text-sm'>
        CLOSED
      </span>
      <div className='w-[3rem] h-[3rem]'>
        <img
          src={restaurant.url}
          alt={`${restaurant.name} Logo`}
          className='w-full h-full'
        />
      </div>
      <div className='flex flex-col ml-3 items-start'>
        <div className='flex flex-col '>
          <h2 className='text-2xl font-semibold mb-2'>{restaurant.name}</h2>
          <div className='flex'>
            <span className='text-orange-600 text-sm flex items-center'>
              <BiMap /> {restaurant.location}
            </span>

            <span className='ml-1 flex items-center text-sm text-orange-600'>
              <AiFillStar />
              {restaurant.ratings}
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-700 mb-1 flex items-center'>
            <span className='text-sm mr-1'>
              <FaBowlFood />{" "}
            </span>
            {restaurant.cuisines.map((cuisine, index) => (
              <span key={index} className='mr-1 text-sm'>
                {cuisine.name} |
              </span>
            ))}
          </p>
        </div>
        <div className='flex space-x-4 mt-5'>
          <Link
            href={`/restaurants/${restaurant.slug}`}
            className='bg-orange-400 flex items-center text-sm hover:bg-orange-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          >
            View Menu
            <BiSolidFoodMenu />
          </Link>
          <button className='bg-green-400 hover:bg-green-500 text-sm text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center'>
            View on Map
            <BiSolidMap />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResMapCard;
