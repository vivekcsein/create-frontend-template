import React from "react";
import Searchpage_content from "@/components/ui/tailwindcss/Searchbar/Searchpage_content";
import SearchPage from "@/components/layouts/SearchPage";
type SearchPageProps = {
  searchParams: { query?: string } | undefined;
};

const Search = async ({ searchParams }: SearchPageProps) => {
  const search = await searchParams;
  if (!search) return;

  const searchQuery = typeof search === "object" && search.query;

  if (!searchQuery) {
    return <SearchPage />;
  }

  return (
    <div className="w-full min-h-screen ">
      <Searchpage_content query={searchQuery} />
    </div>
  );
};

export default Search;
