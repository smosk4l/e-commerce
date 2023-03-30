import { IoHomeSharp, IoCart, IoStar, IoPerson } from "react-icons/io5";

function FooterMobile() {
  return (
    <div className="sticky bottom-0 py-5 bg-white border-t-2 z-20 md:hidden">
      <div className="flex items-end h-full justify-around text-3xl text-zinc-500">
        <button aria-label="Home button">
          <IoHomeSharp />
        </button>
        <button aria-label="My favorite">
          <IoStar />
        </button>
        <button aria-label="My cart">
          <IoCart />
        </button>
        <button aria-label="My profile">
          <IoPerson />
        </button>
      </div>
    </div>
  );
}

export default FooterMobile;
