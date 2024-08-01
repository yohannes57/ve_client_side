// components/MainArticle.js
import React from "react";
import { Link } from "react-router-dom";
const MainArticles = ({ title, description, imgSrc }) => {
  return (
    <div className="col-md-8">
      <img src={imgSrc} alt={title} className="img-fluid mb-2" />
      <h6 className="fw-bold  text-left">{title}</h6>
      <p className="text-left">{description}</p>
    </div>
  );
};

export default MainArticles;
