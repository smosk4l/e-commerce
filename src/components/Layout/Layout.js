import Navbar from "../Navbar/Navbar";
import ProductList from "../Product/ProductList";
import ProductFilter from "../Product/ProductFilter";
import ProductsData from "../Product/ProductsData";
import { useState } from "react";
function Layout() {
  const [products, setProducts] = useState(ProductsData);
  const handleFilter = (filteredProducts) => {
    setProducts(filteredProducts);
  };
  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-[1440px] shadow-lg">
        <Navbar />
        <div className="md:grid grid-cols-8 mx-auto overflow-hidden">
          <ProductFilter onFilter={handleFilter} />
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
