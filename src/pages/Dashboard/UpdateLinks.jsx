import React from "react";
import { Link } from "react-router-dom";

function UpdateLinks() {
  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="row mt-2">
        <div className="row">
          <Link
            to="/destinations/update"
            className="btn btn-link w-100 text-center"
          >
            Update Destinations
          </Link>
        </div>
        <div className="row">
          <Link to="/facts/update" className="btn btn-link w-100 text-center">
            Update Facts
          </Link>
        </div>
        <div className="row">
          <Link
            to="/accommodations/update"
            className="btn btn-link w-100 text-center"
            aria-disabled="true"
          >
            Update Accommodation
          </Link>
        </div>
        <div className="row">
          <Link
            to="/basicinfo/update"
            className="btn btn-link w-100 text-center"
            aria-disabled="true"
          >
            Update Basic Infos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpdateLinks;
