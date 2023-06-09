import { FavoritesProvider } from "./context/FavoritesContext";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error/Error";
import Layout from "./components/Layout/Layout";
import Wishlist from "./components/Wishlist/Wishlist";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ProductDetails from "./components/Product/ProductDetails";
function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
