import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/Logo Diané (1).png";
import "../style/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/accueil") {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isHomePage = location.pathname === "/accueil";

  return (
    <header className={`header ${isHomePage ? "accueil" : ""} ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo" style={{ display: "flex", alignItems: "center" }}>
          <Link to="/accueil">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
          <h1 className="logo">
            <span>FootSpace-Solutions</span>
          </h1>
        </div>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><Link to="/accueil" className="nav-link">Accueil</Link></li>
            <li><Link to="/features" className="nav-link">Fonctionnalités</Link></li>
            <li><Link to="/statistics" className="nav-link">Statistiques</Link></li>
            <li><Link to="/tarifs" className="nav-link">Tarifs</Link></li>
            <li><Link to="/personnaliser" className="nav-link">Personnalisation</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className="hamburger-icon">&#9776;</span>
        </button>

        <nav className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/accueil" className="nav-link" onClick={toggleMobileMenu}>Accueil</Link></li>
            <li><Link to="/features" className="nav-link" onClick={toggleMobileMenu}>Fonctionnalités</Link></li>
            <li><Link to="/statistics" className="nav-link" onClick={toggleMobileMenu}>Statistiques</Link></li>
            <li><Link to="/tarifs" className="nav-link" onClick={toggleMobileMenu}>Tarifs</Link></li>
            <li><Link to="/personnaliser" className="nav-link" onClick={toggleMobileMenu}>Personnalisation</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={toggleMobileMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;