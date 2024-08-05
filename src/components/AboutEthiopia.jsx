import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AboutEthiopia() {
  const { nameId } = useParams();
  const [destination, setDestination] = useState([]);
  //access each destinations with matching its collection name
  useEffect(() => {
    async function fetchDestination() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/aboutethiopia/${nameId}`
        );
        setDestination(response.data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDestination();
  }, [nameId]);
  console.log(destination);
  if (!destination) {
    return <div>Loading...</div>;
  }
  // console.log(nameId);
  //function for switch among list
  function switchAmongList(det) {
    switch (nameId) {
      case "history":
        return <p>{det.history}</p>;
      case "culture":
        return <p>{det.culture}</p>;
      case "location":
        return <p>{det.location}</p>;
      case "religion":
        return <p>{det.religion}</p>;
      case "government":
        return <p>{det.government}</p>;
      default:
        return <></>;
    }
  }
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <h2 className="col-12 text-align-center">About Ethiopia</h2>
      <div className="row mb-4">
        <h3 className="text-center col-12 p-2">{nameId}</h3>
        <div className="col-md-12 text-left p-4 justify-content-center align-items-center">
          {destination.map((det, index) => (
            <div key={index}>{switchAmongList(det)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutEthiopia;
