import React from "react";
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>What Zenvic Media Delivers</h2>
      <div className="services__cards">
        <div className="card">
          <h3>Consistent New Bookings</h3>
          <p>A steady flow of high-value clients every week through paid + organic channels.</p>
        </div>
        <div className="card">
          <h3>More Retail Revenue</h3>
          <p>Bundles + aftercare strategies that raise average ticket value.</p>
        </div>
        <div className="card">
          <h3>Less No-Shows</h3>
          <p>Automated reminders and confirmations that reduce no-shows and cancellations.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
