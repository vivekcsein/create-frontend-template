"use client";
import React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/shadcn/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn/tabs";
import Auth_sigupv2 from "../ui/tailwindcss/Auth/Auth_sigupv2";
import Auth_signinv2 from "../ui/tailwindcss/Auth/Auth_signinv2";

type authpages = "signin" | "signup" | "forgerpassword";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<authpages>("signin");

  return (
    <Card className="w-full background_blur gradient">
      <CardHeader className="space-y-1 pb-2">
        <Tabs
          defaultValue="signin"
          value={activeTab}
          onValueChange={(value: string) => setActiveTab(value as authpages)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin" className="cursor-pointer ">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="signup" className="cursor-pointer gradient red">
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <CardContent className="pt-4">
              <Auth_signinv2>
                {/* <TabsTrigger value="forgetpassword">Sign Up</TabsTrigger> */}
              </Auth_signinv2>
            </CardContent>
          </TabsContent>
          <TabsContent value="signup">
            <CardContent className="pt-4">
              <Auth_sigupv2 />
            </CardContent>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  );
};

export default AuthPage;
