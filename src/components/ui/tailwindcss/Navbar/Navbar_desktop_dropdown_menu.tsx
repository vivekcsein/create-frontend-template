import Navbar_desktop_link from "./Navbar_desktop_link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../shadcn/navigation-menu";
import Border from "@/components/layouts/Border";

const Navbar_desktop_dropdown_menu = ({
  dropdownData,
  dropdownLabel,
}: {
  dropdownData: dropdownData;
  dropdownLabel: string;
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="border-0 text-foreground">
            {dropdownLabel}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Border
              variant="offset-bottom-right"
              size="small"
              className="flex flex-col gap-5 bg-background py-2 px-4"
            >
              {dropdownData.map((item) => {
                return (
                  <Navbar_desktop_link
                    href={item.href}
                    key={item.id}
                    className="coolLink"
                  >
                    {item.label}
                  </Navbar_desktop_link>
                );
              })}
            </Border>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar_desktop_dropdown_menu;
