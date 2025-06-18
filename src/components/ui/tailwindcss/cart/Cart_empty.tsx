import { ArrowLeft, ShoppingBag } from "lucide-react";
import React from "react";
import Link from "next/link";

const Cart_empty = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center opacity-20">
            <ShoppingBag className="w-16 h-16" />
          </div>
          <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-pulse">
            <ShoppingBag className="w-16 h-16 text-foreground" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-muted mb-8 max-w-md">
          Looks like you haven&apost added any futuristic items to your cart
          yet. Explore our collection of next-gen products!
        </p>
        <Link
          href={"/search"}
          className="bg-gradient-to-r text-background from-primary-foreground to-secondary-foreground hover:from-primary hover:to-secondary px-8 py-3  flex rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart_empty;
