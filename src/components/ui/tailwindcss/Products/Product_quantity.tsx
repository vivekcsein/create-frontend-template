"use client";
import { RootState } from "@/libs/redux/store";
import { Minus, Plus } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCartItem } from "@/libs/redux/features/cartSlice";

interface Product_quantityProps {
  info: {
    uid: number;
    productName: string;
    currentPrice: number;
    availableQuantity?: number;
  };
}

const Product_quantity = ({
  info: { uid, productName, currentPrice, availableQuantity },
}: Product_quantityProps) => {
  const currentCartItem = useSelector(
    (state: RootState) => state.cart.currentCartItem
  );
  const dispatch = useDispatch();
  const limitedQuanity = availableQuantity ? availableQuantity : 100;

  useEffect(() => {
    dispatch(
      setCartItem({
        id: uid.toString(),
        name: productName,
        price: currentPrice,
        quantity: 1,
        maxQuantity: limitedQuanity,
      })
    );

    return () => {
      dispatch(setCartItem(null));
    };
  }, [dispatch, uid, productName, currentPrice, limitedQuanity]);

  return (
    <>
      {availableQuantity == 0 ? (
        <p className="text-red-500">Out of stock</p>
      ) : (
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-700 rounded-lg">
            <button
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
              className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-2 text-white">
              {currentCartItem?.quantity}
            </span>
            <button
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
              className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <span className="text-gray-400">
            {availableQuantity
              ? `Only ${availableQuantity} left in stock`
              : "stock availabe"}
          </span>
        </div>
      )}
    </>
  );
};

export default Product_quantity;
