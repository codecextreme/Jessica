import React from "react";
import "./Profile.css";
import dob from '../../assets/Media/Icons/dob.png'
import female from '../../assets/Media/Icons/female.png'
import contact from '../../assets/Media/Icons/contact.png'
import secure from '../../assets/Media/Icons/secure.png'


const PatientInfoCard = (props) => {
  return (
    <div className="patient-card">
      <img src={props.img} alt={props.name} className="patient-img" />
      <h2 className="patient-name">{props.name}</h2>

      <div className="info-item">
        <img src={dob} alt="" style={{width:35}}/>
        <div>
          <div className="label">Date Of Birth</div>
          <div className="value">{props.dateOfBirth}</div>
        </div>
      </div>

      <div className="info-item">
        <img src={female} alt="" style={{width:35}}/>
        <div>
          <div className="label">Gender</div>
          <div className="value">{props.gender}</div>
        </div>
      </div>

      <div className="info-item">
        <img src={contact} alt="" style={{width:35}}/>
        <div>
          <div className="label">Contact Info.</div>
          <div className="value">{props.contact}</div>
        </div>
      </div>

      <div className="info-item">
        <img src={contact} alt="" style={{width:35}}/>
        <div>
          <div className="label">Emergency Contacts</div>
          <div className="value">{props.emergencyContact}</div>
        </div>
      </div>

      <div className="info-item">
        <img src={secure} alt="" style={{width:35}}/>
        <div>
          <div className="label">Insurance Provider</div>
          <div className="value">{props.insurance}</div>
        </div>
      </div>

      <button className="show-button">Show All Information</button>
    </div>
  );
};

export default PatientInfoCard;
