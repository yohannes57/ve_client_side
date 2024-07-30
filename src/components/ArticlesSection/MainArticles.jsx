// components/MainArticle.js
import React from "react";
import { Link } from "react-router-dom";
const MainArticles = ({ title, description, imgSrc }) => {
  return (
    <div className="col-md-6">
      <img src={imgSrc} alt={title} className="img-fluid mb-2" />
      <h6 className="fw-bold mb-2 text-left">{title}</h6>
      <p className="text-left">{description}</p>
      <Link to={"/"}>Read More Articles</Link>
    </div>
  );
};

export default MainArticles;
