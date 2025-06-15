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
    console.log("");
  }
  return (
    <section className="lg:w-2/5 *:w-full center">
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

{
  /* <div className="lg:w-2/5 w-full p-6 flex justify-center"> */
}
{
  /* <div className="relative w-full max-w-md lg:max-w-lg"> */
}
{
  /* <div className="flex flex-col-reverse lg:flex-row  justify-start">
  <div className="lg:w-20">
    <Product_overviewImagesList
      currentOverview={currentImage}
      overviewData={dummyProductImagesList}
      setCurrentOverview={setCurrentImage}
      setIsHoveringThumbnails={setIsHoveringThumbnails}
    />
  </div> */
}
// <Product_mainImage imageDetails={dummyProductImagesList[currentImage]} />
{
  /* </div>  
        </div> */
}
// </div>;
