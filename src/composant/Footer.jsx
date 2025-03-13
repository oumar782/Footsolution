import React from "react";
import "../style/footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="containersss">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Footspace Solutions</h3>
            <p>
              La solution complète pour la gestion et la réservation de vos terrains de football.
            </p>
            <div className="social-links">
  <a href="#" className="social-link" style={{ color: 'white' }}>
    <i className="fab fa-facebook-f"></i> {/* Icône Facebook */}
    <span className="sr-only">Facebook</span>
  </a>
  <a href="#" className="social-link" style={{ color: 'white' }}>
    <i className="fab fa-instagram"></i> {/* Icône Instagram */}
    <span className="sr-only">Instagram</span>
  </a>
  <a href="#" className="social-link" style={{ color: 'white' }}>
    <i className="fab fa-twitter"></i> {/* Icône Twitter */}
    <span className="sr-only">Twitter</span>
  </a>
  <a href="#" className="social-link" style={{ color: 'white' }}>
    <i className="fab fa-linkedin-in"></i> {/* Icône LinkedIn */}
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
              <li style={{ color: 'white' }}>
                <i className="icon-map-pin"></i>
                <p>rue de bethune, Casablanca,Maroc </p>
              </li>
              <li>
                <i className="icon-phone" style={{ color: 'white' }}></i>
                <p>+212 0721976288/0688112830</p>
              </li>
              <li>
                <i className="icon-mail"></i>
                <p>contact@footspacesolutions.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Footspace Solutions. Tous droits réservés.</p>
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