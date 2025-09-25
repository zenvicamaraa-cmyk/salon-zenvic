import React from 'react';
import './Testimonials.css';
import { motion } from 'framer-motion';


// Import your images
import ameliaImg from '../assets/testimonials/amelia.jpg';
import sophiaImg from '../assets/testimonials/sophia.jpg';
import eleniImg from '../assets/testimonials/eleni.jpg';
import lucaImg from '../assets/testimonials/luca.jpg';
import isabellaImg from '../assets/testimonials/isabella.jpg';
import oliviaImg from '../assets/testimonials/olivia.jpg';


function Testimonials() {
  const testimonials = [
    {
      image: ameliaImg,
      country: "Canada",
      role: "salon owner",
      name: "Amelia",
      quote: "Within a month, my salon was fully booked. I never thought ads could bring this many clients. Amazing team!"
    },
    {
      image: sophiaImg,
      country: "Canada",
      role: "salon owner 2",
      name: "Sophia",
      quote: "I was struggling to get new clients. These guys helped me scale my salon and automate bookings. Highly recommend!"
    },
    {
      image: eleniImg,
      country: "Cyprus",
      role: "salon owner",
      name: "Eleni",
      quote: "From slow weeks to fully booked weekends — Zenvic’s approach really works."
    },
    {
      image: lucaImg,
      country: "Italy",
      role: "salon owner",
      name: "Luca",
      quote: "My revenue is up, and I finally have time to focus on my clients instead of chasing leads."
    },
    {
      image: isabellaImg,
      country: "Italy",
      role: "Hair Stylist",
      name: "Isabella Rossi",
      quote: "I finally raised my prices with confidence. Thanks to Zenvic Media, my calendar is full and my clients are happier than ever."
    },
    {
      image: oliviaImg,
      country: "Canada",
      role: "Spa Director",
      name: "Olivia Brown",
      quote: "Our Instagram was dead before. With Zenvic’s content strategy, our weekends are now fully booked a month ahead."
    }
  ];

  {/* <section className="testimonials-section">
      <h2 className="testimonials-heading">Salon Owners Who Love Zenvic</h2>
      <div className="testimonials-scroll">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <div className="testimonial-info">
              <h4 className="testimonial-name">{t.name}</h4>
              <p className="testimonial-role">{t.role} — {t.country}</p>
              <p className="testimonial-quote">“{t.quote}”</p>
            </div>
          </div>
        ))}
      </div>
      <p className="testimonial-note">
        Testimonials from salon owners across UK, Canada, Italy, Cyprus and the USA.
      </p>
    </section> */}
  return (


    <section className="testimonials-section">
    <h2 className="testimonials-heading">Salon Owners Who Love Zenvic</h2>
    <p className="scroll-note">Swipe or scroll → to see more testimonials</p>
    <div className="testimonials-scroll">
      {testimonials.map((t, index) => (
        <motion.div
          className="testimonial-card"
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        >
          <img src={t.image} alt={t.name} className="testimonial-img" />
          <div className="testimonial-info">
            <h4 className="testimonial-name">{t.name}</h4>
            <p className="testimonial-role">{t.role} — {t.country}</p>
            <p className="testimonial-quote">“{t.quote}”</p>
          </div>
        </motion.div>
      ))}
    </div>
    <span className="scroll-hint">→</span>
    <p className="testimonial-note">
      Testimonials from salon owners across UK, Canada, Italy, Cyprus and the USA.
    </p>
  </section>



  );
}

export default Testimonials;
