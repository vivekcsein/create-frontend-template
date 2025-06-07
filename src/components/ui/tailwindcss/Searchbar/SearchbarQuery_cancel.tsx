"use client";

import { CircleX } from "lucide-react";

interface SearchbarQuery_cancelProps {
  onClick?: () => void;
}
const SearchbarQuery_cancel = ({ onClick }: SearchbarQuery_cancelProps) => {
  return (
    <div
      className=" w-8  center cursor-pointer   transition-colors duration-200"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
          console.log("cancel search");
        }
      }}
    >
      <CircleX className="w-4 h-4" />
      <span className="sr-only">Cancel</span>
    </div>
  );
};

export default SearchbarQuery_cancel;
