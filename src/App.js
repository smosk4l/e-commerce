import Layout from "./components/Layout/Layout";
import Error from "./components/Error";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/products/*" element={<ProductDetails />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
