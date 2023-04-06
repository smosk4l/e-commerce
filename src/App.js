import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductDetails from "./components/Product/ProductDetails";
import Error from "./components/Error";
import { FavoritesProvider } from "./components/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/*" element={<Error />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
