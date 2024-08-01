import React from "react";

function ReadMore({ readmore }) {
  return (
    <div>
      <div className="text-center mt-2">
        <button className="btn btn-outline-dark">{readmore}</button>
      </div>
    </div>
  );
}

export default ReadMore;
