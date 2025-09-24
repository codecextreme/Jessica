import React from 'react'
import './Navbar.css'
import logo from '../../assets/Media/Images/logo.png'
import home from '../../assets/Media/Icons/home.png'
import message from '../../assets/Media/Icons/message.png'
import calender from '../../assets/Media/Icons/calender.png'
import patients from '../../assets/Media/Icons/patients.png'
import transaction from '../../assets/Media/Icons/transaction.png'
import setting from '../../assets/Media/Icons/setting.png'
import more from '../../assets/Media/Icons/more.png'
import doctor from '../../assets/Media/Images/doctor.png'

export default function Navbar() {
  return (
    <div className='navbar'>
     <div className="logo">
        <img src={logo} className='logo-img' />
     </div>
     <div className="nav-links">
        <ul>
            <div className="icon-div">
              <img src={home} alt="" />
            <li>Overview</li>
            </div>
            <div className="icon-div active">
              <img src={patients} alt="" style={{width:20, height:15}} />
            <li>Patients</li>
            </div>
            <div className="icon-div">
              <img src={calender} alt="" />
            <li>Schedule</li>
            </div>
            <div className="icon-div">
              <img src={message} alt="" />
            <li>Message</li>
            </div>
            <div className="icon-div">
              <img src={transaction} alt="" />
            <li>Transaction</li>
            </div>
        </ul>
     </div>
     <div className="dr-profile">
      <img src={doctor} alt="" style={{width:40}} />
      <p>Dr. Jose Simmons <br /><span style={{color:'#707070'}}>General Practitioner</span></p>
      <div className="line"></div>
      <img src={setting} alt="" style={{width:18,marginLeft:5,cursor:'auto'}}/>
      <img src={more} alt="" style={{width:4,marginLeft:5,cursor:"auto"}} />
     </div>
    </div>
  )
}
