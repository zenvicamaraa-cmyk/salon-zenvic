import React, { useState } from 'react';
import './PromoPage.css';
import logo from '../assets/images/logo.jpg'; // Add your logo here

function PromoPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate Brevo API here
    setStatus('Guides sent to your inbox!');
  };

  return (
    <div className="promo-container">
      {/* Guide Section */}
      <section className="guide-section">
        <h1>5 Salon Marketing Hacks to Get 30% More Clients</h1>
        <p>Plus 5 bonus guides delivered instantly to your inbox</p>
        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Me the Guides</button>
        </form>
        {status && <p className="status">{status}</p>}
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2>Pricing & Onboarding</h2>
        <p>
          Pricing is discussed with a closer after a short qualification DM. Prices are kept personalized.
        </p>
        <a href="https://instagram.com/zenvicmedia" className="dm-button">DM to Qualify</a>
      </section>

      {/* Footer
      <footer className="footer">
        <div className="footer-top">
          <a href="https://instagram.com/zenvicmedia">Instagram</a>
          <a href="https://facebook.com/zenvicmedia">Facebook</a>
        </div>
        <div className="footer-bottom">
          <img src={logo} alt="Zenvic Media Logo" className="footer-logo" />
          <p>Zenvic Media — Salon growth specialists</p>
          <p>© 2025 Zenvic Media. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default PromoPage;