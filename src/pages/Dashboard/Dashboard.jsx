import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";

function Dashboard() {
  const { logout } = useStateValue().auth;

  let nav = useNavigate();
  const handleLogout = () => {
    logout();
    nav("/");
  };
  return (
    <div className="dashboard container-fluid m-5 align-text-center">
      <div className="container">
        <ul className="row">
          <li>
            <Link to="/destination col-md-4">addDestination</Link>
          </li>
          <li>
            <Link to="/accomodation col-md-4">addAccomodation</Link>
          </li>
          <li>
            <Link to="/basicinfo col-md-4">addBasicInfos</Link>
          </li>
          <li>
            <Link to="/facts col-md-4">addFacts</Link>
          </li>
        </ul>
        <button className="col-4 align-center" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
