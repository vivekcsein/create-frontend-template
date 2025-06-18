import { ProductDetails } from "@/types/products";
import React from "react";
import Product_Gallery from "./Product_Gallery";
import Wrapper_productpage from "@/components/wrappers/Wrapper_productpage";
import Product_info from "./Product_info";
import Wrapper_animatedCard from "@/components/wrappers/Wrapper_animatedCard";

interface Product_mainPage_Props {
  item: ProductDetails;
}
const Product_mainPage = ({ item }: Product_mainPage_Props) => {
  return (
    <Wrapper_productpage>
      <Wrapper_animatedCard variant="gradientVibes" width={0}>
        <div className="flex flex-col lg:flex-row bg-background">
          <Product_Gallery />
          <div className="mt-6 lg:mt-0 lg:p-6 w-full lg:w-3/5">
            <Product_info item={item} />
          </div>
        </div>
      </Wrapper_animatedCard>
    </Wrapper_productpage>
  );
};

export default Product_mainPage;
