import { ProductDetails } from "@/types/products";
import React from "react";
import Product_Gallery from "./Product_Gallery";
import Wrapper_productpage from "@/components/wrappers/Wrapper_productpage";
import Product_info from "./Product_info";

interface Product_mainPage_Props {
  item: ProductDetails;
}
const Product_mainPage = ({ item }: Product_mainPage_Props) => {
  return (
    <Wrapper_productpage>
      <div className="flex flex-col lg:flex-row">
        <Product_Gallery />
        <div className="mt-6 lg:mt-0 lg:p-6 w-full lg:w-3/5">
          <Product_info item={item} />
        </div>
      </div>
    </Wrapper_productpage>
  );
};

export default Product_mainPage;
