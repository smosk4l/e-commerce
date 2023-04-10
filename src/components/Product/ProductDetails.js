import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FavoritesContext } from "../../contex/FavoritesContext";
import Navbar from "../Navbar/Navbar";
import Data from "./ProductsData";
import ProductGallery from "./ProductGallery";
import {
  IoHeartOutline,
  IoCart,
  IoRemoveOutline,
  IoAddOutline,
  IoHeartSharp,
  IoArrowBackOutline,
} from "react-icons/io5";

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoritesFromStorage);
  }, [setFavorites]);

  const product = Data.find((product) => product.id.toString() === id);

  const toggleFavorite = () => setIsFavorite(!isFavorite);
  const incrementQuantity = () => setQuantity((quantity) => quantity + 1);
  const decrementQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((quantity) => quantity - 1);
  };

  const updateFavorites = () => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));

    if (
      !favoritesFromStorage ||
      !favoritesFromStorage.find((fav) => fav.id === product.id)
    ) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
      localStorage.setItem(
        "favorites",
        JSON.stringify([...(favoritesFromStorage || []), product])
      );
    } else {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== product.id)
      );
      localStorage.setItem(
        "favorites",
        JSON.stringify(
          favoritesFromStorage.filter((fav) => fav.id !== product.id)
        )
      );
    }
  };
  const heartClickHandler = () => {
    toggleFavorite();
    updateFavorites();
  };

  const checkIfIsFavorite = () => {
    return favorites.some((fav) => fav.id === product.id);
  };
  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-[1440px] font-rubik h-screen">
        <Navbar></Navbar>
        <article className="md:grid md:grid-cols-6 gap-6 relative">
          <div className=" col-start-1 col-end-4 px-3 lg:px-6">
            <ProductGallery product={product} />
          </div>
          <button
            className="text-3xl absolute top-12 left-8"
            onClick={() => navigate(-1)}
          >
            <IoArrowBackOutline />
          </button>
          <div className="flex flex-col  justify-center col-start-4 col-end-7">
            <button
              className="text-3xl absolute top-12 right-8 animate-bounce"
              onClick={heartClickHandler}
            >
              {checkIfIsFavorite() ? (
                <IoHeartSharp className="text-red-500" />
              ) : (
                <IoHeartOutline />
              )}
            </button>
            <div className="flex flex-col gap-3 px-4 ">
              <h1 className="font-semibold text-2xl max-w-[25ch]">
                {product.title}
              </h1>
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
                    <button onClick={decrementQuantity}>
                      <IoRemoveOutline />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity}>
                      <IoAddOutline />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center px-4 py-6 border-t">
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
        </article>
      </div>
    </div>
  );
}

export default ProductDetails;
