"use client";
import React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/shadcn/card";
import Auth_signin from "../ui/tailwindcss/Auth/Auth_signin";
import Auth_signup from "../ui/tailwindcss/Auth/Auth_signup";
import Auth_forgetpassword from "../ui/tailwindcss/Auth/Auth_forgetpassword";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn/tabs";
import Auth_signupOtp from "../ui/tailwindcss/Auth/Auth_signupOtp";

// type authpages = "signin" | "signup" | "forgetpassword";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<authpages>("signin");

  return (
    <Card className="w-full background_blur gradient text-foreground">
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
            <TabsTrigger value="signup" className="cursor-pointer">
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <CardContent className="pt-4">
              <Auth_signin setActiveTab={setActiveTab}></Auth_signin>
            </CardContent>
          </TabsContent>
          <TabsContent value="signup">
            <CardContent className="pt-4">
              <Auth_signup />
            </CardContent>
          </TabsContent>
          <TabsContent value="forgetpassword">
            <CardContent className="pt-4">
              <Auth_forgetpassword />
            </CardContent>
          </TabsContent>
          <TabsContent value="signupOtp">
            <CardContent className="pt-4">
              <Auth_signupOtp />
            </CardContent>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  );
};

export default AuthPage;
