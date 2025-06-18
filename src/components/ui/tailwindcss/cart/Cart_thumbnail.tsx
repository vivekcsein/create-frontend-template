import React from "react";
import Image from "next/image";

interface Cart_thumbnail_Props {
  image: string;
  alt: string;
}

const Cart_thumbnail = ({ image, alt }: Cart_thumbnail_Props) => {
  return (
    <div className="relative">
      <Image
        src={image || "/placeholder.svg"}
        alt={alt}
        width={80}
        height={80}
        className="rounded-lg object-cover"
      />
    </div>
  );
};

export default Cart_thumbnail;
