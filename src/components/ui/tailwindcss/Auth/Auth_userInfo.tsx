import { vivekcse_Avatar } from "@/libs/configs/config.images";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/shadcn/navigation-menu";
import Auth_signOut from "./Auth_signOut";
import Link from "next/link";

const Auth_userInfo = () => {
  return (
    <div>
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border-0" icon={false}>
              <Avatar>
                <AvatarImage src={vivekcse_Avatar} alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </NavigationMenuTrigger>
            <ul>
              <NavigationMenuContent className="flex flex-col gap-5 bg-background py-2 px-4 text-white">
                <NavigationMenuItem>
                  <Link className="coolLink" href={"./dashboard"}>
                    Dashboard
                  </Link>
                </NavigationMenuItem>
                <Auth_signOut />
              </NavigationMenuContent>
            </ul>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Auth_userInfo;
