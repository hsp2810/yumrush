import React, { Ref, useRef } from "react";
import DishCard from "./DishCard";

type PageProps = {
  scrollToSection: any;
  startersRef: React.RefObject<HTMLDivElement>;
  mainCourseRef: React.RefObject<HTMLDivElement>;
  dessertsRef: React.RefObject<HTMLDivElement>;
};

const RestaurantMenuContent = ({
  startersRef,
  mainCourseRef,
  dessertsRef,
}: PageProps) => {
  const menu = {
    starters: [
      {
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
        ingredients: [
          "lettuce",
          "tomato",
          "shredded cheese",
          "shredded carrots",
        ],
      },
      {
        name: "Garlic Bread",
        type: "Starters",
        slug: "garlic-bread",
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
        description: "Toasted bread with garlic butter",
        price: 5.99,
        url: "/images/dishes/garlic_bread.jpg",
        cuisine: { name: "Italian" },
      },
    ],
    mainCourse: [
      {
        name: "Spaghetti Carbonara",
        type: "Main Course",
        slug: "spaghetti-carbonara",
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
        description: "Pasta with bacon and egg sauce",
        price: 12.99,
        url: "/images/dishes/Spaghetti_Carbonara.jpg",
        cuisine: { name: "Italian" },
      },
      {
        name: "Grilled Salmon",
        type: "Main Course",
        slug: "grilled-salmon",
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
        description: "Fresh salmon with lemon butter",
        price: 16.99,
        url: "/images/dishes/Grilled_Salmon.jpg",
        cuisine: { name: "Italian" },
      },
    ],
    desserts: [
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
      {
        name: "Chocolate Fondue",
        type: "Desserts",
        slug: "chocolate-fondue",
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
        description: "Assorted fruits with melted chocolate",
        price: 9.99,
        url: "/images/dishes/Chocolate Fondue.jpg",
        cuisine: { name: "Italian" },
      },
    ],
  };

  return (
    <div className='flex-[60] container mr-3 py-8 h-[80vh] overflow-y-scroll hide-scroll'>
      <h1 className='text-3xl font-semibold mb-4'>Menu</h1>

      {/* Starters */}
      <div className='mb-6'>
        <h2 ref={startersRef} className='text-xl font-semibold mb-2'>
          Starters
        </h2>
        <div className='space-y-4'>
          {menu.starters.map((dish, index) => (
            <DishCard dish={dish} key={index} />
          ))}
        </div>
      </div>

      

      {/* Main Course */}
      <div className='mb-6'>
        <h2 ref={mainCourseRef} className='text-xl font-semibold mb-2'>
          Main Course
        </h2>
        <div className='space-y-4'>
          {menu.mainCourse.map((dish, index) => (
            <DishCard dish={dish} key={index} />
          ))}
        </div>
      </div>

      {/* Desserts */}
      <div>
        <h2 ref={dessertsRef} className='text-xl font-semibold mb-2'>
          Desserts
        </h2>
        <div className='space-y-4'>
          {menu.desserts.map((dish, index) => (
            <DishCard dish={dish} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuContent;
