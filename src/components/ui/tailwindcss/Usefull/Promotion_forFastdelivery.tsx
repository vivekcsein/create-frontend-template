import React from "react";
import { Card } from "../../shadcn/card";
import { Zap } from "lucide-react";

const Promotion_forFastdelivery = () => {
  return (
    <Card className="bg-background border border-primary /30 p-4 shadow-[0_0_10px_rgba(149,0,255,0.2)]">
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-br from-secondary to-primary p-2 rounded-full">
          <Zap className="h-5 w-5 text-foreground" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">Fast & Free Delivery</h3>
          <p className="text-sm text-muted">
            Order now and receive within 2 business days
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Promotion_forFastdelivery;
