import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/Logo Diané (1).png";

import "../style/Header.css"; // Importez le fichier CSS

const headers = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
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