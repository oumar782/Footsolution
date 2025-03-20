import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Import des composants
import Header from "./composant/headers.jsx";
import Footer from "./composant/Footer.jsx";
import Hero from "./composant/Hero.jsx";
import Features from "./composant/Features.jsx";
import Statistics from "./composant/Statistics.jsx";
import Tarifs from "./composant/Tarifs.jsx";
import Personnalisable from "./composant/Personnalisable.jsx";
import Contact from "./composant/Contact.jsx";
import Homepage from "./pages/Homepages.jsx";
import Images from "./composant/imageslider.jsx";

const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Remplace par ton ID

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <TrackPageView />
      <Header />
      <div className="main-content">
        <Routes>
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
      <Footer />
    </Router>
  );
};

export default App;
