import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="w-screen h-24 bg-slate-500 flex justify-center items-center">
      <ul className="flex justify-center items-center gap-6">
        <li>
          <NavLink className="px-4 py-2 bg-slate-400 rounded-md" to="/">
            home
          </NavLink>
        </li>
        <li className="">
          <NavLink className="px-4 py-2 bg-slate-400 rounded-md" to="/places">
            places
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
