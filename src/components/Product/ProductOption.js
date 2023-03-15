import React from "react";
import { IoFunnelOutline } from "react-icons/io5";

function ProductOption() {
  return (
    <div className="px-6 py-4">
      <p className="text-gray-600 mb-3">All Products</p>
      <button className="flex gap-2 items-center border-2  px-2 py-1 border-black">
        <span>
          <IoFunnelOutline />
        </span>
        <span className="font-medium">Filter</span>
      </button>
    </div>
  );
}

export default ProductOption;
