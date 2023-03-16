import Navbar from "../Navbar/Navbar";
import FilterPanel from "../Filter/FilterPanel";
import Product from "../Product/Product";
import FooterMobile from "../FooterMobile";

function Layout() {
  return (
    <div className="">
      <Navbar />
      <div className=" max-w-[1440px] md:grid grid-cols-5">
        <FilterPanel />
        <Product />
      </div>
      <FooterMobile />
    </div>
  );
}

export default Layout;
