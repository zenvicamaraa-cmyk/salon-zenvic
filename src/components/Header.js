import React from 'react';
import './Header.css';
import makeupImage from '../assets/images/makeup.png'; // Image path
import logo from '../assets/images/logo.jpg'; // Add your logo image here

function Header() {
  return (
    <header className="header">
      <div className="header-banner">
        We only onboard 3 new salons per month — DM us on Instagram to secure your spot. 
        <span className="highlight">@zenvicmedia</span> or <span className="highlight">@amara_carter_</span>
      </div>
        <div className="logo-grid">
        <img src={logo} alt="Zenvic Media Logo" className="logo" />
        </div>
      <div className="header-grid">
        {/* Left Grid */}
        
        <div className="header-left" >
          
          <div >
          <h1 className="main-title">
            We Help Salons Get Fully Booked With High-Quality Clients.
          
          </h1>
          </div>
          <p className="subheading">
            Done-for-you salon marketing systems: targeted social ads, organic growth, product & retail systems, and appointment automation. London-based closer to finalize custom plans.
          </p>
          <div className="cta-buttons">
            <a href="https://instagram.com/zenvicmedia" className="cta">Message @zenvicmedia</a>
            <a href="https://instagram.com/amara_carter_" className="cta-1">Message @amara_carter_</a>
          </div>
          <p className="note">
            Prefer a private qualified call? Our closer shares a Calendly link after DM qualification.
          </p>
        </div>

        {/* Right Grid */}
        <div className="header-right">
          <img src={makeupImage} alt="Makeup products" className="makeup-img" />
        </div>
      </div>
    </header>
  );
}

export default Header;