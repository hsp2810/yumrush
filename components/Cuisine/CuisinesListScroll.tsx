import React from "react";
import CuisineCard from "./CuisineCard";
import { Cuisine } from "@/types";

const cuisines: Cuisine[] = [
  {
    name: "Indian",
    url: "/images/cuisines/indian.jpg",
    slug: "indian",
  },
  {
    name: "Mexican",
    url: "/images/cuisines/mexican.jpg",
    slug: "mexican",
  },
  {
    name: "Italian",
    url: "/images/cuisines/italian.jpg",
    slug: "italian",
  },
  {
    name: "French",
    url: "/images/cuisines/french.jpg",
    slug: "french",
  },
  {
    name: "Thai",
    url: "/images/cuisines/thai.jpg",
    slug: "thai",
  },
];

const CuisinesListScroll = () => {
  return (
    <div className='flex gap-4'>
      {cuisines &&
        cuisines.map((cuisine: Cuisine) => {
          return <CuisineCard key={cuisine.name} cuisine={cuisine} />;
        })}
    </div>
  );
};

export default CuisinesListScroll;
