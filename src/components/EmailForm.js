

import React, { useState } from 'react';
import axios from 'axios';
import './EmailForm.css';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Step 1: Try to add user to Brevo Contacts
      try {
        await axios.post(
          process.env.REACT_APP_BREVO_CONTACTS_URL,
          {
            email,
            attributes: { FIRSTNAME: "Subscriber" },
            listIds: [] // Optional: add your Brevo list ID
          },
          {
            headers: {
              'api-key': process.env.REACT_APP_BREVO_API_KEY,
              'Content-Type': 'application/json'
            }
          }
        );
      } catch (contactError) {
        if (contactError.response?.data?.code === "duplicate_parameter") {
          console.log(`${email} already exists in contacts.`);
        } else {
          throw contactError;
        }
      }

      // Step 2: Send email with guide links
      await axios.post(
        process.env.REACT_APP_BREVO_EMAIL_URL,
        {
          sender: {
            name: process.env.REACT_APP_SENDER_NAME,
            email: process.env.REACT_APP_SENDER_EMAIL
          },
          to: [{ email }],
          subject: "Your Free Salon Marketing Guides",
          htmlContent: `
            <h2>Thanks for signing up!</h2>
            <p>Thank you again for your interest and for connecting! As promised, I’m sharing a few free, easy-to-use guides packed with actionable tips to help boost bookings, increase client loyalty, and simplify your salon’s marketing – no pressure or obligations attached. 💗 You’ll find the downloadable PDFs attached to this email. Feel free to review them at your own pace, and use any ideas that fit your business. If you have any questions, I’m always here to help. 🤩
</p>
            <p>Also, let me know if you’d like to schedule a time to dive deeper into personalized strategies! Whenever you’re ready, I’d love to schedule our no-cost 10-min Zoom session to discuss how our proven strategies can be tailored to your salon’s unique needs. Worst case you lose 10 minutes, best case you find something that actually gives you more time back. 🤩
</p>
            <p>Here are your 5 salon marketing hacks and bonus guides:</p>
            <ul>
              <li><a href="https://drive.google.com/uc?export=download&id=1B3i7OQqRcEtbnCLcCmyLdAmIUNnDkOrX" target="_blank">5 Salon Marketing Hacks to Get 30% More Clients</a></li>
              <li><a href="https://drive.google.com/uc?export=download&id=1gesZ22IzRHkPKLQ86LThC0tsiB8i9tf-" target="_blank">Calendar & Promotion Ideas</a></li>
              <li><a href="https://drive.google.com/uc?export=download&id=1YjQww1CTdk3hmFLghzaiSqtersw9o-Gs" target="_blank">Effective Rebooking Scripts</a></li>
              <li><a href="https://drive.google.com/uc?export=download&id=1RYQV9avI1OMbfd1LEmnBAbHgWYFdXylA" target="_blank">Loyalty Card & Referral Program Tips</a></li>
              <li><a href="https://drive.google.com/uc?export=download&id=1lQ-2aoCutt-vjP0Pe1V6vzsq4scMFwJQ" target="_blank">Post Visit Follow-Up Checklist</a></li>
              <li><a href="https://drive.google.com/uc?export=download&id=1NE72_ruB0h_-A9LQVBKC8-ZFUGoYsWf8" target="_blank">Staff Training Tips & Rebooking Prompts</a></li>
            </ul>
            <p> Wishing you lots of continued success,</p>
            <p>Amara </p>
            <p>Zenvic Media</p>
            <a href="mailto:amara.zenvic@gmail.com">amara.zenvic@gmail.com</a>

          `
        },
        {
          headers: {
            'api-key': process.env.REACT_APP_BREVO_API_KEY,
            'Content-Type': 'application/json'
          }
        }
      );

      setStatus('✅ Guides sent successfully!');
    } catch (error) {
      console.error(error);
      setStatus('❌ Failed to send guides. Please try again.');
    }
  };

  return (
    <div>
      <form className="email-form" onSubmit={handleSubmit}>
        <h2>Get the free guide</h2>
        <p>5 Salon Marketing Hacks to Get 30% More Clients — Plus 5 bonus guides delivered instantly to your inbox</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className='email-btn'>Send Me the Guides</button>
        <p>
          We never share your email. By signing up you agree to receive occasional messages from Zenvic Media.
        </p>
        <p className="status">{status}</p>
      </form>

      <section className="pricing-section">
        <h2>Pricing & Onboarding</h2>
        <p>
          Pricing is discussed with a closer after a short qualification DM. Prices are kept personalized.
        </p>
        <a href="https://instagram.com/zenvicmedia" className="dm-button">DM to Qualify</a>
      </section>
    </div>
  );
}

export default EmailForm;