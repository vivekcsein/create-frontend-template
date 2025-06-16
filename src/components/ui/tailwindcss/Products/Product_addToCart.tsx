"use client";
import React from "react";
import { Button } from "../../shadcn/button";
import { ShoppingCart, Zap } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToLocalCartItem } from "@/libs/redux/features/cartSlice";
import { RootState } from "@/libs/redux/store";

const Product_addToCart = () => {
  const currentCartItem = useSelector(
    (state: RootState) => state.cart.currentCartItem
  );

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        className="flex-1 cursor-pointer  lg:max-w-[200px] bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-medium"
        onClick={() => {
          if (currentCartItem) {
            dispatch(addToLocalCartItem(currentCartItem));
          }
        }}
      >
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
      <Button className="flex-1 cursor-pointer lg:max-w-[200px] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium">
        <Zap className="mr-2 h-5 w-5" /> Buy Now
      </Button>
    </div>
  );
};

export default Product_addToCart;
