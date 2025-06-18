"use client";
import React from "react";
import { Button } from "../../shadcn/button";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import Cart_thumbnail from "./Cart_thumbnail";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store";
import {
  decreaseLocalCartItemQuantity,
  increaseLocalCartItemQuantity,
  removeLocalCartItem,
} from "@/libs/redux/features/cartSlice";

const Cart_itemListing = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cart.localCartItems
  );
  const dispatch = useDispatch();

  return (
    <div className="bg-background backdrop-blur-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h6 className="text-xl font-semibold text-foreground flex items-center">
          <ShoppingBag className="w-5 h-5 mr-2 text-primary" />
          Cart Items ({cartItems.length})
        </h6>
      </div>

      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={item.uid}
            className="group bg-background-900/50 border border-gray-700 rounded-xl p-4 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center space-x-4">
              {/* Product Image */}
              <Cart_thumbnail
                image={item.thumbImage || "/demo.svg"}
                alt={item.thumbImageAlt || "image not found"}
                key={item.uid}
              />

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.productName}
                </h5>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg font-bold text-foreground">
                    ${item.currentPrice.toFixed(2)}
                  </span>
                  {item.currentPrice && (
                    <span className="text-sm text-muted line-through">
                      ${item.sellerPrice?.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center rounded-lg border border-gray-700">
                  <Button
                    variant="empty"
                    size="sm"
                    onClick={() =>
                      dispatch(decreaseLocalCartItemQuantity(item.uid))
                    }
                    className="h-8 w-8 p-0  text-gray-400 hover:text-primary"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="w-12 text-center text-foreground font-medium">
                    {item?.quantity}
                  </span>
                  <Button
                    variant="empty"
                    size="sm"
                    onClick={() =>
                      dispatch(increaseLocalCartItemQuantity(item.uid))
                    }
                    className="h-8 w-8 p-0  text-gray-400 hover:text-primary "
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => dispatch(removeLocalCartItem(item.uid))}
                  className="h-8 w-8 p-0 text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart_itemListing;
