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
    <div className="section-three">
      <Props_for_three
        imageUrl={imageUrl}
        title="Ertale"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam,
      vero, deserunt vitae repellendus fugit debitis ea saepe corrupti dicta et
      ratione dignissimos minus quia velit tempore cupiditate. Quos, sint."
      />
      <Props_for_three
        imageUrl={two}
        title="Ertale"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam,
      vero, deserunt vitae repellendus fugit debitis ea saepe corrupti dicta et
      ratione dignissimos minus quia velit tempore cupiditate. Quos, sint."
      />
      <Props_for_three
        imageUrl={three}
        title="Ertale"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam,
      vero, deserunt vitae repellendus fugit debitis ea saepe corrupti dicta et
      ratione dignissimos minus quia velit tempore cupiditate. Quos, sint."
      />
    </div>
  );
}

export default SectionThree;
