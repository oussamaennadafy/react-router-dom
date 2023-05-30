import React from "react";
import { Link, useOutlet } from "react-router-dom";

function CreatePlace() {
  const outlet = useOutlet();
  return (
    <div>
      <p>
        Create Place either if you are <Link to="client">client</Link> /{" "}
        <Link to="admin">admin</Link>
      </p>
      {outlet}
    </div>
  );
}

export default CreatePlace;
