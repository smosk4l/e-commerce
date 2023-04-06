import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import ProductList from "../Product/ProductList";
import ProductFilter from "../Product/ProductFilter";
import { FavoritesContext } from "../FavoritesContext";
function Wishlist() {
  const [favorites, setFavorites] = useContext(FavoritesContext);

  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-[1440px] shadow-lg">
        <Navbar />
        <div className="md:grid grid-cols-8 mx-auto overflow-hidden">
          <ProductList products={favorites} />
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
