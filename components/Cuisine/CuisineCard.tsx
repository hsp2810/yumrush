import { Cuisine } from "@/types";
import Link from "next/link";
import React from "react";

const CuisineCard = ({ cuisine }: { cuisine: Cuisine }) => {
  return (
    <Link
      href={`/cuisines?search=${cuisine.name}`}
      className='relative rounded-3xl overflow-hidden shadow-lg h-[8rem] w-[13rem] transform transition-transform duration-300 hover:scale-105'
    >
      <img
        src={cuisine.url as string}
        alt={cuisine.name}
        className='w-full h-full opacity-50 transition-opacity duration-300'
      />
      <div className='absolute bottom-0 left-0 p-4'>
        <h3 className='text-2xl font-semibold z-50 text-black'>
          {cuisine.name}
        </h3>
      </div>
    </Link>
  );
};

export default CuisineCard;
// public\images\cuisines\thai.jpg
