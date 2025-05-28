"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../../../shadcn/dialog";
import { Button } from "../../../shadcn/button";
import AuthPage from "@/components/layouts/AuthPage";
import { SheetTitle } from "../../../shadcn/sheet";
const Navbar_desktop_auth = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogTrigger asChild className="border-none cursor-pointer font">
        <Button
          variant="empty"
          className="textFont text-background dark:text-foreground  bg-destructive hover:bg-primary h-6 border-4 border-red-400 "
        >
          Signin
        </Button>
      </DialogTrigger>
      <DialogContent className=" scale-75 p-0 ">
        <AuthPage />
      </DialogContent>
      <SheetTitle className="hidden"></SheetTitle>
    </Dialog>
  );
};

export default Navbar_desktop_auth;
