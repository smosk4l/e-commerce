import ProductCard from "./ProductCard";
import products from "./ProductsData";
import { useState } from "react";
import { IoFunnelOutline, IoCloseOutline } from "react-icons/io5";
const Product = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const sortProdutcsDesc = (products) => {
    products.sort((a, b) => {
      return a.price - b.price;
    });
  };
  // console.log(
  //   products.sort((a, b) => {
  //     return b.price - a.price;
  //   })
  // );
  return (
    <div className=" max-w-[1440px] md:grid grid-cols-8 mx-auto">
      <div className="col-start-1 col-end-3 overflow-hidden">
        <div className="px-6 py-4 flex flex-col items-start ">
          <p className="text-gray-600 mb-3 ">All Products</p>
          <button
            onClick={handleClick}
            className="flex gap-2 items-center border-2  px-2 py-1 border-black"
            aria-label="Show filters panel"
          >
            <span>
              <IoFunnelOutline />
            </span>
            <span className="font-medium">Filter</span>
          </button>
        </div>

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
      <div className="md:col-start-3 col-end-9">
        <div className="max-w-[1440px] grid grid-cols-2 md:grid-cols-3 ">
          {products.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Product;
