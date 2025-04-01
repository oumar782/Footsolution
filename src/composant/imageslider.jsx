// src/components/ImageSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../style/ims.css';
import images from "../../assets/images/chatgpt-image.png";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const lcpElementRef = useRef(null);

  const texts = [
    "Gérez vos mieux terrains.",
    "Simplifiez vos réservations.",
    "Gérez mieux vos créneaux.",
    "Maximisez vos revenus.",
    "Profitez des interfaces fluides.",
  ];

  // Optimisation du rendu
  useEffect(() => {
    if (lcpElementRef.current) {
      lcpElementRef.current.style.willChange = 'contents';
      lcpElementRef.current.style.opacity = 1;
    }
  }, []);

  // Effet machine à écrire
  useEffect(() => {
    const handleType = () => {
      const currentText = texts[loopNum % texts.length];
      const updatedText = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 75 : 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts]);

  return (
    <div className="homepage" id="home">
      {/* Fond d'écran avec image */}
      <div className="video-background">
        <img
          src={images}
          alt="Promotion Foot Space Réservé"
          className="background-image"
          loading="eager"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Image de repli
          }}
        />
        <div className="video-overlay"></div>
      </div>

      {/* Contenu principal */}
      <div className="content">
        <div className="textss">
          <h1>
            <span className="typewriter">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p ref={lcpElementRef} className="lcp-optimized">
            Révolutionnez la gestion de vos terrains de football avec FootSpace Solutions. Simplifiez la réservation, optimisez vos créneaux et maximisez vos revenus, tout en offrant à vos clients une expérience moderne et fluide.
          </p>
        </div>
        <div className="ok">
          <Link to="/contact" className="cta-button">
            Demander une démo →
          </Link>
          <Link to="/features" className="cta-button secondary">
            Découvrir les fonctionnalités
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;