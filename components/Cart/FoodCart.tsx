import React from "react";
import CartCard from "./CartCard";
import { useCartContext } from "@/context/CartContext";
import { MdRemoveShoppingCart } from "react-icons/md";
import Link from "next/link";

function FoodCart() {
  const { cart, clearCart, totalCartValue } = useCartContext();

  return (
    <div
      className={`${
        cart.length === 0 ? "hidden " : ""
      } relative flex-[25] bg-orange-50 mr-3 mt-3 rounded-lg pt-[2rem] px-5 h-[78vh] overflow-y-scroll`}
    >
      <div className='flex items-center justify-between mb-4 mx-2'>
        <h2 className='text-2xl font-semibold'>Cart</h2>
        <span onClick={() => clearCart()}>
          <MdRemoveShoppingCart
            className={"text-xl text-red-500 cursor-pointer"}
          />
        </span>
      </div>
      {cart && cart.length === 0 ? (
        <p className='text-gray-600 text-center mt-[3rem]'>Cart is empty</p>
      ) : (
        cart.map((cartItem, index) => (
          <CartCard key={index} cartItem={cartItem} />
        ))
      )}

      {cart.length > 0 && (
        <Link
          href={"/placeorder"}
          className='my-5 text-white block text-center text-base bg-orange-500 py-2 px-7 w-full rounded-full hover:bg-orange-600'
        >
          Total ${totalCartValue} | View full order
        </Link>
      )}
    </div>
  );
}

export default FoodCart;
