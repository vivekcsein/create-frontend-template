import React from "react";

interface Wrapper_searchbarProps {
  children: React.ReactNode;
}

const Wrapper_searchbar = ({ children }: Wrapper_searchbarProps) => {
  return (
    <section className="w-full  flex items-center justify-center p-4 py-[100px]">
      <div className="w-2/5 bg-background border-8 border-primary rounded-[30px] shadow-lg">
        {children}
      </div>
    </section>
  );
};

export default Wrapper_searchbar;
