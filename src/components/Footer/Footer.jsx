import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div id="footer">
        <div id="footer-wrapper">
          {/* <div id="footer-img">
        <a href="/index.html"><img src="/images/ethiopia.jpg" style="width: 100px;" alt=""></a>
      </div> */}
          <div>
            <h5>AboutEthiopia</h5>
            <ul className="footerList">
              <li>
                <a className="dropdown-item" href="/pages/Facts.html">
                  Facts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  History
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Culture
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Location
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Religion
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Goverment
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Destination</h5>
            <ul className="footerList">
              <li>
                <a className="dropdown-item" href="#">
                  Aksum
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Lalibela
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Goder
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Gegole
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dalon
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Tana
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Aksume-Tsion
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hamer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>ThingsToDo</h5>
            <ul className="footerList">
              <li>
                <a className="dropdown-item" href="#">
                  Feeding Hyna
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dalon,to the deepes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hiking toRas Dashin
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Facts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Religion
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Goverment
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>BasicInfo</h5>
            <ul className="footerList">
              <li>
                <a className="dropdown-item" href="#">
                  VisaProcess
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Transportation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Food and clothes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Safty
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  money wise
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Accomodation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social-links">
          <div className="footer-links">
            <h6>social links</h6>
            <ul>
              <li>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-x-twitter"></i>
                  </span>
                  X
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-youtube"></i>
                  </span>
                  youtube
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                  instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-tiktok"></i>
                  </span>
                  Tiktok
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-telegram"></i>
                  </span>
                  telegeram
                </a>
              </li>
            </ul>
          </div>
          <div id="copyright">
            <li>
              <span>
                &copy; Right Reserved! <i>2024</i>
              </span>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
