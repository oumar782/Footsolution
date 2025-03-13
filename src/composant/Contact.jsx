import React from 'react';
import "../style/contact.css";
const Contact = () => {
    return (
        <div className="containeer">
            <section className="contact-section">
                <div className="contact-header">
                    <span className="contact-badge">Contact</span>
                    <h1 className="contact-title">Prêt à optimiser vos réservations ?</h1>
                    <p className="contact-description">
                        Contactez-nous pour une démonstration personnalisée ou pour obtenir plus d'informations.
                    </p>
                </div>
                <div className="contact-card">
                    <div className="contact-card-header">
                        <h2 className="contact-card-title">Demande de démonstration</h2>
                        <p className="contact-card-description">
                            Remplissez le formulaire ci-dessous pour être contacté par notre équipe.
                        </p>
                    </div>
                    <form className="contact-form">
                        <div className="contact-form-grid">
                            <div className="contact-form-group">
                                <label htmlFor="prenom" className="contact-form-label">Prénom</label>
                                <input type="text" id="prenom" className="contact-form-input" defaultValue="Jean" />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="nom" className="contact-form-label">Nom</label>
                                <input type="text" id="nom" className="contact-form-input" defaultValue="Dupont" />
                            </div>
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="email" className="contact-form-label">Email</label>
                            <input type="email" id="email" className="contact-form-input" defaultValue="jean.dupont@example.com" />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="entreprise" className="contact-form-label">Entreprise</label>
                            <input type="text" id="entreprise" className="contact-form-input" placeholder="Nom de votre entreprise" />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="terrains" className="contact-form-label">Nombre de terrains</label>
                            <select id="terrains" className="contact-form-select">
                                <option value="1-2">1-2 terrains</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="message" className="contact-form-label">Message (optionnel)</label>
                            <textarea id="message" className="contact-form-textarea" placeholder="Partagez-nous vos besoins spécifiques..." />
                        </div>
                        <button type="submit" className="contact-form-button">Envoyer</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;