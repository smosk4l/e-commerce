import { Link } from "react-router-dom";
function HomeButton({ text }) {
  return (
    <Link to={"/"}>
      <button className="uppercase text-sm text-white bg-blue-700 hover:bg-blue-600 rounded-full px-5 py-3">
        {text}
      </button>
    </Link>
  );
}

export default HomeButton;
