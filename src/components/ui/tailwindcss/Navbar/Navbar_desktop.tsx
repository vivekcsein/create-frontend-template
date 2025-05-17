import React from "react";
import Navbar_desktop_link from "./Navbar_desktop_link";
import Navbar_desktop_dropdown_menu from "./Navbar_desktop_dropdown_menu";
import Navbar_desktop_auth from "./Navbar_desktop_auth";
import Themes from "@/components/layouts/Themes";
import Auth_userInfo from "../Auth/Auth_userInfo";

const Navbar_desktop = ({
  navbarData,
  isAuthenticated,
  dropdownData,
}: {
  navbarData: navbar;
  isAuthenticated?: boolean;
  dropdownData?: dropdownData;
}) => {
  return (
    <nav>
      <ul className="flex space-x-4 ">
        {navbarData.nav_Links.map((link) =>
          link.special && dropdownData ? (
            <li key={link.id} className="center ">
              <Navbar_desktop_dropdown_menu
                dropdownData={dropdownData}
                dropdownLabel={link.label}
              />
            </li>
          ) : (
            <li key={link.id} className="center">
              <Navbar_desktop_link
                href={link.href}
                className="coolLink darkMode"
              >
                {link.label}
              </Navbar_desktop_link>
            </li>
          )
        )}
        <Themes />
        <li className="center ">
          {isAuthenticated ? <Auth_userInfo /> : <Navbar_desktop_auth />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar_desktop;
