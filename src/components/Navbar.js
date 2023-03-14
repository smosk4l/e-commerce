import { useState } from "react";
import {
  IoReorderFourOutline,
  IoCloseOutline,
  IoCartOutline,
} from "react-icons/io5";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="flex items-end justify-center flex-col ">
      <div className="flex w-screen justify-between items-center px-6 py-4">
        <p className="font-bold text-5xl font-jost">ALDO</p>

        <div className="sm:hidden">
          <button onClick={handleClick} className="text-4xl">
            {clicked ? <IoCloseOutline /> : <IoReorderFourOutline />}
          </button>
        </div>
      </div>

      <div className="w-screen ">
        <ul
          className={`text-sm 
           mobile
          ${clicked ? "flex" : "hidden"} 
          sm:flex sm:flex-row sm:justify-end`}
        >
          <li>Overview</li>
          <li>Profile</li>
          <li>My Preferences</li>
          <li>Address Book</li>
          <li>Saved Cards</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
