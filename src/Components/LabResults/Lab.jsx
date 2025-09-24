import React, { useState } from "react";
import "./Lab.css";
import download from '../../assets/Media/Icons/download.png'

export default function LabResults({ data }) {
  const [selected, setSelected] = useState("CT Scans");

  return (
    <div className="lab-results-container">
      <h2 className="lab-title">Lab Results</h2>
      <div className="lab-list">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className={`lab-item ${item === selected ? "selected" : ""}`}
              onClick={() => setSelected(item)}>
              <span>{item}</span>
              <img src={download} alt="" style={{width:16}} />
            </div>
          ))
        ) : (
          <p className="lab-empty">No lab results found.</p>
        )}
      </div>
    </div>
  );
}
