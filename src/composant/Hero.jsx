import React, { useState } from "react";
import "../style/hero.css";
import Features from "./Features"; // Assurez-vous que Features.jsx utilise export default
import Statistics from "./Statistics"; // Assurez-vous que Statistics.jsx utilise export default
import Tarifs from "./Tarifs"; // Assurez-vous que Tarifs.jsx utilise export default
import Personalisable from "./Personnalisable.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="grid-container">
            <div className="content">
              <h1>FootspaceReserve<span className="primary">.</span></h1>
              <p>Optimisez la gestion de vos terrains de football avec notre solution de réservation en ligne.</p>
              <div className="buttons">
                <a href="#contact" className="primary-button">
                  Demander une démo →
                </a>
                <a href="/features" className="outline-button">
                  Découvrir les fonctionnalités
                </a>
              </div>
            </div>
            <div
              className="calendar-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`calendar-card ${isHovered ? "hovered" : ""}`}>
                <h3>Réservation de terrain 📅</h3>
                <div className="days-grid">
                  {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                    <div
                      key={i}
                      className={`day-cell ${i === 2 || i === 4 ? "primary-bg" : "muted-bg"}`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="time-slots">
                  {["10:00 - 11:30", "14:00 - 15:30", "18:00 - 19:30"].map((time, i) => (
                    <div key={i} className="time-slot">
                      <span className="clock-icon">🕒</span> {time}
                      <span className="users-icon">👤</span> {Math.floor(Math.random() * 10) + 1}/10
                    </div>
                  ))}
                </div>
                <button className="reserve-button">Réserver maintenant</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Composants placés hors de la section principale */}
      <Features />
      <Statistics />
      <Tarifs />
      <Personalisable/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Hero;