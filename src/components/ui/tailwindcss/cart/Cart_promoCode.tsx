"use client";
import React, { useRef } from "react";
import { Button } from "../../shadcn/button";
import { Input } from "../../shadcn/input";
import { Tag, Zap } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/libs/redux/store";
import {
  applyPromoCode,
  setPromoCodeStatus,
} from "@/libs/redux/features/cartSlice";
const Cart_promoCode = () => {
  const promoCode = useSelector((state: RootState) => state.cart.promoCode);
  const PromoCodeInput = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const applyPromo = () => {
    const currentPromoCode = PromoCodeInput?.current as HTMLInputElement;
    const code = currentPromoCode.value as string;
    dispatch(applyPromoCode(code));
  };

  return (
    <div>
      <div className="bg-background backdrop-blur-sm border border-border rounded-xl p-4">
        <h6 className="text-lg font-semibold  mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-secondary" />
          Promo Code
        </h6>
        <div className="flex space-x-3">
          <Input
            placeholder="Enter promo code (try: FUTURE20)"
            className="bg-background border-border/50   focus:border-primary"
            ref={PromoCodeInput}
            onChange={(e) => {
              if (e.target.value.length >= 1) {
                dispatch(setPromoCodeStatus("enabled"));
              } else if (e.target.value.length <= 0) {
                dispatch(setPromoCodeStatus("idle"));
              }
            }}
            onKeyDownCapture={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                applyPromo();
              }
            }}
          />
          <Button
            variant={"gradient"}
            onClick={() => {
              applyPromo();
            }}
            disabled={promoCode.promoCodeStatus !== "enabled"}
          >
            {promoCode.promoCodeStatus === "loading" ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Apply"
            )}
          </Button>
        </div>
        {promoCode.promoCodeStatus === "applied" && (
          <div className="mt-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-green-400 text-sm flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Promo code applied! You saved 20%
            </p>
          </div>
        )}
        {promoCode.promoCodeStatus === "invalid" && (
          <div className="mt-3 p-3 bg-red-500/10 border border-green-500/30 rounded-lg">
            <p className="text-red-400 text-sm flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Invalid coupan code
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart_promoCode;
