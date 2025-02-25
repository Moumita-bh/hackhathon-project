import React, { useState } from "react";
import { FaSearch, FaHome, FaTh, FaComment, FaUsers, FaBell, FaPencilAlt } from "react-icons/fa";
import "./Navbar.css"; // Import the CSS file
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [darkMode] = useState(false);

  return (
    <div className="navbar-container">
      {/* Navbar */}
      <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
        {/* Logo */}
        <h1 className="logo">SimpliTrain</h1>

        {/* Search Bar */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="What would you like to learn?" />
        </div>

        {/* Nav Icons */}
        <div className="nav-icons">
          <NavItem Icon={FaHome} text="Home" />
          <NavItem Icon={FaTh} text="Categories" />
          <NavItem Icon={FaComment} text="Chat" />
          <NavItem Icon={FaUsers} text="Forum" />
          <NavItem Icon={FaBell} text="Notification" />
        </div>

        {/* Dark Mode Toggle Button */}
        <ToggleButton />
      </nav>

      {/* ✅ Sidebar & Gray Rectangle Wrapper */}
      <div className="content-container">
        {/* Sidebar */}
        <Sidebar />

        {/* ✅ Gray Rectangle - Aligned with Sidebar */}
        <div className="gray-rectangle">
          {/* Profile Box */}
          <div className="profile-box">
            {/* Profile Circle */}
            <div className="profile-circle">
              <div className="edit-circle">
                <FaPencilAlt className="edit-icon" />
              </div>
            </div>

            {/* Name */}
            <h3 className="profile-name">Rakesh Raushan</h3>

            {/* Profile Details */}
            <div className="profile-detail">
              <div className="detail-item">
                <div className="detail-icon"></div>
                <span>Profile</span>
              </div>
              <div className="detail-item">
                <div className="detail-icon"></div>
                <span>Education</span>
              </div>
              <div className="detail-item">
                <div className="detail-icon"></div>
                <span>Work Experience</span>
              </div>
            </div>
          </div>

          {/* ✅ Personal Info Box - Placed on the Right */}
          <div className="personal-info-box">
            <div className="header">
              <h3 className="personal-info-heading">Personal Information</h3>
              <button className="edit-button">
                <span className="edit-text">Edit</span>
                <FaPencilAlt className="pencil-icon" />
              </button>
            </div>

            {/* ✅ Personal Details */}
            <div className="info-section">
              <div className="label">First Name</div>
              <div className="value">Rohan</div>

              <div className="label">Last Name</div>
              <div className="value">Raushan</div>

              <div className="label">Age</div>
              <div className="value">35</div>

              <div className="label">Gender</div>
              <div className="value">Male</div>

              <div className="label">Address</div>
              <div className="value">
                2nd Floor, 99, 5th Cross Rd, 6th Block, Koramangala, Bengaluru, Karnataka 560095
              </div>
            </div>
          </div>
        </div>
       
      </div> {/* ✅ Closing `content-container` div properly */}
      
    </div>

  );
};

// ✅ Reusable Nav Item Component
const NavItem = ({ Icon, text }) => (
  <div className="nav-item">
    <Icon className="nav-icon" />
    <span>{text}</span>
  </div>
);

// ✅ Toggle Button Component
const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className={`toggle-container ${isToggled ? "active" : ""}`}
      onClick={() => setIsToggled(!isToggled)}
    >
      <div className="toggle-ellipse"></div> {/* Gray Ellipse */}
      <div className="toggle-bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
