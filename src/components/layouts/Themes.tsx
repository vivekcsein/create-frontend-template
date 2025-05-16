"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/shadcn/navigation-menu";

const Themes = () => {
  const { setTheme } = useTheme();

  return (
    <NavigationMenu className="center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="border-0" icon={false}>
            <div className="flex justify-center items-center">
              <div className="relative h-8 w-8 rounded-full border-none text-background cursor-pointer">
                {/* Sun Icon */}
                <Sun className="absolute inset-0 m-auto h-4 w-4 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
                {/* Moon Icon */}
                <Moon className="absolute inset-0 m-auto h-4 w-4 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
              </div>
            </div>
          </NavigationMenuTrigger>
          <ul>
            <NavigationMenuContent className="flex flex-col gap-5 bg-background py-2 px-4">
              <NavigationMenuItem
                onClick={() => setTheme("light")}
                className="coolLink"
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
};

export default Themes;
