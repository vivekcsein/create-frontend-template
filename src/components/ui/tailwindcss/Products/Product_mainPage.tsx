import { ProductDetails } from "@/types/products";
import React from "react";
import Product_Gallery from "./Product_Gallery";
import Wrapper_productpage from "@/components/wrappers/Wrapper_productpage";

interface Product_mainPage_Props {
  item: ProductDetails;
}
const Product_mainPage = ({ item }: Product_mainPage_Props) => {
  return (
    <Wrapper_productpage>
      <div className="flex flex-col lg:flex-row">
        <Product_Gallery />
      </div>
      <div>{item.productName}</div>
    </Wrapper_productpage>
  );
};

export default Product_mainPage;
