import React, { useState } from "react";
import "./Header.css";
import HeaderProps from "./HeaderProps";

const aboutEthiopiaItems = [
  { name: "Facts", link: "/pages/Facts.html" },
  { name: "History", link: "#" },
  { name: "Culture", link: "#" },
  { name: "Location", link: "#" },
  { name: "Religion", link: "#" },
  { name: "Government", link: "#" },
];

const destinationItems = [
  { name: "Aksum", link: "#" },
  { name: "Lalibela", link: "#" },
  { name: "Gondar", link: "#" },
  { name: "Gegole", link: "#" },
  { name: "Danakil", link: "#" },
  { name: "Lake Tana", link: "#" },
  { name: "Aksum Tsion", link: "#" },
  { name: "Hamer", link: "#" },
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
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="header container-fluid">
      <div className="header-nav">
        <a className="header-nav-logo" href="#">
          <span className="text-green">ETH</span>
          <span className="text-yellow">IOP</span>
          <span className="text-red">IA</span>
        </a>
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
          className={`navbar-collapse ${isNavCollapsed ? "collapse" : "show"}`}
        >
          <ul className="header-nav-main">
            <HeaderProps title="About Ethiopia" items={aboutEthiopiaItems} />
            <HeaderProps title="Destinations" items={destinationItems} />
            <HeaderProps title="ThingsToDo" items={thingsToDoItems} />
            <HeaderProps title="BasicInfo" items={basicInfoItems} />
          </ul>
          <a className="header-nav-help btn" href="pages/register.html">
            Sign-Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
