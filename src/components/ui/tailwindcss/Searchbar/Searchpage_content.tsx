"use client";
import React, { useState } from "react";
import { getLocalStorageItem } from "@/libs/configs/config.helper";

interface Searchpage_contentProps {
  query: string;
}

const Searchpage_content = ({ query }: Searchpage_contentProps) => {
  const [data, setData] = useState(getLocalStorageItem("outputSearchData", []));

  console.log(query);

  return <div>Searchpage_content</div>;
};

export default Searchpage_content;
