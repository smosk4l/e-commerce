import { IoHomeSharp, IoSearchSharp, IoStar, IoPerson } from "react-icons/io5";

function FooterMobile() {
  return (
    <div className="sticky bottom-0 py-5 bg-white border-t-2">
      <div className="flex items-center justify-around text-3xl text-zinc-500">
        <button>
          <IoHomeSharp />
        </button>
        <button>
          <IoSearchSharp />
        </button>
        <button>
          <IoStar />
        </button>
        <button>
          <IoPerson />
        </button>
      </div>
    </div>
  );
}

export default FooterMobile;
