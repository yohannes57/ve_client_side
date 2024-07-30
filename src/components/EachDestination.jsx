import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EachDestination() {
  const { destinationname } = useParams();
  const [destination, setDestination] = useState(null);

  //access each destinations with matching its collection name
  useEffect(() => {
    async function fetchDestination() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/destinations/${destinationname}`
        );
        setDestination(response.data.destination);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDestination();
  }, [destinationname]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <h2 className="col-12 text-align-center">Most Favored Destinations</h2>
      <div className="row mb-4">
        <div className="col-md-6 d-flex flex-column justify-content-center text-center">
          <h1>{destination.name}</h1>
          <p>{destination.description}</p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default EachDestination;
