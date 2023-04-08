import { useState } from "react";
import {
  IoReorderFourOutline,
  IoCloseOutline,
  IoPerson,
  IoHeart,
  IoCart,
} from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white z-40 shadow-md">
      <div className="flex items-end justify-center flex-col ">
        <div className="flex mr-auto w-full justify-between items-center px-6 py-4">
          <Link to="/">
            <p className="font-bold text-5xl font-jost text-black-400 ">
              FOOTME
            </p>
          </Link>
          <div className="hidden w-full sm:inline-block">
            <ul className="flex justify-end gap-6 text-xl">
              <li>
                <Link to={"/login"} className="flex items-center gap-2">
                  <IoPerson className="text-2xl" />
                  Account
                </Link>
              </li>
              <li>
                <Link to={"/wishlist"} className="flex items-center gap-2">
                  <IoHeart className="text-2xl" />
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to={"/basket"} className="flex items-center gap-2">
                  <IoCart className="text-2xl" />
                  Basket
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-4xl"
              aria-label={`${isMenuOpen ? "Close menu" : "Open menu"}`}
            >
              {isMenuOpen ? <IoCloseOutline /> : <IoReorderFourOutline />}
            </button>
          </div>
        </div>

        <div className="w-screen  relative">
          <ul
            className={`text-sm  bg-white
           mobile fixed top-20 h-full  z-50
          ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } easy-out duration-300
          sm:flex sm:flex-row sm:justify-end`}
          >
            <li>
              <Link to={"/login"} className="flex items-center gap-2">
                <IoPerson className="text-2xl" />
                Account
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to={"/wishlist"} className="flex items-center gap-2">
                <IoHeart className="text-2xl" />
                Wishlist
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <Link to={"/basket"} className="flex items-center gap-2">
                <IoCart className="text-2xl" />
                Basket
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
