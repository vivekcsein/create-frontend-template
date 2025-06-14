import React from "react";
import Searchpage_content from "@/components/ui/tailwindcss/Searchbar/Searchpage_content";
type SearchPageProps = {
  searchParams: { query?: string };
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { query } = await searchParams;
  const searchQuery = query;

  if (!searchQuery) {
    return <h1>No search query provided.</h1>;
  }
  if (!searchQuery.length) {
    return <h1>search query is empty.</h1>;
  }

  return (
    <div className="w-full min-h-screen ">
      <Searchpage_content query={searchQuery} />
    </div>
  );
};

export default SearchPage;
