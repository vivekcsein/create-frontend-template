import React from "react";
import Image from "next/image";

interface Product_overviewImageProps {
  imageDetails: {
    uid: string;
    src: string;
    alt: string;
  };
}

const Product_overviewImage = ({
  imageDetails,
}: Product_overviewImageProps) => {
  const { src, alt } = imageDetails;
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={128}
      height={128}
      className="w-full h-auto lg:h-auto object-cover aspect-square cursor-pointer"
      loading="lazy"
    />
  );
};

export default Product_overviewImage;
