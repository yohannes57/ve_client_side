import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DeleteCollections() {
  const [selectedId, setSelectedId] = useState("");
  const [destinations, setDestinations] = useState([]);

  //-----get the destination availiable from db and choose to delete
  useEffect(() => {
    async function fetchDestination() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/destination`
        );
        setDestinations(response.data.destinations);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDestination();
  }, []);

  //---------------
  function hundleSubmit(e) {
    e.preventDefault();
    try {
      axios.delete(`http://localhost:3000/api/destination/${selectedId}`);
      alert("Deletion successfulled");
    } catch (error) {
      console.error("sth wrong with delete api", error);
      alert("sth wrong");
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
        <div className="col-md-8 ml-2">
          <h2 className="mt-4">delete Destination</h2>
          <form onSubmit={hundleSubmit}>
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
            <button type="submit">delete</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteCollections;
