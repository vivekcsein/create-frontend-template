"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/shadcn/navigation-menu";
import Navbar_desktop_link from "../ui/tailwindcss/Navbar/Navbar_desktop_link";

const Themes = () => {
  const { setTheme } = useTheme();

  if (true) {
    return (
      <NavigationMenu className="center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border-0" icon={false}>
              <div className=" center relative h-8 w-8 rounded-full border-none  hover:text-foreground hover:bg-background cursor-pointer px-5">
                <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </div>
            </NavigationMenuTrigger>
            <ul>
              <NavigationMenuContent className="flex  flex-col gap-5 bg-background py-2 px-4 text-white">
                <NavigationMenuItem
                  onClick={() => setTheme("light")}
                  className="coolLink "
                >
                  Light
                </NavigationMenuItem>
                <NavigationMenuItem
                  onClick={() => setTheme("dark")}
                  className="coolLink"
                >
                  Dark
                </NavigationMenuItem>
                <NavigationMenuItem
                  onClick={() => setTheme("system")}
                  className="coolLink"
                >
                  System
                </NavigationMenuItem>
              </NavigationMenuContent>
            </ul>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  // return (
  //   <DropdownMenu>
  //     <DropdownMenuTrigger asChild>
  //       <Button
  //         variant="default"
  //         size="lg"
  //         className="relative h-8 w-8 rounded-full border-none hover:bg-foreground cursor-pointer px-5"
  //       >
  //         <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  //         <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  //         <span className="sr-only">Toggle theme</span>
  //       </Button>
  //     </DropdownMenuTrigger>
  //     <DropdownMenuContent align="end" className="my-4 bg-primary">
  //       <DropdownMenuItem onClick={() => setTheme("light")}>
  //         Light
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme("dark")}>
  //         Dark
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme("system")}>
  //         System
  //       </DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>
  // );
};

export default Themes;
