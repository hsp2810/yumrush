import { EnumType } from "typescript";

type User = {
  username: string;
  name: string;
  email: string;
  password: string;
};

type Cuisine = {
  name: string;
  slug?: string;
  url?: string;
};

type Restaurant = {
  name: string;
  url: string;
  location: string;
  ratings: number;
  avgPrepTime: string;
  avgDeliveryTime: string;
  famousFor: string;
  slug: string;
  cuisines: Cuisine[];
};

type Dish = {
  name: string;
  description: string;
  type: string;
  price: number;
  url: string;
  slug: string;
  restaurant: Restaurant;
  cuisine: Cuisine;
  caution?: string[];
  ingredients?: string[];
};

export const { User, Cuisine };
