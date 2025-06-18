"use client";
import { Command } from "cmdk";
import { redirect } from "next/navigation";
import React from "react";

interface Searchbar_ItemProps {
  item: string;
  onSelect?: (item: string) => void;
}
const Searchbar_Item: React.FC<Searchbar_ItemProps> = ({ item, onSelect }) => {
  const redirectToSearchpage = (item: string) => {
    redirect(`/search?query=${item}`);
  };
  return (
    <Command.Item
      className="bg-primary cursor-pointer  my-2 rounded-md  py-1"
      onSelect={() => {
        if (onSelect) {
          onSelect(item);
        }
        redirectToSearchpage(item);
      }}
    >
      <span className=" textFont text-bold text-center text-white coolLink coolLinkwhite">
        {item}
      </span>
    </Command.Item>
  );
};

export default Searchbar_Item;
