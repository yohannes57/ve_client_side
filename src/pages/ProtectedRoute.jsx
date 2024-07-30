import React from "react";
import { Outlet } from "react-router-dom";
import { useStateValue } from "./StateProvider/StateProvider";

const ProtectedRoute = () => {
  const { cookies, login, signup, logout } = useStateValue().auth;
  // an Outlet is a component that serves as a placeholder for rendering nested routes.
  return cookies.token ? (
    <Outlet />
  ) : (
    <h1 style={{ color: "red" }}>Access denied</h1>
  );
};

export default ProtectedRoute;
