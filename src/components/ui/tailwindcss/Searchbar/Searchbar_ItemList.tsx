"use client";
import { RootState } from "@/libs/redux/store";
import { Command } from "cmdk";
import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searchbar_Item from "./Searchbar_Item";

import {
  fetchAllSearchData,
  fetchTrendingSearches,
} from "@/libs/redux/features/searchFeatureSlice";

const Searchbar_ItemList = () => {
  const searchFeature = useSelector((state: RootState) => state.searchFeature);
  const dispatch = useDispatch();
  const searchQuery = searchFeature.searchQuery || "";

  useLayoutEffect(() => {
    console.log(searchFeature.trendingSearches?.length);

    if (!searchFeature.trendingSearches?.length) {
      dispatch(fetchTrendingSearches() as any);
    }

    if (!searchFeature.fetchSearchData?.length) {
      dispatch(fetchAllSearchData() as any);
    }

    return () => {};
  }, [searchFeature.fetchSearchData?.length]);

  if (!searchFeature.fetchSearchData?.length) {
    return null;
  }

  return (
    <Command.List className="px-3">
      {searchQuery.trim() ? (
        <>
          <Command.Empty className="text-center text-muted-foreground">
            No results found.
          </Command.Empty>
          <Command.Group
            heading="You Search..."
            className=" text-center  cursor-pointer  my-2 rounded-md "
          >
            {/* {searchFeature.fetchSearchData.map((item, index) => {
              return <Searchbar_Item key={index} item={item} />;
            })} */}
            {searchFeature.fetchSearchData.slice(0, 5).map((item, index) => (
              <Searchbar_Item key={index} item={item} />
            ))}
          </Command.Group>
        </>
      ) : null}
    </Command.List>
  );
};

export default Searchbar_ItemList;
