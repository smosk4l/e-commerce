import { useState } from "react";
import { IoFunnelOutline, IoCloseOutline } from "react-icons/io5";

function FilterPanel() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="col-start-1 col-end-2">
      <div className="px-6 py-4 flex flex-col items-start ">
        <p className="text-gray-600 mb-3 ">All Products</p>
        <button
          onClick={handleClick}
          className="flex gap-2 items-center border-2  px-2 py-1 border-black"
        >
          <span>
            <IoFunnelOutline />
          </span>
          <span className="font-medium">Filter</span>
        </button>
      </div>

      <div
        className={`px-4 bg-white animation-mobile ease-out duration-300 fixed w-full h-full z-50  md:animation-desktop
                    ${clicked ? "translate-x-0" : "-translate-x-full"}  
                  `}

        // className={`px-4  bg-white
        // ${clicked ? "translate-x-0" : "-translate-x-full"}
        // easy-out duration-300 rounded-md fixed
        //  md:${clicked ? "translate-y-0" : "-translate-y-full"} md:border-r `}
      >
        <div className="flex items-center justify-between mb-4 py-3">
          <span className="text-xl font-medium">Filters</span>
          <button onClick={handleClick}>
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
                />
                <label htmlFor="default">Default</label>
              </div>
              <div className="[&>*]:mr-4">
                <input
                  type="radio"
                  id="priceDesc"
                  value="priceDesc"
                  name="filterOption"
                />
                <label htmlFor="priceDesc">Price: High - Low</label>
              </div>
              <div className="[&>*]:mr-4">
                <input
                  type="radio"
                  id="priceAsc"
                  value="priceAsc"
                  name="filterOption"
                />
                <label htmlFor="priceAsc">Price: Low - High</label>
              </div>
            </form>
          </div>

          <div className="pb-4 border-b">
            <p className="font-medium pb-2">Color</p>
            <div className="flex gap-4">
              <button className="w-9 h-9 bg-red-400 rounded-full"></button>
              <button className="w-9 h-9 bg-white rounded-full border"></button>
              <button className="w-9 h-9 bg-blue-400 rounded-full"></button>
              <button className="w-9 h-9 bg-black rounded-full"></button>
            </div>
          </div>

          <div className="pb-2 border-b">
            <p className="font-medium mb-3">Price</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
