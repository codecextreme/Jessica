import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Sidebar.css";
import hori from "../../assets/Media/Icons/hori.png";
import search from "../../assets/Media/Icons/search.png";

export default function PatientSidebar({ data, onSelect }) {
  const [selected, setSelected] = useState("Jessica Taylor");

  const handleSelect = (patient) => {
    setSelected(patient.name);
    onSelect(patient); // Send selected patient to parent
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h3>Patients</h3>
        <img src={search} alt="" className="search-icon" />
      </div>

      <div className="patient-list">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((patient, index) => {
            const isSelected = patient.name === selected;
            return (
              <div
                key={index}
                className={`patient-item ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelect(patient)}
              >
                <img
                  src={patient.profile_picture}
                  alt={patient.name}
                  className="patient-avatar"
                />
                <div className="patient-info">
                  <div className="patient-name">{patient.name}</div>
                  <div className="patient-details">
                    {patient.gender}, {patient.age}
                  </div>
                </div>
                <img src={hori} alt="" className="ellipsis-icon" />
              </div>
            );
          })
        ) : (
          <p style={{ padding: "10px", color: "#999" }}>Loading patients...</p>
        )}
      </div>
    </div>
  );
}
