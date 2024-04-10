import { Restaurant } from "@/types";
import Link from "next/link";
import React from "react";
import { BiMap, BiSolidFoodMenu } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaBowlFood } from "react-icons/fa6";
import { BiTimeFive } from "react-icons/bi";

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className='bg-orange-100 flex mb-4 h-fit rounded-lg shadow-md py-4 px-7'>
      <div className='w-[8rem] h-[8rem]'>
        <img
          src={restaurant.url}
          alt={`${restaurant.name} Logo`}
          className='w-full h-full'
        />
      </div>
      <div className='flex flex-1 ml-3 items-center justify-between  '>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-semibold mb-2'>{restaurant.name}</h2>
          <p className='text-orange-600 text-sm flex items-center'>
            <BiMap />
            {restaurant.location}
          </p>
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
          <p className='flex items-center text-sm text-orange-600'>
            <AiFillStar />
            {restaurant.ratings}
          </p>
        </div>

        <div className='flex flex-col'>
          <div className='flex mb-2'>
            <div className='ml-4 text-gray-700'>
              <p className='text-sm flex items-center'>
                <BiTimeFive className={"mr-1"} /> Delivery:{" "}
                {restaurant.avgDeliveryTime}
              </p>
              <p className='text-sm flex items-center'>
                <BiTimeFive className={"mr-1"} /> Preparation:{" "}
                {restaurant.avgPrepTime}
              </p>
              <p className='text-gray-700 text-sm'>
                Famous For: {restaurant.famousFor}
              </p>
            </div>
          </div>
        </div>
        <Link
          href={`/restaurants/${restaurant.slug}`}
          className='text-orange-500 hover:underline text-base flex items-center'
        >
          View Menu
          <BiSolidFoodMenu />
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
