import { vivekcse_Avatar } from "@/libs/configs/config.svg";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/shadcn/navigation-menu";

const Auth_userInfo = () => {
  return (
    <div>
      <NavigationMenu className="center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border-0" icon={false}>
              <Avatar>
                <AvatarImage src={vivekcse_Avatar} alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </NavigationMenuTrigger>
            <ul>
              <NavigationMenuContent className="flex  flex-col gap-5 bg-background py-2 px-4 text-white">
                <NavigationMenuItem
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="coolLink"
                >
                  Settings
                </NavigationMenuItem>
                <NavigationMenuItem
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="coolLink"
                >
                  Logout
                </NavigationMenuItem>
              </NavigationMenuContent>
            </ul>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Auth_userInfo;
