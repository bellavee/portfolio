import React from "react";
import { Link } from "react-router-dom";

function Navigate() {
  return (
    <>
      <nav className="bg-amber-400 top-0 fixed z-50 w-full flex flex-wrap items-center justify-center pt-6">
        <div className="w-10/12 border-4 border-black rounded-t-full bg-white">
          <ul className="sm:p-3 flex items-center justify-center font-bold sm:text-lg text-sm p-4">
            <li className="sm:px-4 px-2 hover:text-amber-600">
              <Link to="/">Home</Link>
            </li>
            <li className="sm:px-4 px-2 hover:text-amber-600">
              <Link to="/">About</Link>
            </li>
            <li className="sm:px-4 px-2 hover:text-amber-600">
              <Link to="/">Projects</Link>
            </li>
            <li className="sm:px-4 px-2 hover:text-amber-600">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigate;
