import { IoCart, IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="text-xl font-[Robotto] border-b">
      <nav className="flex items-center  px-12 py-8 ">
        <a href="/" className="mr-auto">
          LOGO
        </a>
        <ul className="flex gap-8 uppercase mr-auto">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Brands</li>
          <li>Sale</li>
        </ul>
        <div className="flex gap-6 text-2xl ">
          <button>
            <IoPersonCircle />
          </button>
          <button>
            <IoCart />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
