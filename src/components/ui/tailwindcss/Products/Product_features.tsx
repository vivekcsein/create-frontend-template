import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../shadcn/tabs";
import { specificationDetails } from "@/types/products";
import Wrapper_animatedCard from "@/components/wrappers/Wrapper_animatedCard";

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
      <TabsList className="grid grid-cols-3 bg-background/50 gap-2">
        {detailsArray.map((item, index) => (
          <TabsTrigger
            key={index}
            value={item.featureName}
            className="text-foreground data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            {item.featureName}
          </TabsTrigger>
        ))}
      </TabsList>

      <Wrapper_animatedCard variant="rainbow" width={2}>
        {detailsArray.map((item, index) => (
          <TabsContent
            key={index}
            value={item.featureName}
            className="border p-4 bg-background"
          >
            <h1>{item.featureValues}</h1>
          </TabsContent>
        ))}
      </Wrapper_animatedCard>
    </Tabs>
  );
};

export default Product_features;
