import { useState } from "react";
import { IoReorderFourOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav
      className="overflow-hidden sticky top-0
    bg-white z-50 "
    >
      <div className="flex items-end justify-center flex-col ">
        <div className="flex mr-auto w-screen justify-between items-center px-6 py-4">
          <p className="font-bold text-5xl font-jost ">FOOTME</p>

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
           mobile fixed
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
