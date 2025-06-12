"use client";

import { clearSearchQuery } from "@/libs/redux/features/searchFeatureSlice";
import { RootState } from "@/libs/redux/store";
import { CircleX } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const SearchbarQuery_cancel = () => {
  const searchFeature = useSelector((state: RootState) => state.searchFeature);
  const dispatch = useDispatch();
  const searchQuery = searchFeature.searchQuery || "";

  if (searchQuery.trim()) {
    return (
      <div
        className=" w-8  center cursor-pointer   transition-colors duration-200 hover:scale-110"
        onClick={(e) => {
          e.preventDefault();
          console.log("cancel search");
          dispatch(clearSearchQuery(""));
        }}
      >
        <CircleX className="w-4 h-4" />
        <span className="sr-only">Cancel</span>
      </div>
    );
  }
};

export default SearchbarQuery_cancel;
