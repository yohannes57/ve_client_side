import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="  py-4 container-fluid">
      <div id="footer-wrapper" className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Ethiopia</h5>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item " href="/pages/Facts.html">
                  Facts
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  History
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Culture
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Location
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Religion
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Government
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Destination</h5>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item " href="#">
                  Aksum
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Lalibela
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Gonder
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Gegole
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Dalon
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Tana
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Aksume-Tsion
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Hamer
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Things To Do</h5>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item " href="#">
                  Feeding Hyena
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Dalon, to the deepest
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Hiking to Ras Dashin
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Facts
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Religion
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Government
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Basic Info</h5>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item " href="#">
                  Visa Process
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Transportation
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Food and clothes
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Safety
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Money wise
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Accommodation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
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
                  <i className="fa-brands fa-telegram"></i> Telegram
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
