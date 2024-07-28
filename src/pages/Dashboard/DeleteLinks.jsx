import React from "react";
import { Link } from "react-router-dom";

function DeleteLinks() {
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
        <div className="col-12">
          <Link to="/destinations/delete" style={linkStyle}>
            Delete Destinations
          </Link>
        </div>
        <div className="col-12">
          <Link to="/facts/delete" style={linkStyle}>
            Delete Facts
          </Link>
        </div>
        <div className="col-12">
          <Link to="/accommodations/delete" style={linkStyle}>
            Delete Accommodation
          </Link>
        </div>
        <div className="col-12">
          <Link to="/basicinfo/delete" style={linkStyle}>
            Delete Basic Infos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeleteLinks;
