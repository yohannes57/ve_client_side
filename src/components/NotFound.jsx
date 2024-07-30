import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center" style={{ marginTop: "60px" }}>
      <h3>Componente not found</h3>
      <Link to={"/"}>Go Back Main to Page</Link>
    </div>
  );
}

export default NotFound;
