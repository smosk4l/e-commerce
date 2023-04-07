import { useState } from "react";
import {
  IoReorderFourOutline,
  IoCloseOutline,
  IoPersonCircle,
  IoHomeOutline,
  IoHeartOutline,
  IoBasketOutline,
  IoCartOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav
      className="overflow-hidden sticky top-0
    bg-white z-40 shadow-md "
    >
      <div className="flex items-end justify-center flex-col ">
        <div className="flex mr-auto w-full justify-between items-center px-6 py-4">
          <Link to="/">
            <p className="font-bold text-5xl font-jost text-black-400 ">
              FOOTME
            </p>
          </Link>
          <div className="hidden w-full sm:inline-block">
            <ul className="flex justify-end gap-6 text-xl">
              <Link to="/login">
                <li>My Account</li>
              </Link>
              <Link to="/wishlist">
                <li>Wishlist</li>
              </Link>
              <Link to="/basket">
                <li>Basket</li>
              </Link>
            </ul>
          </div>
          <div className="sm:hidden">
            <button
              onClick={handleClick}
              className="text-4xl"
              aria-label={`${clicked ? "Close menu" : "Open menu"}`}
            >
              {clicked ? <IoCloseOutline /> : <IoReorderFourOutline />}
            </button>
          </div>
        </div>

        <div className="w-screen  relative">
          <ul
            className={`text-sm  bg-white
           mobile fixed top-20 h-full  z-50
          ${
            clicked ? "translate-x-0" : "translate-x-full"
          } easy-out duration-300
          sm:flex sm:flex-row sm:justify-end`}
          >
            <li className="flex items-center gap-2">
              <IoCartOutline className="text-2xl" />
              Products
            </li>
            <li className="flex items-center gap-2">
              <IoHomeOutline className="text-2xl" />
              Home
            </li>
            <li className="flex items-center gap-2">
              <IoPersonCircle className="text-2xl" />
              My account
            </li>
            <li className="flex items-center gap-2">
              <IoHeartOutline className="text-2xl" />
              Wishlist
            </li>

            <li className="flex items-center gap-2">
              <IoBasketOutline className="text-2xl" />
              Basket
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
