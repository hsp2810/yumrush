// import RestaurantsList from "@/components/RestaurantsList";
// import { useRouter } from "next/router";
// import React from "react";
// import { FiSearch } from "react-icons/fi";
// import { BsFilterRight } from "react-icons/bs";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]";

// export default function CuisinePage() {
//   const router = useRouter();
//   const { cuisineslug } = router.query;

//   return (
//     <div className='w-3/4 m-auto mt-[2rem]'>
//       <div className='flex items-center w-1/2 m-auto'>
//         <input
//           type='text'
//           id='text'
//           className='w-full rounded-md py-2 px-3 focus:outline-none border-2 border-orange-500 '
//           placeholder='Search for restaurants...'
//         />
//         <button className='border-2 border-orange-500 py-3 px-5 ml-1 transition rounded-md hover:text-white hover:bg-orange-500'>
//           <FiSearch />
//         </button>
//       </div>
//       <div className='flex justify-between items-center mb-4 mt-[3rem]'>
//         <h1 className='text-2xl font-bold'>2 restaurants found</h1>
//         <BsFilterRight className='text-2xl' />
//       </div>
//       <RestaurantsList />
//     </div>
//   );
// }

// export async function getServerSideProps(context: any) {
//   const session = await getServerSession(context.req, context.res, authOptions);
//   //   console.log(session);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { Restaurant } from "@/types";
import { AiOutlineSearch } from "react-icons/ai";
import RestaurantsList from "@/components/Restaurant/RestaurantsList";
import { BsArrowLeftRight, BsFilter } from "react-icons/bs";
import CuisineSearch from "@/components/Dashboard/CuisineSearch";

export default function CuisinePage({
  restaurants,
}: {
  restaurants: Restaurant[];
}) {
  const [filteredRestaurants, setFilteredRestaurants] =
    useState<Restaurant[]>(restaurants);
  const [inputRes, setInputRes] = useState("");

  const filterRestaurants = () => {
    setFilteredRestaurants(restaurants);
    if (inputRes.length === 0) return;

    const filteredArray = filteredRestaurants.filter((res) => {
      return res.name.toLowerCase().includes(inputRes.toLowerCase());
    });
    setFilteredRestaurants(filteredArray);
  };

  return (
    <main className='w-3/4 m-auto mt-[3rem]'>
      <h1 className='text-3xl font-semibold'>Find restaurants</h1>
      <CuisineSearch
        filterRestaurants={filterRestaurants}
        inputRes={inputRes}
        setInputRes={setInputRes}
      />
      <div className='mt-8'>
        {/* {filterRestaurants.length === 0 ? (
          <p>No restaurants found based on your search</p>
        ) : (
          )} */}
        <RestaurantsList restaurants={filteredRestaurants} />
      </div>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  //   console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  //   This should return res only for one cuisnes like Indian
  const restaurants: Restaurant[] = [
    {
      name: "Burger King",
      location: "123 street, Calgary",
      ratings: 4.5,
      url: "/images/restaurants/burgerking.png",
      slug: "burger-king",
      avgDeliveryTime: "30 mins",
      avgPrepTime: "20 mins",
      famousFor: "Fast Food",
      cuisines: [
        { name: "American", slug: "american" },
        { name: "Fast Food", slug: "fast-food" },
      ],
    },
    {
      name: "McDonalds",
      location: "123 street, Calgary",
      ratings: 4.5,
      url: "/images/restaurants/burgerking.png",
      slug: "burger-king",
      avgDeliveryTime: "30 mins",
      avgPrepTime: "20 mins",
      famousFor: "Fast Food",
      cuisines: [
        { name: "American", slug: "american" },
        { name: "Fast Food", slug: "fast-food" },
      ],
    },
  ];

  return {
    props: { restaurants },
  };
}
