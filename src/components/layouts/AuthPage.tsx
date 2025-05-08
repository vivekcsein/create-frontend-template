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
import Auth_signup from "../ui/tailwindcss/Auth/Auth_signup";
import Auth_signin from "../ui/tailwindcss/Auth/Auth_signin";
import Auth_sigupv2 from "../ui/tailwindcss/Auth/Auth_sigupv2";

type authpages = "signin" | "signup" | "forgerpassword";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<authpages>("signin");

  return (
    <Card className="w-full ">
      <CardHeader className="space-y-1 pb-2">
        <Tabs
          defaultValue="signin"
          value={activeTab}
          onValueChange={(value: string) => setActiveTab(value as authpages)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <CardContent className="pt-4">
              <Auth_signin>
                {/* <TabsTrigger value="forgetpassword">Sign Up</TabsTrigger> */}
              </Auth_signin>
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
