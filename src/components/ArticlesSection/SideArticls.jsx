// components/SidebarArticle.js
import React from "react";
import { Link } from "react-router-dom";

const SideArticls = ({ title, imgSrc }) => {
  return (
    <>
      <div className="mb-2 md-6 d-flex">
        <img
          src={imgSrc}
          alt={title}
          className="img-fluid me-2"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
        <div>
          <h6 className="text-left ">{title}</h6>
        </div>
      </div>
    </>
  );
};

export default SideArticls;
