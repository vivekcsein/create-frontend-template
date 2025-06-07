"use client";
import { setSearchQuery } from "@/libs/redux/features/searchFeatureSlice";
import { RootState } from "@/libs/redux/store";
import { Command } from "cmdk";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Searchbar_Input = () => {
  const searchQuery = useSelector(
    (state: RootState) => state.searchFeature.searchQuery
  );
  const dispatch = useDispatch();

  return (
    <Command.Input
      className=" px-10 w-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-none "
      placeholder="Search..."
      value={searchQuery}
      onChangeCapture={(e: React.FormEvent<HTMLInputElement>) => {
        e.stopPropagation();
        const target = e.target as HTMLInputElement;
        const query = target.value;
        dispatch(setSearchQuery(query));
      }}
      // onFocus={() => setSearchbarON(true)}
      //   onBlur={() => setSearchbarON(false)}
    />
  );
};

export default Searchbar_Input;
