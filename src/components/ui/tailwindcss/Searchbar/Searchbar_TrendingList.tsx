"use client";
import { RootState } from "@/libs/redux/store";
import { Command } from "cmdk";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searchbar_Item from "./Searchbar_Item";
import { fetchTrendingSearches } from "@/libs/redux/features/searchFeatureSlice";

const Searchbar_TrendingList = () => {
  const searchFeature = useSelector((state: RootState) => state.searchFeature);
  const dispatch = useDispatch();
  const searchQuery = searchFeature.searchQuery || "";
  const searchStatus = searchFeature.searchStatus;

  useLayoutEffect(() => {
    if (!searchFeature.trendingSearches?.length) {
      dispatch(fetchTrendingSearches() as any);
    }

    return () => {};
  }, [searchFeature.trendingSearches?.length]);

  if (!searchFeature.trendingSearches?.length) {
    return null;
  }
  return (
    <Command.List className="px-3">
      {searchStatus === "thinking" && !searchQuery.trim() ? (
        <>
          <Command.Empty className="text-center text-muted-foreground">
            No results found.
          </Command.Empty>
          <Command.Group
            heading="Recent Trends..."
            className=" text-center  my-2 rounded-md "
          >
            {searchFeature.trendingSearches.slice(0, 5).map((item, index) => (
              <Searchbar_Item key={index} item={item} />
            ))}
          </Command.Group>
        </>
      ) : null}
    </Command.List>
  );
};

export default Searchbar_TrendingList;
