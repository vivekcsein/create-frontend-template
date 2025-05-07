"use client";
import React, { useEffect } from "react";
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

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  // Fetching root layout data from Redux store
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
        <header className="Header">
          <div className="Header__desktop">
            <Link className="Header__logo" href={headerData.header_Logo.href}>
              {headerData.header_Logo.src ? (
                <Image
                  src={headerData.header_Logo.src}
                  alt={headerData.header_Logo.alt}
                  width={100}
                  height={100}
                />
              ) : (
                <div>Logo</div>
              )}
            </Link>

            <Navbar_desktop
              navbarData={headerData.navbar}
              dropdownData={rootLayoutData.productsData}
            />
          </div>
        </header>
      );
    }
  }
};

export default Header;
