import React, { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import "../style/Personnalisable.css";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="grid">
          <div className="content">
            <div className="text-content">
              <h1>Optimisez vos réservations avec FootSpace Solutions</h1>
              <p>
                Simplifiez la gestion de vos terrains de football grâce à notre solution de réservation en ligne. Maximisez vos revenus et offrez une expérience fluide à vos clients.
              </p>
            </div>
          </div>
          <div
            className="card-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="card">
              <div className="card-header">
                <h3>Réservation de terrain</h3>
                <Calendar className="calendar-icon" />
              </div>
              <div className="calendar-grid">
                {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                  <div
                    key={i}
                    className={`day ${
                      i === 2 || i === 4
                        ? "primary-bg"
                        : i === 3
                        ? "orange-bg"
                        : "muted-bg"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="time-slots">
                <div className="slot muted-bg">
                  <Clock className="icon" />
                  <span>10:00 - 11:30</span>
                  <Users className="icon" />
                  <span>5/10</span>
                </div>
                <div className="slot primary-bg-light" >
                  <Clock className="icon primary-text" />
                  <span className="primary-text">14:00 - 15:30</span>
                  <Users className="icon primary-text"  />
                  <span className="primary-text">8/10</span>
                </div>
                <div className="slot muted-bg">
                  <Clock className="icon" />
                  <span>18:00 - 19:30</span>
                  <Users className="icon" />
                  <span>2/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-overlay"></div>
    </section>
  );
}