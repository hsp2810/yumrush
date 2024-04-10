import { Dish } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
  dishDetails: Dish;
  quantity: number;
  dishTotalPrice: number;
  customizationMsg: string;
}

interface CartContextType {
  cart: CartItem[];
  addDish: (newDish: Dish) => void;
  removeDish: (existingDish: Dish) => void;
  updateQuantity: (dish: Dish, oldQuantity: number, action: string) => void;
  clearCart: () => void;
  totalCartValue: number;
  setCustomizationMsg: (cartItem: CartItem, message: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCartContext(): CartContextType {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(
      "useObjectArrayContext must be used within an ObjectArrayContext.Provider"
    );
  }
  return context;
}

export function CartArrayProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalCartValue, setTotalCartValue] = useState<number>(0);

  useEffect(() => {
    const savedCart = loadCartFromStorage();
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    if (!cart || cart.length !== 0) {
      let price: number = 0;
      cart.forEach((cartItem) => {
        price = price + cartItem.dishTotalPrice;
      });
      setTotalCartValue(price);
      saveCartToStorage(cart, totalCartValue);
    }
  }, [cart]);

  const loadCartFromStorage = (): CartItem[] => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };

  const saveCartToStorage = (
    updatedCart: CartItem[],
    totalCartValue: number
  ): void => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("cartValue", JSON.stringify(totalCartValue));
  };

  const addDish = (newDish: Dish) => {
    const item: CartItem | undefined = cart.find((cartItem) => {
      return cartItem.dishDetails.name.toString() === newDish.name.toString();
    });

    if (item === undefined) {
      setCart((prevCart) => [
        ...prevCart,
        {
          dishDetails: newDish,
          dishTotalPrice: newDish.price,
          quantity: 1,
          customizationMsg: "",
        },
      ]);
    } else {
      updateQuantity(item.dishDetails, item.quantity, "add");
    }
  };

  const removeDish = (existingDish: Dish) => {
    const filteredCart = cart.filter((cartItem) => {
      return cartItem.dishDetails !== existingDish;
    });
    console.log("Filtered cart: ", filteredCart);

    setCart(filteredCart);
    saveCartToStorage(filteredCart, totalCartValue);
  };

  const updateQuantity = (dish: Dish, oldQuantity: number, action: string) => {
    const updatedCart = [...cart];
    const cartItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.dishDetails === dish
    );

    if (cartItemIndex !== -1) {
      const updatedCartItem = { ...updatedCart[cartItemIndex] };

      if (action === "add") {
        updatedCartItem.quantity = oldQuantity + 1;
      } else if (action === "remove" && oldQuantity > 1) {
        updatedCartItem.quantity = oldQuantity - 1;
      }

      updatedCartItem.dishTotalPrice =
        updatedCartItem.quantity * updatedCartItem.dishDetails.price;

      updatedCart[cartItemIndex] = updatedCartItem;

      setCart(updatedCart);
    }
  };

  const setCustomizationMsg = (cartItem: CartItem, message: string) => {
    const updatedCart = [...cart]; // make copy of array
    const cartItemIndex = updatedCart.findIndex((item) => item === cartItem); //find the item index

    if (cartItemIndex !== -1) {
      const updatedCartItem = { ...updatedCart[cartItemIndex] }; //get the item
      updatedCartItem.customizationMsg = message; //make changes
      updatedCart[cartItemIndex] = updatedCartItem; //update
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addDish,
        removeDish,
        updateQuantity,
        clearCart,
        totalCartValue,
        setCustomizationMsg,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
