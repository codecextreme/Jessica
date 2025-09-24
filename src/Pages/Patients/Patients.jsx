import React, { useState, useEffect } from "react";
import "./Patients.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Chart from "../../Components/Chart/Chart";
import Profile from "../../Components/Profile/Profile";
import heart from "../../assets/Media/Images/heart.png";
import lungs from "../../assets/Media/Images/lungs.png";
import bp from "../../assets/Media/Images/bp.png";
import Diagnostic from "../../Components/DiagnosticList/Diagnostic";
import Lab from "../../Components/LabResults/Lab";
import axios from "axios";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    axios
      .get("https://fedskillstest.coalitiontechnologies.workers.dev", {
        auth: {
          username: "coalition",
          password: "skills-test",
        },
      })
      .then((res) => {
        setPatients(res.data);
        setSelectedPatient(res.data[3]);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
      });
  }, []);

  if (!selectedPatient) return <p>Loading...</p>;

  return (
    <div className="patients">
      <Navbar />
      <Sidebar data={patients} onSelect={setSelectedPatient} />

      <div className="main-container">
        <div className="history-box">
          <div className="diagnosis-history">
            <h2>Diagnosis History</h2>
            <div className="chart-box">
              <Chart data={selectedPatient?.diagnosis_history} />
            </div>
            <div className="rate-box">
              <div className="box1">
                <div className="frame">
                  <img src={lungs} alt="" />
                </div>
                <p>Respiratory Rate</p>
                <h2>
                  {selectedPatient?.diagnosis_history?.[0]?.respiratory_rate?.value} bpm
                </h2>
                <span>
                  {selectedPatient?.diagnosis_history?.[0]?.respiratory_rate?.levels}
                </span>
              </div>
              <div className="box2">
                <div className="frame">
                  <img src={bp} alt="" />
                </div>
                <p>Temperature</p>
                <h2>
                  {selectedPatient?.diagnosis_history?.[0]?.temperature?.value}
                  &#176;F
                </h2>
                <span>
                  {selectedPatient?.diagnosis_history?.[0]?.temperature?.levels}
                </span>
              </div>
              <div className="box3">
                <div className="frame">
                  <img src={heart} alt="" />
                </div>
                <p>Heart Rate</p>
                <h2>
                  {selectedPatient?.diagnosis_history?.[0]?.heart_rate?.value} bpm
                </h2>
                <span>
                  {selectedPatient?.diagnosis_history?.[0]?.heart_rate?.levels}
                </span>
              </div>
            </div>
          </div>
          <div className="diagnostic-list">
            <Diagnostic data={selectedPatient?.diagnostic_list} />
          </div>
        </div>
        <div className="profile-box">
          <div className="profile">
            <Profile
              name={selectedPatient?.name}
              dateOfBirth={selectedPatient?.date_of_birth}
              gender={selectedPatient?.gender}
              contact={selectedPatient?.phone_number}
              emergencyContact={selectedPatient?.emergency_contact}
              insurance={selectedPatient?.insurance_type}
              img={selectedPatient?.profile_picture}
            />
          </div>
          <div className="lab-results">
            <Lab data={selectedPatient?.lab_results} />
          </div>
        </div>
      </div>
    </div>
  );
}
