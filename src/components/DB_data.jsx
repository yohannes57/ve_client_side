import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../pages/StateProvider/StateProvider";

function DB_data() {
  const [{ user, data }, dispatch] = useStateValue().state; //access the state
  const [destdata, setDestData] = useState([]);

  //fetch the data from teh db destinations
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/destination")
      .then((response) => {
        setDestData(response.data.destinations);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // console.log(destdata);
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <h2 className="col-12 text-align-center">Most Faviored Destinations</h2>
      {destdata.map((data, index) => (
        <div key={index} className="row mb-4">
          <div className="col-md-6 d-flex flex-column justify-content-center text-center">
            <h1>{data.name}</h1>
            <p className="text-left p-1">{data.description}</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={data.imageUrl} alt="image" className="img-fluid" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DB_data;
