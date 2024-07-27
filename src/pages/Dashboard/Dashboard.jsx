import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Dashboard.css";

function Dashboard() {
  const { logout } = useStateValue().auth;

  let nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/");
  };

  return (
    <div className="dashboard container-fluid d-flex flex-column align-items-center">
      <div className="container text-center">
        <h1 className="mb-4">Dashboard</h1>
        <div className="mb-4">
          <Link to="/dashboard/destination" className="btn btn-primary mx-2">
            Add Destination
          </Link>
          <Link to="/dashboard/accomodation" className="btn btn-secondary mx-2">
            Add Accommodation
          </Link>
          <Link to="/dashboard/basicinfo" className="btn btn-success mx-2">
            Add Basic Info
          </Link>
          <Link to="/dashboard/facts" className="btn btn-info mx-2">
            Add Facts
          </Link>
        </div>
        <div className="mb-4">
          <button className="btn btn-warning mx-2" onClick={handleLogout}>
            Logout
          </button>
          <button className="btn btn-danger mx-2">Delete</button>
          <button className="btn btn-warning mx-2">Update</button>
          <button className="btn btn-warning mx-2">Settings</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
