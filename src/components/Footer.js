import React from 'react';
import './Footer.css';
import logo from '../assets/images/logo.jpg'; // Adjust path if needed

function Footer() {
  return (
    <footer className="footer">
      {/* Left: Logo + Tagline */}
      <div className="footer-left">
        <img src={logo} alt="Zenvic logo" className="footer-logo" />
        <p>Zenvic Media — Growing with specialists.</p>
      </div>

      {/* Center: Social Links */}
      <div className="footer-center">
        <a href="https://instagram.com/zenvicmedia" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://facebook.com/zenvicmedia" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>

      {/* Right: Copyright */}
      <div className="footer-right">
        <p>© 2023 Zenvic Media. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;