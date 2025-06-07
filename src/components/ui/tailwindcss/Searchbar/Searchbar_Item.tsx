"use client";
import { Command } from "cmdk";
import React from "react";

interface Searchbar_ItemProps {
  item: string;
  onSelect?: () => void;
}
const Searchbar_Item = ({ item, onSelect }: Searchbar_ItemProps) => {
  return (
    <Command.Item
      className=" bg-primary cursor-pointer  my-2 rounded-md  py-1"
      onSelect={() => {
        if (onSelect) {
          onSelect();
        }
      }}
    >
      <span className=" text-center text-sm text-muted-foreground coolLink">
        {item}
      </span>
    </Command.Item>
  );
};

export default Searchbar_Item;
