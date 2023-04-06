import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import ProductList from "../Product/ProductList";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../FavoritesContext";
function Wishlist() {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  console.log(favorites);

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="max-w-[1440px] ">
        <Navbar />
        {favorites.length !== 0 ? (
          <div className="md:grid grid-cols-8 mx-auto overflow-hidden">
            <ProductList products={favorites} />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[70vh] text-lg text-slate-400 gap-1">
            <h1 className="text-4xl text-rose-700 text-center ">
              Your Wishlist is empty!
            </h1>
            <p>seems like you don't have wishes here.</p>
            <p>Make a wish!</p>
            <Link to={`/`}>
              <button className="uppercase text-sm text-white bg-blue-700 hover:bg-blue-600 rounded-full px-5 py-3 mt-4">
                Start shopping!
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
