import { useContext, useEffect } from "react";
import HomeButton from "../HomeButton";
import Navbar from "../Navbar/Navbar";
import ProductList from "../Product/ProductList";
import { FavoritesContext } from "../../contex/FavoritesContext";
function Wishlist() {
  const [favorites, setFavorites] = useContext(FavoritesContext);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [setFavorites]);

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="max-w-[1440px] ">
        <Navbar />
        {favorites.length !== 0 ? (
          <div className="md:grid grid-cols-8 mx-auto overflow-hidden shadow-md">
            <ProductList products={favorites} />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[70vh] text-lg text-slate-400 gap-1">
            <h1 className="text-4xl text-rose-700 text-center ">
              Your Wishlist is empty!
            </h1>
            <p>seems like you don't have wishes here.</p>
            <p className="mb-4">Make a wish!</p>
            <HomeButton text={"Start shopping!"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
