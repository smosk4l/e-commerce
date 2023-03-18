import Navbar from "../Navbar/Navbar";
import ProductList from "../Product/ProductList";
import FooterMobile from "../Footer/FooterMobile";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className=" max-w-[1440px] md:grid grid-cols-8 mx-auto">
        <ProductList />
      </div>
      <FooterMobile />
    </div>
  );
}

export default Layout;
