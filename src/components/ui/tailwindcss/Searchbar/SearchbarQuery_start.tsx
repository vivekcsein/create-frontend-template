"use client";
import React from "react";
import { Button } from "../../shadcn/button";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store";
import { Search } from "lucide-react";
import { redirect } from "next/navigation";

const SearchbarQuery_start = () => {
  const searchFeature = useSelector((state: RootState) => state.searchFeature);
  const searchQuery = searchFeature.searchQuery || "";

  if (searchQuery.trim()) {
    return (
      <Button
        variant={"empty"}
        onClick={() => {
          console.log("searching now..");
          redirect(`/search?query=${searchQuery}`);
        }}
        disabled={!searchQuery.trim()}
        className="  w-8 left-0  cursor-pointer rounded-custom-left  transition-colors duration-200 hover:scale-110"
      >
        <Search className=" w-5 h-5 ml-2" />
      </Button>
    );
  }
};

export default SearchbarQuery_start;
