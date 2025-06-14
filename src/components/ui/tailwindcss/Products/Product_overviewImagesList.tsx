import React from "react";
import Product_overviewImage from "./Product_overviewImage";
interface ImageDetails {
  uid: string;
  src: string;
  alt: string;
}

interface Product_overviewImages_Props {
  overviewData: Array<ImageDetails>;
  currentOverview: number;
  setCurrentOverview: React.Dispatch<React.SetStateAction<number>>;
  setIsHoveringThumbnails: React.Dispatch<React.SetStateAction<boolean>>;
}

const Product_overviewImagesList = ({
  overviewData,
  currentOverview,
  setCurrentOverview,
  setIsHoveringThumbnails,
}: Product_overviewImages_Props) => {
  // const onclick = (currentImage: string) => {
  //   setCurrentOverview(parseInt(currentImage));
  // };
  return (
    <div
      className="flex lg:flex-col flex-row gap-2 p-2  lg:h-[420px] overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      onMouseEnter={() => setIsHoveringThumbnails(true)}
      onMouseLeave={() => setIsHoveringThumbnails(false)}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#d1d5db #f3f4f6",
      }}
    >
      {overviewData.map((image, index) => (
        <div
          key={index}
          className={`
                      relative flex-shrink-0 cursor-pointer transition-all duration-200 rounded-lg overflow-hidden
                    w-1/8 lg:w-full
                      ${
                        currentOverview === index
                          ? "border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.7)]"
                          : "border-gray-700 hover:border-purple-500"
                      }
          `}
          onMouseEnter={() => setCurrentOverview(index)}
        >
          <Product_overviewImage imageDetails={image} />
        </div>
      ))}
    </div>
  );
};

export default Product_overviewImagesList;
