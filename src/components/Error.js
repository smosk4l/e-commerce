import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-3  font-rubik text-center px-4 md:justify-start">
      <img
        src={require("../assets/404-image.jpg")}
        alt="Error 404 ilustration"
        className="sm:max-w-[500px] sm:max-h-[500px]"
      />
      <p className="text-lg uppercase font-medium">404 - Page not found</p>
      <p className="text-sm">
        The page you are looking for might have been removed had its name
        changed or is temporarily unvailable.
      </p>
      <Link to={`/`}>
        <button className="uppercase text-sm text-white bg-blue-700 hover:bg-blue-600 rounded-full px-5 py-3">
          Go to homepage
        </button>
      </Link>
    </div>
  );
}

export default Error;
