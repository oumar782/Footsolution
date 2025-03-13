import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/Logo Diané (1).png";

import "../style/Header.css"; // Importez le fichier CSS

const headers = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Détecte si l'écran est en mode mobile

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mettre à jour l'état en fonction de la largeur de l'écran
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo" style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
          {/* Titre à côté du logo */}
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "bold",
              fontSize: isMobile ? "18px" : "24px", // Taille de police réduite en mode mobile
              marginLeft: "10px",
              display: "flex",
              gap: "8px", // Espacement entre les mots
            }}
          >
            <span style={{ textShadow: "1px 1px 0px rgb(252, 254, 253)" }}>FootSpace</span>
            <span style={{ textShadow: "2px 2px 0px rgb(223, 231, 224)" }}>Solutions</span>
          </h1>
        </div>

        {/* Menu pour les écrans larges */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <Link to="/accueil" className="nav-link">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/features" className="nav-link">
                Fonctionnalités
              </Link>
            </li>
            <li>
              <Link to="/statistics" className="nav-link">
                Statistiques
              </Link>
            </li>
            <li>
              <Link to="/tarifs" className="nav-link">
                Tarifs
              </Link>
            </li>
            <li>
              <Link to="/personnaliser" className="nav-link">
                Personnalisation
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Menu hamburger pour les écrans mobiles */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className="hamburger-icon">&#9776;</span>
        </button>

        {/* Menu mobile (apparaît lorsqu'il est ouvert) */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            <li>
              <Link to="/accueil" className="nav-link" onClick={toggleMobileMenu}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/features" className="nav-link" onClick={toggleMobileMenu}>
                Fonctionnalités
              </Link>
            </li>
            <li>
              <Link to="/statistics" className="nav-link" onClick={toggleMobileMenu}>
                Statistiques
              </Link>
            </li>
            <li>
              <Link to="/tarifs" className="nav-link" onClick={toggleMobileMenu}>
                Tarifs
              </Link>
            </li>
            <li>
              <Link to="/personnaliser" className="nav-link" onClick={toggleMobileMenu}>
                Personnalisation
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default headers;