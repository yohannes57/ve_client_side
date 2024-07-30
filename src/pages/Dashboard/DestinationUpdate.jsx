import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";

function DestinationUpdate() {
  const [{ user, data }, dispatch] = useStateValue().state;
  const [destinations, setDestinations] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    highLights: "",
    thingsToDo: "",
    latitude: "",
    longitude: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  //---------------------get all destination ,to choose from it
  useEffect(() => {
    async function fetchDestinations() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/destination"
        );
        setDestinations(response.data.destinations);
      } catch (error) {
        console.error("Failed to fetch destinations", error);
      }
    }
    //envok inside
    fetchDestinations();
  }, []);

  //---------------- Fetch the existing destination data when the component mounts
  useEffect(() => {
    async function fetchDestination() {
      if (!selectedId) return;
      try {
        const response = await axios.get(
          `http://localhost:3000/api/destination/${selectedId}`
        );
        const destination = response.data.destination;

        setFormData({
          name: destination.name || "",
          description: destination.description || "",
          imageUrl: destination.imageUrl || "",
          highLights: Array.isArray(destination.highLights)
            ? destination.highLights.join(", ")
            : "",
          thingsToDo: Array.isArray(destination.thingsToDo)
            ? destination.thingsToDo.join(", ")
            : "",
          latitude: destination.location?.latitude?.toString() || "",
          longitude: destination.location?.longitude?.toString() || "",
        });
      } catch (error) {
        console.error("Failed to fetch destination data", error);
      }
    }

    fetchDestination();
  }, [selectedId]);

  // Handle submit and different method used to change ,different type of data type like array,trim,split map to make
  //to make accessable
  async function handleSubmit(e) {
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

    try {
      await axios.put(
        `http://localhost:3000/api/destination/${selectedId}`,
        payload
      );
      console.log("destinations succeffully updated");
      alert("The collection succeffully Updated");
    } catch (error) {
      console.log("Update not successful", error);
    }
  }

  return (
    <div className="dashboard_addform container mt-5">
      <div className="row">
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <Link className="btn btn-secondary" to={"/dashboard"}>
            Back To Main Page
          </Link>
        </div>
        <div className="col-md-10">
          <h2 className="mt-4">Update Destination</h2>
          <form onSubmit={handleSubmit}>
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="form-control mb-3"
              style={{ color: "red" }}
            >
              <option value="" disabled>
                Select a destination to update
              </option>
              {destinations.map((destination, index) => (
                <option key={index} value={destination._id}>
                  {destination.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Name of the place: Required"
              className="form-control"
              required
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description Required"
              className="form-control"
              required
            />
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Image URL, Required"
              className="form-control"
              required
            />
            <input
              type="text"
              name="highLights"
              value={formData.highLights}
              onChange={handleChange}
              placeholder="Highlights (comma separated), Optional"
              className="form-control"
            />
            <input
              type="text"
              name="thingsToDo"
              value={formData.thingsToDo}
              onChange={handleChange}
              placeholder="Things to Do (comma separated), Optional"
              className="form-control"
            />
            <input
              type="number"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              placeholder="Latitude, Required"
              className="form-control"
              required
            />
            <input
              type="number"
              name="longitude"
              value={data.latitude}
              onChange={handleChange}
              placeholder="Longitude, Required"
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

export default DestinationUpdate;
