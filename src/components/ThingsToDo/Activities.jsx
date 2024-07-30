// components/TodoCard.js
import React from "react";
import PropTypes from "prop-types";

const Activities = ({ imgSrc, title, description }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={imgSrc}
        className="card-img-top"
        alt={title}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
      </div>
    </div>
  );
};

//for props ,is type script feature to deterine the props time
Activities.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Activities;
