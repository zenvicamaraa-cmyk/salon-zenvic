import React from 'react';
import './ShallonChallenges.css';

function SalonChallenges() {
  const challenges = [
    {
      title: "Struggling with empty chairs?",
      description: "We run targeted local campaigns + urgency promos to fill them fast."
    },
    {
      title: "Relying only on referrals?",
      description: "We build a consistent pipeline so you stop depending on chance."
    },
    {
      title: "Ads that don’t work?",
      description: "We optimize creatives, offers and funnels specifically for salons."
    },
  ];
  const newChalleges = [ {
    title: "Trouble selling products?",
    description: "We design bundles and in-salon promos that convert service clients into product buyers."
  },
  {
    title: "Need more reach on Instagram / Facebook / X?",
    description: "Organic Reels + targeted ads to grow local, engaged followers who book."
  }];
  return (
    <section className="salon-section">
      <h2 className="salon-heading">Is this your salon right now?</h2>
      <div className="salon-grid">
        {challenges.map((item, index) => (
          <div className="salon-box" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="salon-grid-2">
        {newChalleges.map((item, index) => (
          <div className="salon-box" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SalonChallenges;