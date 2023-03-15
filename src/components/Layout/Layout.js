import Navbar from "../Navbar/Navbar";
import ProductOption from "../Product/ProductOption";
import FilterPanel from "../FilterPanel";
import Product from "../Product/Product";
function Layout() {
  return (
    <div>
      <Navbar />
      {/* <ProductOption /> */}
      <FilterPanel />
      <Product />
    </div>
  );
}

export default Layout;
