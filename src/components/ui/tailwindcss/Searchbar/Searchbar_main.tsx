import Wrapper_searchbar from "@/components/wrappers/Wrapper_searchbar";
import { Command } from "cmdk";
import React from "react";

const Searchbar_main = () => {
  return (
    <Wrapper_searchbar>
      <Command
        className="px-2 bg-border  flex rounded-[20px]  flex-col overflow-hidden focus:outline-none "
        // onBlur={() => setSearchbarON(false)}
      ></Command>
    </Wrapper_searchbar>
  );
};

export default Searchbar_main;
