import { useState } from "react";
import { IoFunnelOutline, IoCloseOutline } from "react-icons/io5";
import sortProductsByPrice from "../../utils/sortProductsByPrice";
import filterProductsByColor from "../../utils/filterProductsByColor";
import Data from "./ProductsData";

function ProductFilter(props) {
  const [clicked, setClicked] = useState(false);
  const [sortOrder, setSortOrder] = useState("recent");
  const [selectedColor, setSelectedColor] = useState("");

  const toggleFilterMenu = () => {
    setClicked(!clicked);
  };

  const handleSortClick = (order) => {
    const sortedProducts = sortProductsByPrice([...Data], order);
    const filteredProducts = filterProductsByColor(
      sortedProducts,
      selectedColor
    );

    props.onFilter(filteredProducts);
    setSortOrder(order);
    setClicked(false);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const handleDefaultClick = () => {
    setSelectedColor("");
    setSortOrder("recent");
    setClicked(false);
    const sortedProducts = sortProductsByPrice([...Data], "recent");
    const filteredProducts = filterProductsByColor(sortedProducts, "");
    props.onFilter(filteredProducts);
  };

  return (
    <div className="col-start-1 col-end-3  ">
      <div className="px-6 py-4 flex flex-col items-start ">
        <p className="text-gray-600 mb-3 ">All Products</p>
        <button
          onClick={toggleFilterMenu}
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
          className={`px-4 bg-white animation-mobile ease-out duration-300 fixed top-0 h-screen w-screen  z-50  md:animation-desktop md:w-auto
                ${clicked ? "translate-x-0   " : "-translate-x-full "}  
              `}
        >
          <div className="flex items-center justify-between mb-4 py-3">
            <span className="text-xl font-medium">Filters</span>
            <button onClick={toggleFilterMenu} aria-label="Close filter panel">
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
                    onClick={() => handleSortOrderChange("recent")}
                  />
                  <label htmlFor="default">Most Recent</label>
                </div>
                <div className="[&>*]:mr-4">
                  <input
                    type="radio"
                    id="priceDesc"
                    value="priceDesc"
                    name="filterOption"
                    onClick={() => handleSortOrderChange("asc")}
                  />
                  <label htmlFor="priceDesc">Price High</label>
                </div>
                <div className="[&>*]:mr-4">
                  <input
                    type="radio"
                    id="priceAsc"
                    value="priceAsc"
                    name="filterOption"
                    onClick={() => handleSortOrderChange("desc")}
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
                  onClick={() => setSelectedColor("red")}
                ></button>
                <button
                  className="w-9 h-9 bg-white rounded-full border"
                  aria-label="White color circle"
                  onClick={() => setSelectedColor("white")}
                ></button>
                <button
                  className="w-9 h-9 bg-blue-400 rounded-full"
                  aria-label="blue color circle"
                  onClick={() => setSelectedColor("blue")}
                ></button>
                <button
                  className="w-9 h-9 bg-black rounded-full"
                  aria-label="black color circle"
                  onClick={() => setSelectedColor("black")}
                ></button>
              </div>
            </div>

            <div className="flex gap-2  items-center justify-center">
              <button
                className="px-12 md:px-6  py-2  text-white text-sm font-semibold rounded-full flex items-center gap-4 bg-indigo-600 hover:bg-indigo-500"
                onClick={() => handleSortClick(sortOrder)}
              >
                Sort
              </button>
              <button
                className="px-12 py-2 md:px-6  text-white text-sm font-semibold rounded-full flex items-center gap-4 bg-slate-900 hover:bg-slate-800"
                onClick={handleDefaultClick}
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
