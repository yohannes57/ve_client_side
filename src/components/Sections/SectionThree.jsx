import React from "react";
import "./SectionThree.css";
import Props_for_three from "./Props_for_three";

//---------------------------
const imageUrl =
  "https://cdn.getyourguide.com/img/location/5a1d399eb5dfc.jpeg/86.webp";
const two =
  "https://cdn.getyourguide.com/img/location/5a0865f86eef6.jpeg/86.webp";
const three =
  "https://cdn.getyourguide.com/img/location/1981_25588.jpg/86.webp";

//---------------------------
function SectionThree() {
  return (
    <div className="container-fluid">
      <div className="row m-3">
        <h3>Some Destiantions</h3>
      </div>
      <div className="container section-three">
        <Props_for_three
          imageUrl={imageUrl}
          title="gonder"
          paragraph="ondar, located in the Amhara region of northwest Ethiopia, was once the royal capital of Ethiopia."
        />
        <Props_for_three
          imageUrl={two}
          title="lalibela"
          paragraph="Lalibela, situated in the Amhara region of northern Ethiopia,which were carved out of solid rock in the 12th century."
        />
        <Props_for_three
          imageUrl={three}
          title="hamer"
          paragraph="The Danakil Depression, located in the Afar region of northeastern Ethiopia, is one of the hottest and most inhospitable places on Earth"
        />
      </div>
    </div>
  );
}

export default SectionThree;
