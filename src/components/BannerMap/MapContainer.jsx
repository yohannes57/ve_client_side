import React from "react";

function MapContainer({ embedUrl }) {
  return (
    <div className="map-container">
      <iframe
        src={embedUrl}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapContainer;
