import React, { useState, useEffect, useRef } from 'react';
import '../style/ims.css';
import { Link } from "react-router-dom";

// Chemin optimisé pour Vercel
const heroImage = process.env.PUBLIC_URL + '/images/hero-image.webp';

const ImageSlider = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const lcpElementRef = useRef(null);

  const texts = [
    "Gérez mieux vos terrains.",
    "Simplifiez vos réservations.",
    "Gérez mieux vos créneaux.",
    "Maximisez vos revenus.",
    "Profitez des interfaces fluides.",
  ];

  useEffect(() => {
    if (lcpElementRef.current) {
      lcpElementRef.current.style.willChange = 'contents';
      lcpElementRef.current.style.opacity = 1;
    }
  }, []);

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
      <div className="video-background">
        <img
          src={heroImage}
          alt="Terrain de football FootSpace"
          className="background-image"
          loading="eager"
          width="1920"
          height="1080"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = process.env.PUBLIC_URL + '/images/fallback.webp';
          }}
        />
        <div className="video-overlay"></div>
      </div>

      <div className="content">
        <div className="textss">
          <h1>
            <span className="typewriter">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p ref={lcpElementRef} className="lcp-optimized">
            Révolutionnez la gestion de vos terrains de football avec FootSpace Solutions.
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