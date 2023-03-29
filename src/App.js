import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductDetails from "./components/Product/ProductDetails";
import Error from "./components/Error";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/*" element={<Error />} />
      <Route path="/products/*" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
