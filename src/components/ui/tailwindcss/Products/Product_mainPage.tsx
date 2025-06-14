import { ProductDetails } from "@/types/products";
import React from "react";

interface Product_mainPage_Props {
  item: ProductDetails;
}
const Product_mainPage = ({ item }: Product_mainPage_Props) => {
  return <section>{item.description}</section>;
};

export default Product_mainPage;
