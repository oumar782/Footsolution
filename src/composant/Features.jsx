import { Calendar, Clock, CreditCard, BarChart3, Users, Smartphone, Palette, Shield } from "lucide-react";
import "../style/Feature.css"; // Assurez-vous que le chemin est correct

export default function Features() {
  const features = [
    {
      icon: <Calendar className="icon" />,
      title: "Réservation en ligne",
      description:
        "Permettez à vos clients de réserver des créneaux horaires à tout moment, depuis n'importe quel appareil.",
    },
    {
      icon: <Clock className="icon" />,
      title: "Gestion des créneaux",
      description: "Définissez facilement vos disponibilités et gérez votre planning en temps réel.",
    },
    {
      icon: <CreditCard className="icon" />,
      title: "Paiement intégré",
      description: "Acceptez les paiements en ligne et sécurisez vos réservations avec des acomptes.",
    },
    {
      icon: <BarChart3 className="icon" />,
      title: "Analyse des revenus",
      description: "Suivez vos performances financières et optimisez vos tarifs en fonction de la demande.",
    },
    {
      icon: <Users className="icon" />,
      title: "Gestion des clients",
      description:
        "Constituez une base de données clients et fidélisez votre clientèle avec des offres personnalisées.",
    },
    {
      icon: <Smartphone className="icon" />,
      title: "Application mobile",
      description: "Offrez une expérience optimale sur mobile pour vos clients et votre équipe.",
    },
    {
      icon: <Palette className="icon" />,
      title: "Personnalisation",
      description: "Adaptez l'interface à votre image de marque pour une expérience cohérente.",
    },
    {
      icon: <Shield className="icon" />,
      title: "Sécurité avancée",
      description: "Protégez les données de vos clients et sécurisez toutes les transactions.",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="header">
          <div className="badge">Fonctionnalités</div>
          <h2>Tout ce dont vous avez besoin pour gérer vos terrains</h2>
          <p>
            FootspaceReserve combine des outils puissants et une interface intuitive pour optimiser la gestion de vos
            terrains de football.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}