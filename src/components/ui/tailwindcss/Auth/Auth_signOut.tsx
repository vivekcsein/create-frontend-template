"use client";
import { signOut } from "@/libs/redux/features/authSlice";
import { AppDispatch } from "@/libs/redux/store";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { useDispatch } from "react-redux";

const Auth_signOut = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <NavigationMenuItem
      onClick={(e) => {
        e.preventDefault();
        dispatch(signOut());
      }}
      className="coolLink"
    >
      Logout
    </NavigationMenuItem>
  );
};

export default Auth_signOut;
