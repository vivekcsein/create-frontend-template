import { ProductDetails } from "@/types/products";
import React from "react";
import { Separator } from "../../shadcn/separator";
import Product_features from "./Product_features";
import Product_quantity from "./Product_quantity";
import Product_rating from "./Product_rating";
import Product_addToCart from "./Product_addToCart";
import Promotion_forFastdelivery from "../Usefull/Promotion_forFastdelivery";

interface Product_infoProps {
  item: ProductDetails;
}
const Product_info = ({ item }: Product_infoProps) => {
  const {
    uid,
    Category,
    isTrending,
    productName,
    description,
    currentPrice,
    sellerPrice,
    currentRating,
    totalReview,
    availableQuantity,
    details,
  } = item;

  const discountoffer = () => {
    return Math.round(((sellerPrice - currentPrice) * 100) / sellerPrice);
  };
  return (
    <div className="space-y-6 text-white">
      {isTrending ? (
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-secondary to-primary rounded-full mb-2">
          trending now
        </span>
      ) : null}

      <h2 className="textGradient">{productName ? productName : ""}</h2>

      <div className="space-y-4">
        <Product_rating
          currentRating={currentRating}
          totalReviews={totalReview}
        />
        <div
          className="text-gray-300"
          style={{ fontSize: `${description.length < 100 ? "20px" : "14px"}` }}
        >
          {description ? description : "product description not found"}
        </div>
      </div>

      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-white">${currentPrice}</span>
        <span className="ml-2 text-lg line-through text-gray-400">
          ${sellerPrice}
        </span>
        <span className="ml-2 text-sm px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">
          {discountoffer()}% OFF
        </span>
      </div>
      <Product_quantity
        info={{ uid, productName, currentPrice, availableQuantity }}
      />
      <Product_addToCart />
      <Separator className="border-gray-700" />
      <Product_features category={Category} details={details} />
      <Promotion_forFastdelivery />
    </div>
  );
};

export default Product_info;
