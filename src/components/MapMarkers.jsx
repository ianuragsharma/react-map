import React from "react";
import { mapMarkers } from "../data";
const MapMarkers = () => {
  const mapMarkerList = mapMarkers.map((mark) => (
    <div key={mark.id} className="mark-items">
      <span
        className="marker-color"
        style={{ backgroundColor: mark.color }}
      ></span>
      <span>{mark.text}</span>
    </div>
  ));
  return <div className="markers-container">s{mapMarkerList}</div>;
};

export { MapMarkers };
