import React from "react";
import { Link } from "react-router-dom";

function UpdateLinks() {
  const linkStyle = {
    display: "block",
    margin: "5px 0",
    padding: "5px 0",
    textDecoration: "none",
    color: "#007bff",
    textAlign: "center",
    border: "1px solid #007bff",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="row mt-2">
        <div className="row">
          <Link
            to="/destinations/update"
            className="btn btn-link w-100 text-center"
            style={linkStyle}
          >
            Update Destinations
          </Link>
        </div>
        <div className="row">
          <Link
            to="/facts/update"
            className="btn btn-link w-100 text-center"
            style={linkStyle}
          >
            Update Facts
          </Link>
        </div>
        <div className="row">
          <Link
            to="/accommodations/update"
            className="btn btn-link w-100 text-center"
            aria-disabled="true"
            style={linkStyle}
          >
            Update Accommodation
          </Link>
        </div>
        <div className="row">
          <Link
            to="/basicinfo/update"
            className="btn btn-link w-100 text-center"
            aria-disabled="true"
            style={linkStyle}
          >
            Update Basic Infos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpdateLinks;
