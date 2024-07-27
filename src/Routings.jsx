import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/BannerMap/Banner";
import SeciontONe from "./components/Sections/SectionOne";
import SectionThree from "./components/Sections/SectionThree";
import SignUp from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddDestinationForm from "./pages/Dashboard/AddDestination_form";

//---------------------------
function Routings() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Banner />
            <SeciontONe />
            <SectionThree />
            <Footer />
          </>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/destination" element={<AddDestinationForm />} />
      </Route>
    </Routes>
  );
}

export default Routings;
