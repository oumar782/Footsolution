import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./composant/Hero";
import Features from "./composant/Features";
import Statistics from "./composant/Statistics";
import Tarifs from "./composant/Tarifs";
import Personalisable from"./composant/Personnalisable.jsx";
import Contact from "./composant/Contact.jsx";
import Footer from "./composant/Footer.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/accueil" />} />
        <Route path="/accueil" element={<Hero />} />
        <Route path="#features" element={<Features />} />
        <Route path="#statistics" element={<Statistics />} />
        <Route path="#tarifs" element={<Tarifs />} />
        <Route path="#personnaliser" element={<Personalisable />}/>
        <Route path="#Contact"element={<Contact/>}/>
        <Route path="/Footer"element={<Footer/>}/>
      </Routes>
    </Router>
  );
};

export default App;