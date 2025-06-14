import React from "react";

interface Wrapper_productpageProps {
  children: React.ReactNode;
}
const Wrapper_productpage = ({ children }: Wrapper_productpageProps) => {
  return (
    <section className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <div className=" rounded-lg shadow-lg overflow-hidden">{children}</div>
      </div>
    </section>
  );
};

export default Wrapper_productpage;
