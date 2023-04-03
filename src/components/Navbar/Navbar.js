import { useState } from "react";
import { IoReorderFourOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav
      className="overflow-hidden sticky top-0
    bg-white z-40 "
    >
      <div className="flex items-end justify-center flex-col ">
        <div className="flex mr-auto w-screen justify-between items-center px-6 py-4">
          <Link to="/">
            <p className="font-bold text-5xl font-jost text-black-400 ">
              FOOTME
            </p>
          </Link>

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
            <li>Overview</li>
            <li>Profile</li>
            <li>My Preferences</li>
            <li>Address Book</li>
            <li>Saved Cards</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
