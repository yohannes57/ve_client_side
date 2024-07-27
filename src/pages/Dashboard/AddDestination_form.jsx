import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddDestinationForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    highLights: "",
    thingsToDo: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      highLights: formData.highLights
        .split(",")
        .map((highLight) => highLight.trim()),
      thingsToDo: formData.thingsToDo.split(",").map((thing) => thing.trim()),
      location: {
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude),
      },
    };
    setFormData("");
    try {
      await axios.post("http://localhost:3000/api/destination", payload);
      alert("Destination added successfully");
    } catch (error) {
      console.error("Error adding destination:", error);
      alert("Failed to add destination");
    }
  };

  return (
    <div className="dashboard_addform container mt-5">
      <div className="row">
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <Link className="btn btn-secondary" to={"/dashboard"}>
            Back To Main Page
          </Link>
        </div>
        <div className="col-md-10">
          <h2 className="mt-4">Add New Destination</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              // value={formData.name}
              onChange={handleChange}
              placeholder="Nameof the place: Required"
              className="form-control"
              required
            />
            <textarea
              name="description"
              // value={formData.description}
              onChange={handleChange}
              placeholder="Description Required"
              className="form-control"
              required
            />
            <input
              type="text"
              name="imageUrl"
              // value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Image URL ,required"
              className="form-control"
              required
            />
            <input
              type="text"
              name="highLights"
              // value={formData.highLights}
              onChange={handleChange}
              placeholder="Highlights (comma separated),Optional"
              className="form-control"
            />
            <input
              type="text"
              name="thingsToDo"
              // value={formData.thingsToDo}
              onChange={handleChange}
              placeholder="Things to Do (comma separated) Optional"
              className="form-control"
            />
            <input
              type="number"
              name="latitude"
              // value={formData.latitude}
              onChange={handleChange}
              placeholder="Latitude Optional"
              className="form-control"
              required
            />
            <input
              type="number"
              name="longitude"
              // value={formData.longitude}
              onChange={handleChange}
              placeholder="Longitude Optional"
              className="form-control"
              required
            />
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDestinationForm;
