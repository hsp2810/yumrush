import React, { useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import DishSearch from "@/components/Dashboard/DishSearch";
import { Dish, Restaurant } from "@/types";
import RestaurantsList from "@/components/Restaurant/RestaurantsList";
import DishCard from "@/components/Restaurant/DishCard";
import { useRouter } from "next/router";

export default function Dishes({ dishes }: { dishes: Dish[] }) {
  const router = useRouter();
  const { search } = router.query;
  const [inputRes, setInputRes] = useState(search as string);

  return (
    <main className='w-3/4 m-auto mt-[3rem]'>
      <h1 className='text-3xl font-semibold'>
        Let your cravings choose the food for you!
      </h1>
      <DishSearch inputRes={inputRes} setInputRes={setInputRes} />
      <div className='mt-8'>
        {/* {filterRestaurants.length === 0 ? (
      <p>No restaurants found based on your search</p>
    ) : (
      )} */}
        {dishes.map((dish, index) => {
          return <DishCard key={index} dish={dish} />;
        })}
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

  const dishes: Dish[] = [
    {
      name: "Tiramisu",
      slug: "tiramisu",
      type: "Desserts",
      restaurant: {
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
      description: "Coffee-flavored Italian dessert",
      price: 7.99,
      url: "/images/dishes/Tiramisu.jpg",
      cuisine: { name: "Italian" },
    },
  ];

  return {
    props: { dishes },
  };
}
