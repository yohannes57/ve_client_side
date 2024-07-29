import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Destination() {
  const { destinationname } = useParams;
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    async function fetchDestinaiton() {
      await axios
        .get(`http://localhost:3000/api/destination/${destinationname}`)
        .then((response) => {
          setDestination(response.data.destinations);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    fetchDestinaiton();
  }, [destinationname]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={destination.imageUrl} alt="image-missed" />
        </div>
        <div className="col-6">
          <p>{destination.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Destination;
