import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p className="text-center text-2xl">welcome in Home page</p>
      <Link to="/places">go to places</Link>
    </div>
  );
}

export default Home;
