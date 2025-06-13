"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import "@/styles/scss/components/Header.scss";
import { AppDispatch, RootState } from "@/libs/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRootLayout,
  getrootLayoutData,
  getrootLayoutDataStatus,
} from "@/libs/redux/features/rootLayoutSlice";
import Image from "next/image";
import Navbar_desktop from "../ui/tailwindcss/Navbar/Navbar_desktop";
import Link from "next/link";
import { fetchUser } from "@/libs/redux/features/authSlice";
import Header_animation from "../animations/layout_animations/Header_animation";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar_desktop_logo from "../ui/tailwindcss/Navbar/desktop/Navbar_desktop_logo";
import Navbar_phone from "../ui/tailwindcss/Navbar/Navbar_phone";

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const headerRef = useRef<HTMLDivElement>(null);
  // Fetching root layout data from Redux store
  const isMobile = useIsMobile();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const rootLayoutData = useSelector((state: RootState) =>
    getrootLayoutData(state)
  );
  const rootLayoutStatus = useSelector((state: RootState) =>
    getrootLayoutDataStatus(state)
  );
  const headerData = useSelector((state: RootState) => {
    const data = getrootLayoutData(state);
    if (!data) return null;
    return data ? data.HeaderData : null;
  });

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      dispatch(fetchUser());
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (rootLayoutStatus === "idle") {
      dispatch(fetchRootLayout());
    }
  }, [dispatch, rootLayoutStatus]);

  if (rootLayoutStatus === "loading") {
    return <p>Loading Header...</p>;
  }
  if (rootLayoutStatus === "failed") {
    return <p>Failed to load header data.</p>;
  }
  if (rootLayoutStatus === "succeeded" && !rootLayoutData) {
    return <p>No header data available.</p>;
  }

  if (rootLayoutStatus === "succeeded" && rootLayoutData) {
    if (!headerData) {
      return <p>No header data available.</p>;
    } else {
      return (
        <header className="Header" ref={headerRef}>
          {isMobile ? (
            // Phone version
            // Phone version
            // Phone version
            <div className="Header__phone">
              <Navbar_phone />
            </div>
          ) : (
            // Desktop version
            // Desktop version
            // Desktop version
            <div className="Header__desktop z-100 bg-border">
              <Navbar_desktop_logo
                // src={headerData.header_Logo.src}
                alt={headerData.header_Logo.alt}
                href={headerData.header_Logo.href}
              />

              <Navbar_desktop
                navbarData={headerData.navbar}
                isAuthenticated={isAuthenticated}
                dropdownData={rootLayoutData.productsData}
              />

              <Header_animation refObject={headerRef}></Header_animation>
            </div>
          )}
        </header>
      );
    }
  }
};

export default Header;
