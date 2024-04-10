import React from "react";
import { useRouter } from "next/router";

export default function DishPage() {
  const dish = {
    name: "Caprese Salad",
    type: "Starters",
    slug: "caprese-salad",
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
    description: "Tomato, mozzarella, basil",
    price: 8.99,
    url: "/images/dishes/Caprese_Salad.jpg",
    cuisine: { name: "Italian" },
    caution: ["peanuts", "pickles", "mustard"],
  };
  const router = useRouter();
  return (
    <div className='w-3/4 m-auto mt-5'>
      <button
        onClick={() => router.back()}
        className='bg-slate-200 px-4 py-2 rounded-lg'
      >
        Back
      </button>
      <div className='container mx-auto py-8'>
        <div className='flex items-center gap-5 mb-6'>
          <h1 className='text-4xl font-semibold text-orange-500'>
            {dish.name}
          </h1>
          from
          <div className='flex items-center space-x-2'>
            <img
              src={dish.restaurant.url}
              alt={dish.restaurant.name}
              className='w-12 h-12 rounded-full'
            />
            <div>
              <p className='font-semibold'>{dish.restaurant.name}</p>
              <p className='text-sm'>{dish.restaurant.location}</p>
              <p className='text-yellow-500 text-sm'>
                {dish.restaurant.ratings.toFixed(1)} ({dish.restaurant.ratings}{" "}
                reviews)
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <img
              src={dish.url}
              alt={dish.name}
              className='w-full rounded-lg shadow-md'
            />
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-2'>Description</h2>
            <p>{dish.description}</p>

            <h2 className='text-xl font-semibold mt-4 mb-2'>Caution</h2>
            <ul className='list-disc pl-4'>
              {dish.caution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className='text-xl font-semibold mt-4 mb-2'>Price</h2>
            <p>${dish.price.toFixed(2)}</p>

            <h2 className='text-xl font-semibold mt-4 mb-2'>
              Delivery & Preparation
            </h2>
            <p>Avg. Delivery Time: {dish.restaurant.avgDeliveryTime}</p>
            <p>Avg. Prep Time: {dish.restaurant.avgPrepTime}</p>

            <h2 className='text-xl font-semibold mt-4 mb-2'>Famous For</h2>
            <p>{dish.restaurant.famousFor}</p>

            <h2 className='text-xl font-semibold mt-4 mb-2'>Cuisines</h2>
            <div className='flex flex-wrap'>
              {dish.restaurant.cuisines.map((cuisine, index) => (
                <span
                  key={index}
                  className='bg-orange-200 text-orange-500 px-2 py-1 rounded-full mr-2 mb-2'
                >
                  {cuisine.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
