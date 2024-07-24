import React from "react";
import Props_one from "./Props_one";
import Props_two from "./Props_two";
import "bootstrap/dist/css/bootstrap.min.css";

const imageUrl =
  "https://cdn.getyourguide.com/img/location/5a1d399eb5dfc.jpeg/86.webp";
const two =
  "https://cdn.getyourguide.com/img/location/5a0865f86eef6.jpeg/86.webp";
const three =
  "https://cdn.getyourguide.com/img/location/1981_25588.jpg/86.webp";

function SectionOne() {
  return (
    <div className="section container">
      <div className="section-title text-center my-4">Best Destinations</div>
      <div className="section-content">
        <Props_one imageUrl={imageUrl} content="Gonder, my birthplace" />
        <Props_two
          imageUrl={imageUrl}
          content={"My life depends on this education"}
        />
        <Props_one imageUrl={two} content="Second Jerusalem" />
        <Props_two imageUrl={three} content="Erta Ale, the live fire water" />
      </div>
    </div>
  );
}

export default SectionOne;
