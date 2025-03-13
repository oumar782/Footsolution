import React, { useState, useEffect } from "react";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";
import "../style/Personnalisable.css";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ["Footspace Solutions", "Gestion de terrains.", "Réservation en ligne."];

  useEffect(() => {
    const handleType = () => {
      const currentText = texts[loopNum % texts.length];
      const updatedText = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause avant de supprimer
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts]);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="grid">
          <div className="content">
            <div className="text-content">
              <h1>
                <span className="typewriters">{text}</span>
                <span className="cursors">|</span>
              </h1>
              <p>
                Optimisez la gestion de vos terrains de football avec notre solution informatique de réservation en ligne. Augmentez
                vos revenus et simplifiez l&apos;expérience de vos clients.
              </p>
            </div>
            
          </div>
          <div
            className="card-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="card-background">
              <div className={`card ${isHovered ? "hovered" : ""}`}>
                <div className="card-header">
                  <h3>Réservation de terrain</h3>
                  <Calendar className="calendar-icon" />
                </div>
                <div className="calendar-grid">
                  {Array.from({ length: 7 }).map((_, i) => (
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
                      {["L", "M", "M", "J", "V", "S", "D"][i]}
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
                  <div className="slot primary-bg-light">
                    <Clock className="icon primary-text" />
                    <span className="primary-text">14:00 - 15:30</span>
                    <Users className="icon primary-text" />
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
      </div>
      <div className="gradient-overlay"></div>
    </section>
  );
}