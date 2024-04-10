import { Dish } from "@/types";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CartItem, useCartContext } from "@/context/CartContext";

interface PageProps {
  dish: Dish;
  quantity: number;
  customizationMsg: string;
  item: CartItem;
}

const OrderDishCard: React.FC<PageProps> = ({
  dish,
  quantity,
  customizationMsg,
  item,
}) => {
  const { setCustomizationMsg } = useCartContext();
  const [comment, setComment] = useState("");
  const [dishTotal, setDishTotal] = useState(0);

  useEffect(() => {
    const dishTotal = dish.price * quantity;
    setDishTotal(dishTotal);
  }, [quantity]);

  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
  };

  const formatIngredient = (ingredient: string): string => {
    if (ingredient.includes(" ")) {
      return ingredient
        .split(" ")
        .map((ingredient) => {
          return firstCharToUpp(ingredient);
        })
        .join(" ");
    }
    return firstCharToUpp(ingredient);
  };

  const firstCharToUpp = (word: string): string => {
    return word.charAt(0).toUpperCase().concat(word.substring(1));
  };

  return (
    <div className='h-fit overflow-hidden bg-orange-100 p-4 rounded-lg shadow-md flex flex-col justify-between w-full'>
      <div className='flex items-center'>
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
            Quantity: {quantity}
          </p>
          <p className='text-orange-500 font-semibold mt-2'>
            Price: ${dishTotal}
          </p>
        </div>
      </div>
      <div className='mt-4'>
        <details className=''>
          <summary className='text-orange-500 cursor-pointer transition-colors duration-300 hover:text-orange-700'>
            Ingredients
          </summary>
          <div className='mt-1 flex'>
            {dish?.ingredients?.map((ingredient, index) => (
              <p key={index} className='text-gray-600 mx-1'>
                {formatIngredient(ingredient)}
              </p>
            ))}
          </div>
        </details>
        <details className='mt-4'>
          <summary className='text-orange-500 cursor-pointer transition-all duration-300 hover:text-orange-700'>
            Allergies
          </summary>
          {!dish.caution || dish.caution?.length === 0 ? (
            <p className='text-sm text-gray-600'>No allergies found</p>
          ) : (
            <div className='mt-2 flex text-gray-600'>
              May contain
              {dish?.caution?.map((ingredient, index) => (
                <p key={index} className='text-gray-600 ml-1'>
                  {formatIngredient(ingredient)}
                </p>
              ))}
            </div>
          )}
        </details>
        <details className='mt-4'>
          <summary className='text-orange-500 cursor-pointer transition-colors duration-300 hover:text-orange-700'>
            Add a comment/customization about the dish
          </summary>
          <div className='mt-4 flex text-gray-600'>
            <textarea
              id={`comment-${dish.name}`}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none bg-gray-100 text-gray-600 placeholder-gray-400 hover:border-gray-400 focus:border-gray-400 resize-none h-[45px]'
              placeholder='No pickles and light on the sauce'
              value={comment}
              onChange={handleCommentChange}
            />

            <button
              className='ml-1 bg-orange-500 hover:bg-orange-600 text-white font-medium px-3 rounded-md transition duration-300 shadow-md'
              onClick={() => {
                setCustomizationMsg(item, comment);
                setComment("");
              }}
            >
              Add
            </button>
          </div>
          <p className='text-gray-600 mt-3'>
            {!customizationMsg || customizationMsg.length === 0 ? (
              <span className='font-semibold'>No customization mentioned</span>
            ) : (
              <p className=''>
                <span className='font-semibold'>Current Note</span>:{" "}
                {customizationMsg}
              </p>
            )}
          </p>
        </details>
      </div>
    </div>
  );
};

export default OrderDishCard;
