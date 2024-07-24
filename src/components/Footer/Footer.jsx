import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="bg-brown text-light py-4 container-fluid">
      <div id="footer-wrapper" className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Ethiopia</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  className="dropdown-item text-light"
                  href="/pages/Facts.html"
                >
                  Facts
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  History
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Culture
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Location
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Religion
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Government
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Destination</h5>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item text-light" href="#">
                  Aksum
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Lalibela
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Gonder
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Gegole
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Dalon
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Tana
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Aksume-Tsion
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Hamer
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Things To Do</h5>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item text-light" href="#">
                  Feeding Hyena
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Dalon, to the deepest
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Hiking to Ras Dashin
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Facts
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Religion
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Government
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Basic Info</h5>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item text-light" href="#">
                  Visa Process
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Transportation
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Food and clothes
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Safety
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Money wise
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
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
