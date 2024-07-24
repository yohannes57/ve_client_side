import React from "react";

function Props_two({ imageUrl, content }) {
  return (
    <div className="row mb-4 align-items-center">
      <div className="col-md-6">
        <p>{content}</p>
      </div>
      <div className="col-md-6">
        <img src={imageUrl} alt="sectionImage" className="img-fluid" />
      </div>
    </div>
  );
}

export default Props_two;
