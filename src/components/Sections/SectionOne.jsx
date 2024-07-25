import React from "react";
import Props_one from "./Props_one";
import Props_two from "./Props_two";
import "bootstrap/dist/css/bootstrap.min.css";

const imageUrl = "https://i.imgur.com/MTYfhft.jpeg";
const two = "https://i.imgur.com/1MuvhWe.jpeg";
//
const imageU = "https://i.imgur.com/mMFrZnc.jpeg";
const two2 = "https://i.imgur.com/ixW3jOA.jpeg";
const three3 = "https://i.imgur.com/PImm8O2.jpeg";

function SectionOne() {
  return (
    <div className="section container">
      <div className="section-title text-center my-4">Best Destinations</div>
      <div className="section-content">
        <Props_one imageUrl={imageUrl} content="Gonder, my birthplace" />
        <Props_two imageUrl={imageU} content={"Ert ale ,in semera dalun"} />
        <Props_one imageUrl={two2} content="Second Jerusalem" />
        <Props_two
          imageUrl={three3}
          content="nile or ABAY Fountain chis abay"
        />
        <Props_one imageUrl={two} content="Aksume the acient city " />
      </div>
    </div>
  );
}

export default SectionOne;
