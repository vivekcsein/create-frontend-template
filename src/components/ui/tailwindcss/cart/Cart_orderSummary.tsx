import { ArrowRight, Sparkles, Zap } from "lucide-react";
import React from "react";
import { Button } from "../../shadcn/button";

interface Cart_orderSummaryProps {
  discount: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}
const Cart_orderSummary = ({
  discount,
  subtotal,
  tax,
  shipping,
  total,
}: Cart_orderSummaryProps) => {
  return (

      <div className="bg-background  backdrop-blur-sm p-6 sticky top-8">
        <h3 className="text-xl font-semibold  mb-6 flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-primary" />
          Order Summary
        </h3>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between ">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-green-400">
              <span>Discount (20%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between ">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="flex justify-between ">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
          </div>

          {shipping === 0 && (
            <div className="text-xs text-green-400 flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              Free shipping on orders over $1000!
            </div>
          )}

          <div className="border-t border-foreground/50 pt-4">
            <div className="flex justify-between text-xl font-bold ">
              <span>Total</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button className="w-full bg-gradient-to-r from-primary-foreground to-secondary-foreground hover:from-primary hover:to-secondary text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Proceed to Checkout
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Security Badge */}
        <div className="mt-6 p-4 bg-foreground  rounded-lg border ">
          <div className="flex items-center justify-center space-x-2 text-background text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Secure Checkout</span>
          </div>
          <p className="text-xs text-border text-center mt-1">
            256-bit SSL encryption
          </p>
        </div>
      </div>
  );
};

export default Cart_orderSummary;
