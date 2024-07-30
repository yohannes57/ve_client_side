// components/ThingsToDo.js
import React from "react";
import Activities from "./Activities";

const ThingsToDo = () => {
  const todos = [
    {
      imgSrc:
        "https://cdn.getyourguide.com/img/location/5a1d399eb5dfc.jpeg/86.webp",
      title: "Visit Lalibela",
      description:
        "Discover the rock-hewn churches of Lalibela, a UNESCO World Heritage site.",
    },
    {
      imgSrc:
        "https://cdn.getyourguide.com/img/location/5a0865f86eef6.jpeg/86.webp",
      title: "Explore Addis Ababa",
      description:
        "Experience the vibrant culture and history of Ethiopia's capital city.",
    },
    {
      imgSrc:
        "https://cdn.getyourguide.com/img/location/1981_25588.jpg/86.webp",
      title: "Hike Simien Mountains",
      description:
        "Enjoy breathtaking views and unique wildlife in the Simien Mountains.",
    },
  ];
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>ThingsToDo visiting Ethiopia</h2>
        <a href="/thingstodo" className="btn btn-outline-primary">
          Find More
        </a>
      </div>
      <div className="row">
        {todos.map((todo, index) => (
          <div key={index} className="col-md-4 mb-4 d-flex">
            <Activities {...todo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToDo;
