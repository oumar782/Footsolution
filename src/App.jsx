import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import des composants
import Header from "./composant/headers.jsx"; // Import du Header
import Footer from "./composant/Footer.jsx"; // Import du Footer
import Hero from "./composant/Hero.jsx"; // Import du Hero
import Features from "./composant/Features.jsx"; // Import des fonctionnalités
import Statistics from "./composant/Statistics.jsx"; // Import des statistiques
import Tarifs from "./composant/Tarifs.jsx"; // Import des tarifs
import Personnalisable from "./composant/Personnalisable.jsx"; // Import de la page Personnalisable
import Contact from "./composant/Contact.jsx"; // Import de la page Contact
import Homepage from "./pages/Homepages.jsx"; // Import de la page d'accueil
import Images from "./composant/imageslider.jsx"; // Import du slider image

const App = () => {
  return (
    <Router>
      {/* Affichage du Header en haut de toutes les pages */}
      <Header />
      
      {/* Contenu principal qui change en fonction des routes */}
      <div className="main-content">
        <Routes>
          {/* Redirection vers la page d'accueil */}
          <Route path="/" element={<Navigate to="/accueil" />} />
          <Route path="/accueil" element={<Homepage />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/personnaliser" element={<Personnalisable />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ima" element={<Images />} />
        </Routes>
      </div>

      {/* Affichage du Footer sur toutes les pages */}
      <Footer />
    </Router>
  );
};

export default App;
