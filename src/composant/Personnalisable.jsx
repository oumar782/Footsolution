import React, { useState } from "react";
import { Check, Smartphone } from "lucide-react";

const Personnalisable = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedFont, setSelectedFont] = useState("modern");
  const [selectedLayout, setSelectedLayout] = useState("standard");
  const [showLogo, setShowLogo] = useState(true);
  const [brandingLevel, setBrandingLevel] = useState(75);
  const [activeTab, setActiveTab] = useState("features");

  const colors = {
    blue: {
      primary: "#3b82f6",
      secondary: "#1d4ed8",
      accent: "#dbeafe",
    },
    green: {
      primary: "#10b981",
      secondary: "#047857",
      accent: "#d1fae5",
    },
    purple: {
      primary: "#8b5cf6",
      secondary: "#6d28d9",
      accent: "#ede9fe",
    },
    red: {
      primary: "#ef4444",
      secondary: "#b91c1c",
      accent: "#fee2e2",
    },
    orange: {
      primary: "#f97316",
      secondary: "#c2410c",
      accent: "#ffedd5",
    },
    teal: {
      primary: "#14b8a6",
      secondary: "#0f766e",
      accent: "#ccfbf1",
    },
  };

  const fonts = {
    modern: "'Inter', sans-serif",
    classic: "'Georgia', serif",
    playful: "'Comic Sans MS', cursive",
    elegant: "'Playfair Display', serif",
    minimal: "'Roboto', sans-serif",
  };

  const mockupStyles = {
    backgroundColor: colors[selectedColor].accent,
    border: `2px solid ${colors[selectedColor].primary}`,
    fontFamily: fonts[selectedFont],
    borderRadius: "1rem",
    overflow: "hidden",
    padding: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  const buttonStyles = {
    backgroundColor: colors[selectedColor].primary,
    color: "white",
    padding: "0.75rem 1rem",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.3s ease",
  };

  const headerStyles = {
    color: colors[selectedColor].secondary,
    fontFamily: fonts[selectedFont],
  };

  const customizationOptions = [
    {
      name: "Basique",
      price: 0,
      features: ["Logo personnalisé", "Palette de couleurs adaptée", "Nom de domaine personnalisé"],
    },
    {
      name: "Avancé",
      price: 199,
      features: [
        "Tout du niveau Basique",
        "Typographie personnalisée",
        "Icônes et illustrations sur mesure",
        "Suppression du logo FootspaceReserve",
      ],
    },
    {
      name: "Premium",
      price: 499,
      features: [
        "Tout du niveau Avancé",
        "Application en marque blanche",
        "Intégration complète à votre site web",
        "Design sur mesure",
      ],
    },
  ];

  return (
    <section style={{ backgroundColor: "white", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* En-tête */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "green",
              color: "white",
              padding: "0.5rem 1.5rem",
              borderRadius: "2rem",
              marginBottom: "1rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Personnalisation
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1e293b" }}>
            Adaptez l'application à votre image
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.125rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            FootspaceReserve s'adapte à votre identité visuelle pour offrir une expérience cohérente à vos clients.
          </p>
        </div>

        {/* Section principale */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Section des palettes de couleurs et du calendrier */}
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", color: "#1e293b" }}>
              Palettes de couleurs
            </h3>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {Object.entries(colors).map(([name, color]) => (
                <button
                  key={name}
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    backgroundColor: color.primary,
                    border: selectedColor === name ? "2px solid white" : "none",
                    boxShadow: selectedColor === name ? "0 0 0 2px #3b82f6" : "none",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                  }}
                  onClick={() => setSelectedColor(name)}
                  aria-label={`Couleur ${name}`}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              ))}
            </div>

            {/* Calendrier de réservation */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", color: "#1e293b" }}>
              Calendrier de réservation
            </h3>
            <div style={mockupStyles}>
              <div style={{ backgroundColor: "white", padding: "1rem", borderRadius: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <h3 style={headerStyles}>Votre Complexe Sportif</h3>
                  <Smartphone style={{ width: "1.25rem", height: "1.25rem", color: colors[selectedColor].primary }} />
                </div>
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0.25rem", marginBottom: "1rem" }}>
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "0.5rem",
                          borderRadius: "0.5rem",
                          backgroundColor: i === 2 || i === 4 ? colors[selectedColor].primary : "#e9ecef",
                          color: i === 2 || i === 4 ? "white" : "#6c757d",
                        }}
                      >
                        {["L", "M", "M", "J", "V", "S", "D"][i]}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem", borderRadius: "0.5rem", backgroundColor: "#e9ecef" }}>
                      <span>10:00 - 11:30</span>
                      <span>5/10</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem", borderRadius: "0.5rem", backgroundColor: colors[selectedColor].primary, color: "white" }}>
                      <span>14:00 - 15:30</span>
                      <span>8/10</span>
                    </div>
                  </div>
                  <button style={{ ...buttonStyles, marginTop: "1rem" }}>
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section des options de personnalisation */}
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", color: "#1e293b" }}>
              Options de personnalisation
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem"  }}>
              {customizationOptions.map((option, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "white",
                    padding: "1.5rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e9ecef",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <h5 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1e293b" }}>{option.name}</h5>
                    <div
                      style={{
                        backgroundColor: index === 2 ? "#3b82f6" : "#e9ecef",
                        color: index === 2 ? "white" : "#1e293b",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "1rem",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                      }}
                    >
                      {option.price === 0 ? "Gratuit" : `${option.price}€ `}
                    </div>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {option.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", color: "#475569" }}
                      >
                        <Check style={{ width: "1rem", height: "1rem", color: "#3b82f6" }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personnalisable;