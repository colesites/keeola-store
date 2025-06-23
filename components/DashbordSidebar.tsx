import Image from "next/image";
import React from "react";
import CategoryComponent from "./CategoryComponent";

const DashbordSidebar = () => {
  return (
    <div className="hidden md:flex w-64 h-full flex-col border-r-2 border-r-amber-800/50">
      <div className="flex justify-center py-4 h-16 w-full border-b border-b-amber-700/50">
        <Image src="/keeola-logo.png" alt="Keeola Logo" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center">
        <CategoryComponent />
      </div>
    </div>
  );
};

export default DashbordSidebar;
