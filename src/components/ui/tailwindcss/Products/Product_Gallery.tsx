"use client";
import React, { useState } from "react";
import { dummyProductImagesList } from "@/libs/configs/config.images";
import Product_overviewImagesList from "./Product_overviewImagesList";
import Product_mainImage from "./Product_mainImage";

const Product_Gallery = () => {
  const [currentImage, setCurrentImage] = useState(
    parseInt(dummyProductImagesList[0].uid)
  );
  const [isHoveringThumbnails, setIsHoveringThumbnails] = useState(false);
  if (isHoveringThumbnails) {
  }
  return (
    <section className="lg:w-2/5 *:w-full">
      <Product_mainImage imageDetails={dummyProductImagesList[currentImage]}>
        <div className="lg:w-20">
          <Product_overviewImagesList
            currentOverview={currentImage}
            overviewData={dummyProductImagesList}
            setCurrentOverview={setCurrentImage}
            setIsHoveringThumbnails={setIsHoveringThumbnails}
          />
        </div>
      </Product_mainImage>
    </section>
  );
};

export default Product_Gallery;
