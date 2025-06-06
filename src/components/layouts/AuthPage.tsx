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
import Border from "./Border";

// type authpages = "signin" | "signup" | "forgetpassword";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<authpages>("signin");

  return (
    <Border
      variant="offset-bottom-right"
      size="medium"
      className="shadow-foreground"
    >
      <Card className="  gradient  text-foreground  border-0 rounded-[5px]">
        <CardHeader className="space-y-1 pb-2 ">
          <Tabs
            defaultValue="signin"
            value={activeTab}
            onValueChange={(value: string) => setActiveTab(value as authpages)}
          >
            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger value="signin" className="fadeAnimation">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="fadeAnimation">
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
    </Border>
  );
};

export default AuthPage;
