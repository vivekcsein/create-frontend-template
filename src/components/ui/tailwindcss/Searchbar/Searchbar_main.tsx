"use client";
import Wrapper_searchbar from "@/components/wrappers/Wrapper_searchbar";
import { Command } from "cmdk";
import React from "react";
import SearchbarQuery_start from "./SearchbarQuery_start";
import Searchbar_Input from "./Searchbar_Input";
import SearchbarQuery_cancel from "./SearchbarQuery_cancel";
import Searchbar_ItemList from "./Searchbar_ItemList";
import Searchbar_TrendingList from "./Searchbar_TrendingList";
import { clearSearchQuery } from "@/libs/redux/features/searchFeatureSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store";

const Searchbar_main = () => {
  const searchFeature = useSelector((state: RootState) => state.searchFeature);
  const dispatch = useDispatch();

  return (
    <Wrapper_searchbar>
      <Command
        className="px-2 bg-border  flex rounded-[20px]  flex-col overflow-hidden focus:outline-none "
        onBlurCapture={(e) => {
          const nextFocus = e.relatedTarget as HTMLElement | null;
          // If next focus is inside the searchbar, do nothing
          if (nextFocus && e.currentTarget.contains(nextFocus)) {
            return;
          } else {
            dispatch(clearSearchQuery(""));
          }
        }}
      >
        <div className="w-full flex justify-between">
          <SearchbarQuery_start />
          <Searchbar_Input />
          <SearchbarQuery_cancel />
        </div>
        <Searchbar_ItemList />
        <Searchbar_TrendingList />
      </Command>
    </Wrapper_searchbar>
  );
};

export default Searchbar_main;
