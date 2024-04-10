import { useCartContext } from "@/context/CartContext";
import { Dish } from "@/types";
import React from "react";
import Link from "next/link";

const DishCard = ({ dish }: { dish: Dish }) => {
  const { addDish } = useCartContext();

  const addToCart = (dish: Dish) => {
    addDish(dish);
  };

  return (
    <div className='bg-orange-100 p-4 rounded-lg shadow-md flex'>
      <img
        src={dish.url}
        alt={`${dish.name}`}
        className='w-1/3 h-48 object-cover rounded-lg mr-4'
      />
      <div className='w-2/3'>
        <Link
          href={`/restaurants/${
            dish.restaurant?.slug
          }/${dish.type.toLowerCase()}/${dish.slug}`}
          className=' hover:text-orange-400 transition-all delay-[10ms] text-xl font-semibold mb-2'
        >
          {dish.name}
        </Link>
        <p className='text-gray-600'>{dish.description}</p>
        <p className='text-gray-600 mt-2'>From {dish.cuisine.name} cuisine</p>
        <p className='text-orange-500 font-semibold mt-2'>
          Price: ${dish.price}
        </p>
        <button
          className='text-white bg-orange-500 py-2 px-4 mt-2 rounded-lg hover:bg-orange-600'
          onClick={() => addToCart(dish)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishCard;
