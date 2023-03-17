import Navbar from "../Navbar/Navbar";
import FilterPanel from "../Filter/FilterPanel";
import ProductList from "../Product/ProductList";
import FooterMobile from "../FooterMobile";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className=" max-w-[1440px] md:grid grid-cols-5 mx-auto">
        <FilterPanel />
        <ProductList />
      </div>
      <FooterMobile />
    </div>
  );
}

export default Layout;
