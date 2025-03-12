"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import "../style/tarif.css";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Idéal pour les petites structures avec 1 à 2 terrains",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Jusqu'à 2 terrains",
        "Réservations en ligne",
        "Paiements intégrés",
        "Tableau de bord basique",
        "Support par email",
      ],
      limitations: ["Personnalisation limitée", "Pas d'application mobile", "Statistiques basiques"],
    },
    {
      name: "Pro",
      description: "Pour les complexes sportifs avec plusieurs terrains",
      monthlyPrice: 179,
      annualPrice: 149,
      popular: true,
      features: [
        "Jusqu'à 5 terrains",
        "Réservations en ligne",
        "Paiements intégrés",
        "Tableau de bord avancé",
        "Statistiques détaillées",
        "Application mobile",
        "Personnalisation avancée",
        "Support prioritaire",
      ],
    },
    {
      name: "Enterprise",
      description: "Solution complète pour les grands complexes sportifs",
      monthlyPrice: 349,
      annualPrice: 299,
      features: [
        "Terrains illimités",
        "Réservations en ligne",
        "Paiements intégrés",
        "Tableau de bord premium",
        "Statistiques avancées",
        "Application mobile personnalisée",
        "Personnalisation complète",
        "API dédiée",
        "Support 24/7",
        "Gestionnaire de compte dédié",
      ],
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="containerz">
        <div className="headerz">
          <div className="badgez">Tarifs</div>
          <h2>Des forfaits adaptés à vos besoins</h2>
          <p>Choisissez la formule qui correspond le mieux à la taille de votre structure.</p>
        </div>

        <div className="billing-switch">
  <span className={!isAnnual ? "active" : ""}>Mensuel</span>
  <label className="switch">
    <input
      type="checkbox"
      checked={isAnnual}
      onChange={(e) => setIsAnnual(e.target.checked)}
    />
    <span className="slider"></span>
  </label>
  <span className={isAnnual ? "active" : ""}>
    Annuel <span className="discount">-20%</span>
  </span>
</div>


        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <div className="popular-badge">Populaire</div>}

              <div className="card-header">
                <h3 className="plan-title">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="price-container">
                  <p className="price">{isAnnual ? plan.annualPrice : plan.monthlyPrice}€</p>
                  <p className="price-period">/mois</p>
                </div>
                {isAnnual && (
                  <p className="annual-price">Facturé annuellement ({plan.annualPrice * 12}€)</p>
                )}
              </div>

              <div className="card-content">
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Check className="icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.limitations &&
                    plan.limitations.map((limitation, i) => (
                      <li key={i} className="limitation">
                        <span>✕</span>
                        <span>{limitation}</span>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="card-footer">
                <button className={plan.popular ? "primary-button" : "outline-button"}>Commander</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
