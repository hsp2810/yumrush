import { Dish, Restaurant } from "@/types";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import React, { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import RestaurantMenuSidebar from "@/components/Restaurant/RestaurantMenuSidebar";
import RestaurantMenuContent from "@/components/Restaurant/RestaurantMenuContent";
import FoodCart from "@/components/Cart/FoodCart";

const restaurant: Restaurant = {
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
};

export default function RestaurantPage() {
  const startersRef = useRef<HTMLDivElement>(null);
  const mainCourseRef = useRef<HTMLDivElement>(null);
  const dessertsRef = useRef<HTMLDivElement>(null);
  const resTitle = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (resTitle.current) {
        window.scrollTo({
          top: resTitle.current.offsetTop,
          behavior: "smooth",
        });
      }
    }, 500);
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className='relative'>
        <img
          src={"/images/cuisines/french.jpg"}
          alt={`${restaurant.name} Header`}
          className='w-full h-72 object-cover bg-center bg-cover bg-no-repeat opacity-40'
        />
        <div
          className='flex items-end absolute bottom-6 left-10 gap-3'
          ref={resTitle}
        >
          <h1 className='text-5xl text-black font-semibold'>
            <span className='text-black'>{restaurant.name}</span>
          </h1>
          <p className='text-gray-700 text-base'>{restaurant.location}</p>
          <p className='text-gray-700 text-base flex items-center gap-1'>
            <AiFillStar />
            {restaurant.ratings}
          </p>
        </div>
      </div>
      <div className='flex'>
        <RestaurantMenuSidebar
          scrollToSection={scrollToSection}
          dessertsRef={dessertsRef}
          mainCourseRef={mainCourseRef}
          startersRef={startersRef}
        />
        <RestaurantMenuContent
          scrollToSection={scrollToSection}
          dessertsRef={dessertsRef}
          mainCourseRef={mainCourseRef}
          startersRef={startersRef}
        />
        <FoodCart />
      </div>
    </>
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
