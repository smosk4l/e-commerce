import Navbar from "../Navbar/Navbar";
import ProductList from "../Product/ProductList";
import FooterMobile from "../Footer/FooterMobile";

function Layout() {
  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-[1440px] shadow-lg">
        <Navbar />
        <ProductList />
        <FooterMobile />
      </div>
    </div>
  );
}

export default Layout;
