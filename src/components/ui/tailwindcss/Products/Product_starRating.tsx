import React from "react";
import SVG_helper from "../../helpers/SVG_helper";

interface Product_starRatingProps {
  currentRating: number;
}
const Product_starRating = ({ currentRating }: Product_starRatingProps) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <div className="flex">
      {stars.map((star) => (
        <span key={star}>
          <SVG_helper
            variant={"Rating"}
            size={24}
            color="gold"
            bgcolor="transparent"
            show={
              star <= currentRating
                ? 100
                : star > currentRating && star < currentRating + 1
                  ? (1 - (star - currentRating)) * 100
                  : 0
            }
          />
        </span>
      ))}
    </div>
  );
};

export default Product_starRating;
