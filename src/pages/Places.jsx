import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Places() {
  return (
    <div>
      <p className="text-xl">places</p>
      <p>place 1</p>
      <p>place 2</p>
      <p>place 3</p>
      <p>place 4</p>
      <p>place 5</p>
      <p>place 6</p>
      <p>place 7</p>
      <p>place 8</p>
      <Link
        className="px-4 py-2 bg-slate-400 rounded-md inline-block mr-4"
        to=".."
      >
        go back to home
      </Link>
      <Link
        className="px-4 py-2 bg-slate-400 rounded-md inline-block"
        to="create"
      >
        create place
      </Link>
      <Outlet />
    </div>
  );
}

export default Places;
