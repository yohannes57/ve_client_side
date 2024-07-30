import React from "react";
import { Link } from "react-router-dom";

function Props_for_three({ imageUrl, title, paragraph }) {
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={imageUrl} alt="Image Description" />
        </div>
        <div className="card-description">
          <h3 className="text-center">{title}</h3>
          <p className="text-left p-2">{paragraph}</p>
          <Link to={`/destinations/${title}`}>Reac More</Link>
        </div>
      </div>
    </div>
  );
}

export default Props_for_three;
