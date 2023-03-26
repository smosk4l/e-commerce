import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

function ProductFilter() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div
      className={`px-4 bg-white animation-mobile ease-out duration-300 fixed w-full h-full z-50  md:animation-desktop
            ${clicked ? "translate-x-0   " : "-translate-x-full "}  
          `}
    >
      <div className="flex items-center justify-between mb-4 py-3">
        <span className="text-xl font-medium">Filters</span>
        <button onClick={handleClick} aria-label="Close filter panel">
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
                // onClick={() => setProducts(sortProdutcs(products, true))}
              />
              <label htmlFor="priceDesc">Price High</label>
            </div>
            <div className="[&>*]:mr-4">
              <input
                type="radio"
                id="priceAsc"
                value="priceAsc"
                name="filterOption"
                // onClick={() => sortProdutcs(products, false)}
              />
              <label htmlFor="priceAsc">Price Low</label>
            </div>
          </form>
        </div>

        <div className="pb-4 border-b">
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
  );
}

export default ProductFilter;
