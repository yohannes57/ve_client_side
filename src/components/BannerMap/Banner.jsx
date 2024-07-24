import React from "react";
import "./Banner.css";
import MapContainer from "./MapContainer";
const myGoodmapi = "AIzaSyBuI2t7_BcfN - KtgkzQjf5DAgwMoVgm1kE";
function Banner() {
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.061891044947!2d39.04688242460745!3d12.03350109605127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1641dd6c5efb5e11%3A0x1eac731c6f1f1a6a!2sLalibela!5e0!3m2!1sen!2set!4v1653943568916!5m2!1sen!2set";
  return (
    <div className="banner">
      <MapContainer embedUrl={embedUrl} />
    </div>
  );
}

export default Banner;
