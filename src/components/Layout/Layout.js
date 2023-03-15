import Navbar from "../Navbar/Navbar";
import FilterPanel from "../Filter/FilterPanel";
import Product from "../Product/Product";
import FooterMobile from "../FooterMobile";

function Layout() {
  return (
    <div>
      <Navbar />
      <FilterPanel />
      <Product />
      <FooterMobile />
    </div>
  );
}

export default Layout;
