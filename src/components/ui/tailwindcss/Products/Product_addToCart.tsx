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
  const localCartItem = useSelector(
    (state: RootState) => state.cart.localCartItems
  );
  if (localCartItem.length) {
    console.log(localCartItem[0].quantity);
  }

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        className="flex-1"
        variant={"gradient"}
        onClick={() => {
          if (currentCartItem) {
            console.log(currentCartItem?.quantity);
            dispatch(addToLocalCartItem(currentCartItem));
          }
        }}
      >
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
      <Button className="flex-1" variant={"gradient"}>
        <Zap className="mr-2 h-5 w-5" /> Buy Now
      </Button>
    </div>
  );
};

export default Product_addToCart;
