"use client";
import {
  clearSearchQuery,
  setSearchQuery,
  startSearchThinking,
} from "@/libs/redux/features/searchFeatureSlice";
import { RootState } from "@/libs/redux/store";
import { Command } from "cmdk";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Searchbar_Input = () => {
  const searchQuery = useSelector(
    (state: RootState) => state.searchFeature.searchQuery
  );
  const dispatch = useDispatch();

  const setQueryOnUserInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const target = e.target as HTMLInputElement;
    const query = target.value;
    if (!query.length) {
      dispatch(startSearchThinking(""));
    } else {
      dispatch(setSearchQuery(query));
    }
  };

  useEffect(() => {
    dispatch(clearSearchQuery(""));

    return () => {};
  }, [dispatch]);

  return (
    <Command.Input
      className=" px-10 w-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-none "
      placeholder="Search..."
      value={searchQuery}
      onChangeCapture={(e: React.FormEvent<HTMLInputElement>) => {
        setQueryOnUserInput(e);
      }}
      onKeyDownCapture={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          // console.log("ENTER pressed");
          e.stopPropagation();
          const target = e.target as HTMLInputElement;
          const query = target.value;
          if (!query.length) {
            dispatch(startSearchThinking(""));
          } else {
            redirect(`/search?query=${query}`);
          }
        }
      }}
      onFocus={() => {
        dispatch(startSearchThinking(""));
      }}
    />
  );
};

export default Searchbar_Input;
