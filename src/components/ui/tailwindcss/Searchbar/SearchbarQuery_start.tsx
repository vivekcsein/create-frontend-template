"use client";
import React from "react";
import { Button } from "../../shadcn/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store";
import { Search } from "lucide-react";
import { startSearching } from "@/libs/redux/features/searchFeatureSlice";

const SearchbarQuery_start = () => {
  const searchQuery = useSelector(
    (state: RootState) => state.searchFeature.searchQuery
  );
  const dispatch = useDispatch();

  return (
    <Button
      variant={"empty"}
      onClick={() => {
        console.log("search..");
        dispatch(startSearching() as any);
      }}
      disabled={!searchQuery.trim()}
      className="  w-8 left-0  cursor-pointer rounded-custom-left  transition-colors duration-200"
    >
      <Search className=" w-5 h-5 ml-2" />
    </Button>
  );
};

export default SearchbarQuery_start;
