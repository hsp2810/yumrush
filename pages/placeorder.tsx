import OrderDishCard from "@/components/Cart/OrderDishCard";
import { useCartContext } from "@/context/CartContext";
import React from "react";
import { getServerSession } from "next-auth/next";
import { useRouter } from "next/router";
import { authOptions } from "./api/auth/[...nextauth]";

export default function PlaceOrder() {
  const router = useRouter();
  const { cart } = useCartContext();

  return (
    <main>
      <button
        onClick={() => router.back()}
        className='bg-slate-200 px-4 py-2 rounded-lg mt-5 ml-5'
      >
        Back to Cart
      </button>
      <h1 className='my-5 text-2xl text-center'>Cart Preview</h1>
      <div className='grid grid-cols-2 mx-5 gap-5'>
        {cart.map((cartItem, index) => {
          return (
            <OrderDishCard
              key={index}
              dish={cartItem.dishDetails}
              quantity={cartItem.quantity}
              customizationMsg={cartItem.customizationMsg}
              item={cartItem}
            />
          );
        })}
      </div>
      <div className='my-[3rem] w-full'>
        <button className='w-1/3 block py-5 bg-orange-500 hover:bg-orange-600 text-white font-medium text-xl px-3 rounded-full mx-auto transition duration-300 shadow-md'>
          Pay & Order
        </button>
      </div>
    </main>
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
