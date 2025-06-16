import React from "react";

interface Product_ratingProps {
  currentRating: number;
  totalReviews: number;
}
const Product_rating = ({
  currentRating,
  totalReviews,
}: Product_ratingProps) => {
  return (
    <div>
      <div className="flex items-center mt-2 space-x-1">
        {/* <Product_starRating currentRating={currentRating} /> */}
        <span className="ml-2 text-gray-300">in ({totalReviews} reviews)</span>
      </div>
    </div>
  );
};

export default Product_rating;
