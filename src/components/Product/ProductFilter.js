import Data from "./ProductsData";
import { useState } from "react";
import { IoFunnelOutline, IoCloseOutline } from "react-icons/io5";

function ProductFilter(props) {
  const [products, setProducts] = useState(Data);
  const [clicked, setClicked] = useState(false);

  const handleSortClick = (order) => {
    let sortedProducts = [...products];
    if (order === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = Data;
    }

    setProducts(sortedProducts);
    props.onFilter(sortedProducts);
  };

  const handleFilterClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="col-start-1 col-end-3  ">
      <div className="px-6 py-4 flex flex-col items-start ">
        <p className="text-gray-600 mb-3 ">All Products</p>
        <button
          onClick={handleFilterClick}
          className="flex gap-2 items-center border-2  px-2 py-1 border-black"
          aria-label="Show filters panel"
        >
          <span>
            <IoFunnelOutline />
          </span>
          <span className="font-medium">Filter</span>
        </button>
      </div>
      <div>
        <div
          className={`px-4 bg-white animation-mobile ease-out duration-300 fixed top-0 h-screen w-screen  z-50  md:animation-desktop sm:w-auto
                ${clicked ? "translate-x-0   " : "-translate-x-full "}  
              `}
        >
          <div className="flex items-center justify-between mb-4 py-3">
            <span className="text-xl font-medium">Filters</span>
            <button onClick={handleFilterClick} aria-label="Close filter panel">
              <IoCloseOutline className="text-3xl" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <div className="pb-4 border-b">
              <p className="font-medium pb-2">Sort By</p>

              <form className="flex flex-col gap-2 accent-black text-gray-600  ">
                <div className="[&>*]:mr-4">
                  <input
                    type="radio"
                    id="default"
                    value="default"
                    name="filterOption"
                    defaultChecked
                    onClick={() => handleSortClick("recent")}
                  />
                  <label htmlFor="default">Most Recent</label>
                </div>
                <div className="[&>*]:mr-4">
                  <input
                    type="radio"
                    id="priceDesc"
                    value="priceDesc"
                    name="filterOption"
                    onClick={() => handleSortClick("asc")}
                  />
                  <label htmlFor="priceDesc">Price High</label>
                </div>
                <div className="[&>*]:mr-4">
                  <input
                    type="radio"
                    id="priceAsc"
                    value="priceAsc"
                    name="filterOption"
                    onClick={() => handleSortClick("desc")}
                  />
                  <label htmlFor="priceAsc">Price Low</label>
                </div>
              </form>
            </div>

            <div className="pb-4 border-b ">
              <p className="font-medium pb-2">Color</p>
              <div className="flex gap-4">
                <button
                  className="w-9 h-9 bg-red-400 rounded-full"
                  aria-label="Red color circle"
                ></button>
                <button
                  className="w-9 h-9 bg-white rounded-full border"
                  aria-label="White color circle"
                ></button>
                <button
                  className="w-9 h-9 bg-blue-400 rounded-full"
                  aria-label="blue color circle"
                ></button>
                <button
                  className="w-9 h-9 bg-black rounded-full"
                  aria-label="black color circle"
                ></button>
              </div>
            </div>

            <div className="pb-2 border-b">
              <p className="font-medium mb-3">Price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
