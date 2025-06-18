"use client";
import { RootState } from "@/libs/redux/store";
import { Minus, Plus } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCartItem } from "@/libs/redux/features/cartSlice";
import { cartItem } from "@/types/cart";
import { Button } from "../../shadcn/button";

interface Product_quantityProps {
  info: cartItem;
}

const Product_quantity = ({
  info: { uid, quantity, ...props },
}: Product_quantityProps) => {
  const currentCartItem = useSelector(
    (state: RootState) => state.cart.currentCartItem
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCartItem({
        uid: uid,
        quantity: 1,
        ...props,
      })
    );

    return () => {
      dispatch(setCartItem(null));
    };
  }, [dispatch, uid, quantity]);

  return (
    <>
      {props.maxQuantity == 0 ? (
        <p className="text-red-500">Out of stock</p>
      ) : (
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-700 rounded-lg">
            <Button
              variant={"empty"}
              onClick={() => {
                if (currentCartItem) {
                  dispatch(
                    setCartItem({
                      ...currentCartItem,
                      quantity:
                        currentCartItem?.quantity > 1
                          ? currentCartItem.quantity - 1
                          : 0,
                    })
                  );
                }
              }}
              className="h-8 w-8 p-0  text-gray-400 hover:text-primary"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-4 py-2 text-foreground">
              {currentCartItem?.quantity}
            </span>
            <Button
              variant={"empty"}
              onClick={() => {
                if (currentCartItem) {
                  dispatch(
                    setCartItem({
                      ...currentCartItem,
                      quantity:
                        currentCartItem?.quantity < currentCartItem.maxQuantity
                          ? currentCartItem.quantity + 1
                          : currentCartItem.maxQuantity,
                    })
                  );
                }
              }}
              className="h-8 w-8 p-0  text-gray-400 hover:text-primary"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <span className="text-muted">
            {props.maxQuantity != 100
              ? `Only ${props.maxQuantity} left in stock`
              : "stock availabe"}
          </span>
        </div>
      )}
    </>
  );
};

export default Product_quantity;
