import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

const Cart_heading = () => {
  return (
    <div className=" backdrop-blur-sm pt-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href={"/"}
              className=" flex text-foreground hover:text-primary cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shopping Cart
            </h3>
          </div>
          <div className="flex items-center space-x-2 ">
            <span className="text-sm">Step 2 of 3</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-muted rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart_heading;
