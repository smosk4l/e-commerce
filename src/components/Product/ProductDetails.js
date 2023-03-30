import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Data from "./ProductsData";
import {
  IoHeartOutline,
  IoCart,
  IoRemoveOutline,
  IoAddOutline,
  IoHeartSharp,
} from "react-icons/io5";

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const getSelectedProduct = () => {
    return Data.find((product) => product.id.toString() === id);
  };

  const addQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const removeQuantity = () => {
    if (quantity > 1) setQuantity((quantity) => quantity - 1);
  };

  const heartClickHandler = () => {
    setIsFavorite(!isFavorite);
  };
  const product = getSelectedProduct();
  console.log(product);
  return (
    <article className="max-w-[1440px] font-rubik h-screen">
      <Navbar></Navbar>
      <div>
        <img
          src="https://sneakersjoint.com/wp-content/uploads/2023/03/air-jordan-3-retro-white-cement-reimagined-sneakers-1-1260x1260.webp"
          alt=""
          className="relative  max px-4"
        />
        <button
          className="text-3xl absolute top-28 right-4 animate-bounce"
          onClick={heartClickHandler}
        >
          {isFavorite ? (
            <IoHeartSharp className="text-red-500" />
          ) : (
            <IoHeartOutline />
          )}
        </button>
        <div className="flex flex-col gap-3 px-4">
          <h1 className="font-semibold text-2xl">{product.title}</h1>
          <span className="text-md font-medium">Description</span>
          <p className="text-slate-700 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            repudiandae iusto, suscipit eligendi excepturi mollitia.
          </p>
          <div className="grid grid-cols-6 grid-rows-2">
            <div className="flex items-center gap-4  col-start-1 col-end-6">
              <span className="text-md font-medium">Size</span>
              <label htmlFor="size"></label>
              <select
                name="size"
                id="size"
                className="px-2 py-2 border-2 rounded-full active:border-red-500"
              >
                <option value="" defaultChecked>
                  Choose your size
                </option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
              </select>
            </div>

            <div className="flex items-center gap-4 text-md font-medium pb-4 row-start-2 col-start-0 ">
              <span>Quantity</span>
              <div className="flex items-center gap-3 text-lg border px-6 py-2 rounded-full">
                <button onClick={removeQuantity}>
                  <IoRemoveOutline />
                </button>
                <span>{quantity}</span>
                <button onClick={addQuantity}>
                  <IoAddOutline />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center py-6 border-t">
            <div>
              <p className="text-slate-700 text-sm">Total price</p>
              <span className="text-xl font-bold">
                ${product.price * quantity}
              </span>
            </div>
            <button className="px-12 py-4 bg-black text-white text-sm font-semibold rounded-full flex items-center gap-4">
              <IoCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductDetails;
