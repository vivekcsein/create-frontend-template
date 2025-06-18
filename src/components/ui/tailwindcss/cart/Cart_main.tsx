"use client";
import { RootState } from "@/libs/redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart_empty from "./Cart_empty";
import Cart_heading from "./Cart_heading";
import Cart_itemListing from "./Cart_itemListing";
import Cart_promoCode from "./Cart_promoCode";
import Cart_orderSummary from "./Cart_orderSummary";
import Wrapper_animatedCard from "@/components/wrappers/Wrapper_animatedCard";

const Cart_main = () => {
  const CartItems = useSelector(
    (state: RootState) => state.cart.localCartItems
  );
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const applyPromoCode = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (promoCode.toLowerCase() === "future20") {
        setIsPromoApplied(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  const subtotal = CartItems.reduce(
    (sum, item) => sum + item.currentPrice * item.quantity,
    0
  );
  const discount = isPromoApplied ? subtotal * 0.2 : 0;
  const tax = (subtotal - discount) * 0.08;
  const shipping = subtotal > 1000 ? 0 : 29.99;
  const total = subtotal - discount + tax + shipping;

  return (
    <div className="min-h-screen">
      {/* shoping cart is empty */}
      {CartItems.length == 0 ? (
        <Cart_empty />
      ) : (
        <>
          <Cart_heading />
          <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Wrapper_animatedCard width={5} variant="rainbow">
                  <Cart_itemListing />
                </Wrapper_animatedCard>

                <Cart_promoCode
                  isLoading={isLoading}
                  isPromoApplied={isPromoApplied}
                  promoCode={promoCode}
                  applyPromoCode={applyPromoCode}
                  setPromoCode={setPromoCode}
                />
              </div>
              <Wrapper_animatedCard width={5} variant="rainbow">
                <Cart_orderSummary
                  discount={discount}
                  shipping={shipping}
                  subtotal={subtotal}
                  tax={tax}
                  total={total}
                />
              </Wrapper_animatedCard>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart_main;
