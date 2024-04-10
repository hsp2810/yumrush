import { CartItem, useCartContext } from "@/context/CartContext";
import { Dish } from "@/types";
import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const CartCard = ({ cartItem }: { cartItem: CartItem }) => {
  const { dishDetails: dish, quantity } = cartItem;
  const { removeDish, updateQuantity } = useCartContext();
  const [updatedPrice, setUpdatedPrice] = useState(dish.price | 0);

  useEffect(() => {
    const updatedPrice = dish.price * quantity;
    setUpdatedPrice(updatedPrice);
  }, [quantity]);

  return (
    <div className='p-2 mb-2 flex items-center bg-orange-200 rounded-lg'>
      <img
        src={dish.url}
        alt={dish.name}
        className='w-16 h-16 mr-4 rounded-lg'
      />
      <div>
        <p>{dish.name}</p>
        <p>Price: ${updatedPrice}</p>
        <div className='flex items-center mt-2'>
          <button
            className='p-1 rounded-full bg-white'
            onClick={() => updateQuantity(dish, quantity, "add")}
          >
            <AiOutlinePlus />
          </button>
          <span className='mx-2'>{cartItem.quantity}</span>
          <button
            className='p-1 rounded-full bg-white'
            onClick={() => updateQuantity(dish, quantity, "remove")}
          >
            <AiOutlineMinus />
          </button>
        </div>
      </div>
      <button
        className='ml-auto px-2 mr-2 py-1 bg-red-500  text-white rounded-full'
        onClick={() => removeDish(dish)}
      >
        <RxCross2 />
      </button>
    </div>
  );
};

export default CartCard;
