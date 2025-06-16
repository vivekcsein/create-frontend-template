import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../shadcn/tabs";
import { specificationDetails } from "@/types/products";

interface Product_featuresProps {
  category: string[];
  details: specificationDetails;
}
const Product_features = ({ category, details }: Product_featuresProps) => {
  console.log(category);

  const detailsArray = [
    details.colors
      ? { featureName: "colors", featureValues: details.colors }
      : undefined,
    details.material
      ? { featureName: "material", featureValues: details.material }
      : undefined,

    details.pages
      ? { featureName: "pages", featureValues: details.pages }
      : undefined,

    details.sizes
      ? { featureName: "sizes", featureValues: details.sizes }
      : undefined,
  ].filter((item) => item !== undefined);

  return (
    <Tabs defaultValue={detailsArray[0].featureName} className="w-full">
      <TabsList className="grid grid-cols-3 bg-gray-900">
        {detailsArray.map((item, index) => (
          <TabsTrigger
            key={index}
            value={item.featureName.toString()}
            className="data-[state=active]:bg-purple-900/50"
          >
            {item.featureName.toString()}
          </TabsTrigger>
        ))}
      </TabsList>

      {detailsArray.map((item, index) => (
        <TabsContent
          key={index}
          value={item.featureName}
          className="border border-gray-800 rounded-b-lg p-4 bg-gray-900/50"
        >
          <h1>{item.featureValues}</h1>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Product_features;
