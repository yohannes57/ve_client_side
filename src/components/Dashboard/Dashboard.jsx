import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard container-fluid m-5 align-text-center">
      <div className="container">
        <ul className="row">
          <li>
            <Link to="/destination">addDestination</Link>
          </li>
          <li>
            <Link to="/accomodation">addAccomodation</Link>
          </li>
          <li>
            <Link to="/basicinfo">addBasicInfos</Link>
          </li>
          <li>
            <Link to="/facts">addFacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
