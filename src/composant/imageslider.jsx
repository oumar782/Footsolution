import React, { useState, useEffect } from 'react';
import '../style/ims.css';
import videoFile from '../assets/Video/Firefly Vidéo promotionnelle dynamique et moderne pour Foot Space Réservé, une application de réserv (1).mp4';
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    "Révolutionnez la gestion de vos terrains de football avec FootSpace Solutions",
    "Simplifiez la réservation, optimisez vos créneaux horaires",
    "Maximisez vos revenus avec une expérience moderne et fluide",
  ];

  useEffect(() => {
    const handleType = () => {
      const currentText = texts[loopNum % texts.length];
      const updatedText = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause avant de supprimer
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts]);

  return (
    <section className="homepage" id="home">
      <div className="video-background">
        <video autoPlay muted loop playsInline aria-label="Vidéo de promotion de Foot Space Réservé">
          <source src={videoFile} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
      </div>
      <div className="content">
        <div className="textss">
          <h1>
            <span className="typewriter">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p>
            Simplifiez la réservation, optimisez vos créneaux horaires, et maximisez vos revenus, tout en offrant à vos
            clients une expérience moderne et fluide.
          </p>
        </div>
        <div className="ok">
          <a
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', backdropFilter: 'blur(10px)' }}
            href="/contact"
          >
            Demander une démo →
          </a>
          <a
            style={{ backgroundColor: 'rgba(8, 8, 8, 0.5)', backdropFilter: 'blur(10px)' }}
            href="/features"
          >
            Découvrir les fonctionnalités
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;