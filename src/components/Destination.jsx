import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Destination() {
  const { destinationname } = useParams;
  const [destination, setDestination] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/destination/${destinationname}`)
      .then((response) => {
        setDestination(response.data.destinations);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="" alt="image-missed" />
        </div>
        <div className="col-6">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            consectetur quam aperiam in? Perspiciatis, vitae at itaque inventore
            quibusdam molestiae obcaecati esse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Destination;
