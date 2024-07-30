import React, { useState } from "react";
import "./Header.css";
import HeaderProps from "./HeaderProps";
import { Link } from "react-router-dom";
import { useStateValue } from "../../pages/StateProvider/StateProvider";
import SignUp from "../../pages/Signup/Signup";

const aboutEthiopiaItems = [
  { name: "Facts", link: "facts" },
  { name: "History", link: "history" },
  { name: "Culture", link: "culture" },
  { name: "Location", link: "location" },
  { name: "Religion", link: "religion" },
  { name: "Government", link: "government" },
];

const destinationItems = [
  { name: "Axum", link: "axum" },
  { name: "Lalibela", link: "lalibela" },
  { name: "Gondar", link: "gonder" },
  { name: "Gegole", link: "gegole" },
  { name: "Danakil", link: "danakil" },
  { name: "Lake Tana", link: "laketana" },
  { name: "AxumTsion", link: "aksumtsion" },
  { name: "Hamer", link: "hamer" },
];

const thingsToDoItems = [
  { name: "Feeding Hyena", link: "#" },
  { name: "Danakil Depression", link: "#" },
  { name: "Hiking to Ras Dashin", link: "#" },
  { name: "Facts", link: "#" },
  { name: "Religion", link: "#" },
  { name: "Government", link: "#" },
];

const basicInfoItems = [
  { name: "Visa Process", link: "#" },
  { name: "Transportation", link: "#" },
  { name: "Food and Clothes", link: "#" },
  { name: "Safety", link: "#" },
  { name: "Money Wise", link: "#" },
  { name: "Accommodation", link: "#" },
];

function Header() {
  const [{ user, data }, dispatch] = useStateValue().state;
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="header align-items-center mx-auto container-fluid">
      <div className="header-nav">
        <Link to={"/"} className="header-nav-logo">
          <span className="text-green">ETH</span>
          <span className="text-yellow">IOP</span>
          <span className="text-red">IA</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars navbar-toggler-icon"></i>
          </span>
        </button>
        <div
          className={`navbar-collapse ${isNavCollapsed ? "collapse " : "show"}`}
        >
          <ul className="header-nav-main">
            <HeaderProps
              link="aboutethiopia"
              title="About Ethiopia"
              items={aboutEthiopiaItems}
              name={destinationItems.link}
            />
            <HeaderProps
              link="destinations"
              title="Destinations"
              items={destinationItems}
              name={destinationItems.link}
            />
            <HeaderProps
              link="thingstodo"
              title="ThingsToDo"
              items={thingsToDoItems}
            />
            <HeaderProps
              link="basicinfo"
              title="BasicInfo"
              items={basicInfoItems}
            />
          </ul>
          <Link to="/signup" className="header-nav-help btn">
            {user}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
