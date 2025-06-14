import { ProductDetails } from "@/types/products";
import React from "react";
import { Card } from "../../shadcn/card";

interface Product_searchList_props {
  itemList: Array<ProductDetails>;
}
const Product_searchList = ({ itemList }: Product_searchList_props) => {
  return (
    <section className="w-1/5 flex flex-row justify-evenly gap-2">
      {itemList?.map((item) => {
        return (
          <Card key={item.uid}>
            <h5>{item.productName}</h5>
          </Card>
        );
      })}
    </section>
  );
};

export default Product_searchList;
