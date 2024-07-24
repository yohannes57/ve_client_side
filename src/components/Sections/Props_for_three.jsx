import React from "react";

function Props_for_three({ imageUrl, title, paragraph }) {
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={imageUrl} alt="Image Description" />
        </div>
        <div className="card-description">
          <h3>{title}</h3>
          <p>{paragraph}</p>
          <a href="your-link-url">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default Props_for_three;
