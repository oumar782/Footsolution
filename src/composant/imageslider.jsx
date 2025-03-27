import React, { useState, useEffect, useRef } from 'react';
import '../style/ims.css';
import videoFile from '../assets/Video/Firefly Vidéo promotionnelle dynamique et moderne pour Foot Space Réservé, une application de réserv (1).mp4';
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const videoRef = useRef(null);
  const lcpElementRef = useRef(null);

  const texts = [
    "Gérez vos mieux terrains.",
    "Simplifiez vos réservations.",
    "Gérez mieux vos créneaux.",
    "Maximisez vos revenus.",
    "Profitez des interfaces fluides.",
  ];

  // Optimize video loading and LCP element rendering
  useEffect(() => {
    if (lcpElementRef.current) {
      lcpElementRef.current.style.willChange = 'contents';
      lcpElementRef.current.style.opacity = 1;
    }

    const video = videoRef.current;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";

    const handleCanPlay = () => {
      video.play().catch(e => console.log("Autoplay blocked:", e));
    };

    video.addEventListener('canplay', handleCanPlay, { once: true });
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  // Typewriter effect
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
  }, [text, isDeleting, loopNum]);

  return (
    <div className="homepage" id="home">
      {/* Video background */}
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Vidéo de promotion de Foot Space Réservé"
        >
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Main content */}
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