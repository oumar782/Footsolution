import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import "../style/contact.css"; // Import du fichier CSS

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <div className="contact-badge">Contact</div>
          <h2 className="contact-title">Prêt à optimiser vos réservations ?</h2>
          <p className="contact-description">
            Contactez-nous pour une démonstration personnalisée ou pour obtenir plus d&apos;informations.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <h3 className="contact-card-title">Demande de démonstration</h3>
            <p className="contact-card-description">
              Remplissez le formulaire ci-dessous pour être contacté par notre équipe.
            </p>
          </div>
          <div className="contact-card-content">
            {submitted ? (
              <div className="contact-success">
                <CheckCircle2 className="contact-success-icon" />
                <h3 className="contact-success-title">Demande envoyée !</h3>
                <p className="contact-success-message">
                  Merci pour votre intérêt. Notre équipe vous contactera dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-grid">
                  <div className="contact-form-group">
                    <label htmlFor="first-name" className="contact-form-label">
                      Prénom
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="Jean"
                      required
                      className="contact-form-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="last-name" className="contact-form-label">
                      Nom
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      placeholder="Dupont"
                      required
                      className="contact-form-input"
                    />
                  </div>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jean.dupont@example.com"
                    required
                    className="contact-form-input"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="company" className="contact-form-label">
                    Entreprise
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Nom de votre entreprise"
                    required
                    className="contact-form-input"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="fields" className="contact-form-label">
                    Nombre de terrains
                  </label>
                  <select
                    id="fields"
                    defaultValue="1-2"
                    className="contact-form-select"
                  >
                    <option value="1-2">1-2 terrains</option>
                    <option value="3-5">3-5 terrains</option>
                    <option value="6-10">6-10 terrains</option>
                    <option value="10+">Plus de 10 terrains</option>
                  </select>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    placeholder="Partagez-nous vos besoins spécifiques..."
                    rows={4}
                    className="contact-form-textarea"
                  />
                </div>
                <button type="submit" className="contact-form-button">
                  Demander une démo
                </button>
              </form>
            )}
          </div>
          <div className="contact-card-footer">
            <p className="contact-card-footer-text">
              Vous préférez nous appeler ? Contactez-nous au{" "}
              <strong>01 23 45 67 89</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}