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
import UpdateLinks from "./pages/Dashboard/UpdateLinks";
import DestinationUpdate from "./pages/Dashboard/DestinationUpdate";
import DeleteCollections from "./pages/Dashboard/DeleteCollections";
import DeleteLinks from "./pages/Dashboard/DeleteLinks.jsx";
import Settings from "./pages/Dashboard/Settings.jsx";
// dynamic page
import DB_data from "./components/DB_data.jsx";
import DB_facts from "./components/DB_facts";
import EachDestination from "./components/EachDestination.jsx";
import MainArticles from "./components/ArticlesSection/MainArticles.jsx";
import ArticleSection from "./components/ArticlesSection/ArticleSection.jsx";
import ThingsToDo from "./components/ThingsToDo/ThingsToDo.jsx";
import NotFound from "./components/NotFound.jsx";
import FeedBack from "./components/FeedBack/FeedBack.jsx";
import AboutEthiopia from "./components/AboutEthiopia.jsx";

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
            <ArticleSection />
            <ThingsToDo />
            <FeedBack />

            <Footer />
          </>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/destination" element={<AddDestinationForm />} />
        <Route path="/dashboard/update" element={<UpdateLinks />} />
        <Route path="/destinations/update/" element={<DestinationUpdate />} />
        <Route path="/dashboard/delete" element={<DeleteLinks />} />
        <Route path="/destinations/delete" element={<DeleteCollections />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Route>
      {/* dynamically redered */}
      <Route
        path="/destinations"
        element={
          <>
            <DB_data />
            <Footer />
          </>
        }
      />
      <Route
        path="/destinations/:destinationname"
        element={
          <>
            <EachDestination />
            <Footer />
          </>
        }
      />
      <Route
        path="/aboutethiopia/:nameId"
        element={
          <>
            <AboutEthiopia />
            <Footer />
          </>
        }
      />
      <Route
        path="/aboutethiopia/facts"
        element={
          <>
            <DB_facts />
            <Footer />
          </>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routings;
