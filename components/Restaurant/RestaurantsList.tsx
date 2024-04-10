import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Restaurant } from "@/types";

const RestaurantsList = ({ restaurants }: { restaurants: Restaurant[] }) => {
  return (
    <div>
      {restaurants &&
        restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} restaurant={restaurant} />;
        })}
    </div>
  );
};

export default RestaurantsList;
