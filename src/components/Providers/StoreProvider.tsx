"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/libs/redux/store";

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
