import React from "react";
import { mapOption } from "../data";
const MapOptions = () => {
  const mapOptionsList = mapOption.map((option) => (
    <div key={option.id} className="options-list">
      <div>
        <label className="switch">
          <input type="checkbox" checked={option.isChecked} />
          <div></div>
        </label>
      </div>
      <div className="options-title-container">
        <div>{option.text}</div>
        <div className="options-subtext">{option.subText}</div>
      </div>
    </div>
  ));
  return <div className="options-container">{mapOptionsList}</div>;
};

export { MapOptions };
