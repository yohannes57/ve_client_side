import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div
      id="footer"
      className="py-6 container-fluid"
      style={{ paddingTop: "50px" }}
    >
      <div id="footer-wrapper" className="container">
        <div className="row text-align-left">
          <div className="col-md-3">
            <h5 className="text-left">About Ethiopia</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  className="dropdown-item text-left p-1"
                  href="/pages/Facts.html"
                >
                  Facts
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  History
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Culture
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Location
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Religion
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Government
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-left">Destination</h5>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Aksum
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Lalibela
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Gonder
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Gegole
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Dalon
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Tana
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Aksume-Tsion
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Hamer
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-left">Things To Do</h5>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Feeding Hyena
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Dalon, to the deepest
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Hiking to Ras Dashin
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Facts
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Religion
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Government
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-left">Basic Info</h5>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Visa Process
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Transportation
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Food and clothes
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Safety
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Money wise
                </a>
              </li>
              <li>
                <a className="dropdown-item text-left p-1" href="#">
                  Accommodation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4 text-align-left">
          <div className="col">
            <h6>Social Links</h6>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa-brands fa-facebook"></i> Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i> X
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa-brands fa-youtube"></i> YouTube
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa-brands fa-tiktok"></i> TikTok
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa-brands fa-telegram "></i> Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; 2024 Right Reserved!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
