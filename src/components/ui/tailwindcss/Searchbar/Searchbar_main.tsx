"use client";
import Wrapper_searchbar from "@/components/wrappers/Wrapper_searchbar";
import { Command } from "cmdk";
import React from "react";
import SearchbarQuery_start from "./SearchbarQuery_start";
import Searchbar_Input from "./Searchbar_Input";
import SearchbarQuery_cancel from "./SearchbarQuery_cancel";
import Searchbar_ItemList from "./Searchbar_ItemList";

const Searchbar_main = () => {
  return (
    <Wrapper_searchbar>
      <Command
        className="px-2 bg-border  flex rounded-[20px]  flex-col overflow-hidden focus:outline-none "
        // onBlur={() => setSearchbarON(false)}
      >
        <div className="w-full flex justify-between">
          <SearchbarQuery_start />
          <Searchbar_Input />
          <SearchbarQuery_cancel />
        </div>
        <Searchbar_ItemList />
      </Command>
    </Wrapper_searchbar>
  );
};

export default Searchbar_main;
