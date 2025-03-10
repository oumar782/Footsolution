import React from "react";
import "../style/footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>FootspaceReserve</h3>
            <p>
              La solution complète pour la gestion et la réservation de vos terrains de football.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="icon-facebook"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="social-link">
                <i className="icon-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="social-link">
                <i className="icon-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="social-link">
                <i className="icon-linkedin"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Produit</h3>
            <ul className="footer-links">
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#pricing">Tarifs</a></li>
              <li><a href="#">Témoignages</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Ressources</h3>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Centre d'aide</a></li>
              <li><a href="#">Partenaires</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li>
                <i className="icon-map-pin"></i>
                <span>123 Avenue des Sports, 75001 Paris, France</span>
              </li>
              <li>
                <i className="icon-phone"></i>
                <span>01 23 45 67 89</span>
              </li>
              <li>
                <i className="icon-mail"></i>
                <span>contact@footspacereserve.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 FootspaceReserve. Tous droits réservés.</p>
          <div className="footer-legal-links">
            <a href="#">Conditions d'utilisation</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}