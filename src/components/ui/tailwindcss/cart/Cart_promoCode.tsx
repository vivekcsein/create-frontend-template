import React from "react";
import { Button } from "../../shadcn/button";
import { Input } from "../../shadcn/input";
import { Tag, Zap } from "lucide-react";

interface Cart_promoCode_Props {
  isLoading: boolean;
  isPromoApplied: boolean;
  promoCode: string;
  setPromoCode: React.Dispatch<React.SetStateAction<string>>;
  applyPromoCode: () => void;
}
const Cart_promoCode = ({
  isLoading,
  isPromoApplied,
  promoCode,
  setPromoCode,
  applyPromoCode,
}: Cart_promoCode_Props) => {
  return (
    <div>
      <div className="bg-background backdrop-blur-sm border border-border rounded-2xl p-6">
        <h6 className="text-lg font-semibold  mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-secondary" />
          Promo Code
        </h6>
        <div className="flex space-x-3">
          <Input
            placeholder="Enter promo code (try: FUTURE20)"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="bg-background border-border/50   focus:border-primary"
          />
          <Button
            variant={"gradient"}
            onClick={applyPromoCode}
            disabled={isLoading || !promoCode}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Apply"
            )}
          </Button>
        </div>
        {isPromoApplied && (
          <div className="mt-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-green-400 text-sm flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Promo code applied! You saved 20%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart_promoCode;
