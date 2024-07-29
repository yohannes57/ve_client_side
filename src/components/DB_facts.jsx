import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useStateValue } from "../pages/StateProvider/StateProvider";
function DB_facts() {
  const [destdata, setDestData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/facts")
      .then((response) => {
        setDestData(response.data.facts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="col-12">
        <h2>A Few Facts ,Make Ethiopia Unique somewhat,</h2>
      </div>
      {destdata.map((data) => (
        <div key={data.id} className="row mb-4">
          <div className="col-md-6 d-flex flex-column justify-content-center text-center">
            <h1>{data.title}</h1>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <p>{data.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DB_facts;
