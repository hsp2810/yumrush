import Map from "@/components/Map/Map";
import ResMapCard from "@/components/Map/ResMapCard";
import RestaurantsList from "@/components/Restaurant/RestaurantsList";
import { Restaurant } from "@/types";
import React from "react";

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

export default function Restaurants() {
  return (
    <main className='flex'>
      <div className='flex flex-col'>
        <h1 className='text-2xl text-center text-orange-500 underline font-extrabold mt-5 mb-3'>
          Restaurants near you
        </h1>
        <div className='flex-[30] h-[90vh] p-2'>
          <div>
            {restaurants &&
              restaurants.map((restaurant, index) => {
                return <ResMapCard key={index} restaurant={restaurant} />;
              })}
          </div>
        </div>
      </div>

      <div className='flex-[70] h-[89vh] p-2'>
        <Map />
      </div>
    </main>
  );
}
