import { ProductDetails } from "@/types/products";
import React from "react";
import { Separator } from "../../shadcn/separator";
import Product_features from "./Product_features";
import Product_quantity from "./Product_quantity";
import Product_rating from "./Product_rating";
import Product_addToCart from "./Product_addToCart";
import Promotion_forFastdelivery from "../Usefull/Promotion_forFastdelivery";
import Wrapper_animatedCard from "@/components/wrappers/Wrapper_animatedCard";

interface Product_infoProps {
  item: ProductDetails;
}
const Product_info = ({ item }: Product_infoProps) => {
  const {
    uid,
    Category,
    isTrending,
    productName,
    currentPrice,
    availableQuantity,
    details,
    ...props
  } = item;

  const discountoffer = () => {
    return Math.round(
      ((props.sellerPrice - currentPrice) * 100) / props.sellerPrice
    );
  };
  return (
    <div className="space-y-6">
      {isTrending ? (
        <span className="inline-block text-white px-3 py-1 bg-gradient-to-r from-secondary to-primary rounded-full mb-2">
          trending now
        </span>
      ) : null}

      <h2 className="textGradient">{productName ? productName : ""}</h2>

      <div className="space-y-4">
        <Product_rating
          currentRating={props.currentRating}
          totalReviews={props.totalReview}
        />
        <div
          className="text-foreground"
          style={{
            fontSize: `${props.description.length < 100 ? "20px" : "14px"}`,
          }}
        >
          {props.description
            ? props.description
            : "product description not found"}
        </div>
      </div>

      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-foreground">
          ${currentPrice}
        </span>
        <span className="ml-2 text-lg line-through text-gray-400">
          ${props.sellerPrice}
        </span>
        <span className="ml-2 text-sm px-2 py-1 bg-cyan-500/20 text-secondary font-extrabold rounded">
          {discountoffer()}% OFF
        </span>
      </div>
      <Product_quantity
        info={{
          uid: uid.toString(),
          productName,
          quantity: 0,
          currentPrice: currentPrice,
          maxQuantity: availableQuantity ? availableQuantity : 100,
          ...props,
        }}
      />
      <Product_addToCart />
      <Separator className="border-gray-700" />
      <Product_features category={Category} details={details} />
      <Wrapper_animatedCard variant="gradientVibes" width={4}>
        <Promotion_forFastdelivery />
      </Wrapper_animatedCard>
    </div>
  );
};

export default Product_info;
