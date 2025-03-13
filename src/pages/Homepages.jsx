
import React, { useState } from "react";
import Header from "../composant/headers.jsx"; // Header ici
import Hero from "../composant/Hero.jsx";
import Images from "../composant/imageslider.jsx"; // Import du slider image
import Features from "../composant/Features.jsx"; // Import des fonctionnalités
import Statistics from "../composant/Statistics.jsx"; // Import des statistiques
import Tarifs from "../composant/Tarifs.jsx"; // Import des tarifs
import Personnalisable from "../composant/Personnalisable.jsx"; // Import de la page Personnalisable
import Contact from "../composant/Contact.jsx"; // Import de la page Contact

const Homepages = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Header />
      <Images />
      <Hero /> 
      <Features />
      <Statistics />
      <Tarifs />
      <Personnalisable />
      <Contact />





       
        
    </>
  );
};

export default Homepages;