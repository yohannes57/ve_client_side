import React from "react";
import { Outlet } from "react-router-dom";
import { useStateValue } from "./StateProvider/StateProvider";

const ProtectedRoute = () => {
  const { cookies } = useStateValue().auth;
  return cookies.token ? (
    <Outlet />
  ) : (
    <h1>You are not Authorized to view:sorry</h1>
  );
};

export default ProtectedRoute;
