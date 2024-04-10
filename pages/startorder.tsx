import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import useLoginUser from "@/lib/useLoginUser";
import FindRestaurants from "@/components/Dashboard/FindRestaurants";
import ORLine from "@/components/utils/ORLine";
import DesiredFoodSearch from "@/components/Dashboard/DesiredFoodSearch";
import CuisinesListScroll from "@/components/Cuisine/CuisinesListScroll";
import RestaurantsList from "@/components/Restaurant/RestaurantsList";
import { Restaurant } from "@/types";

export default function UserDashboard() {
  const { data: homeUser } = useLoginUser();

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
      url: "/images/restaurants/mcd.png",
      avgDeliveryTime: "30 mins",
      slug: "mcdonalds",
      avgPrepTime: "20 mins",
      famousFor: "Fast Food",
      cuisines: [
        { name: "American", slug: "american" },
        { name: "Fast Food", slug: "fast-food" },
      ],
    },
  ];

  return (
    <div>
      <div className='mt-[3rem] px-[5rem]'>
        <h1 className='text-2xl font-extrabold mb-4 text-orange-500'>
          Hello, {homeUser?.name}
        </h1>
        <div className='flex gap-4'>
          <FindRestaurants />
          <DesiredFoodSearch />
        </div>
      </div>
      <ORLine />

      <div className='text-2xl font-bold px-[2rem] mb-[5rem] w-3/4 mx-auto'>
        <h2 className='mb-5 underline underline-offset-[6px]'>
          Choose from this cuisines
        </h2>
        <CuisinesListScroll />
      </div>

      <div className='text-2xl font-bold px-[2rem] mb-[5rem] w-3/4 mx-auto'>
        <h2 className='mb-5 underline underline-offset-[6px]'>
          Restaurants with the best reviews
        </h2>
        <RestaurantsList restaurants={restaurants} />
      </div>
    </div>
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

  return {
    props: {},
  };
}
