// components/TodoCard.js
import React from "react";
import PropTypes from "prop-types";
import "./ThingsTodo.css";

const Activities = ({ imgSrc, title, description }) => {
  let maxLength = 50;
  // function trunicate() {
  //   if (description.length > maxLength) {
  //     let des = description.slice(0, maxLength) + "...";
  //   }
  //   return des;
  // }

  return (
    <div className="card p-2" style={{ width: "20rem", height: "300px" }}>
      <img
        src={imgSrc}
        className="card-img-top"
        alt={title}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <h6 className="card-title text-center pt-2">{title}</h6>
      <p className="card-text fs-6 flex-grow-1 text-left ">{description}</p>
      <a href="#">Read More</a>
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
