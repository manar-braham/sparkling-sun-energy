import React, { useState } from "react";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { name: "Nos solutions", link: "#solutions", submenu: [] },
    { name: "Nos conseils", link: "#advice", submenu: [] },

    {
      name: "Qui sommes-nous ?",
      submenu: [
        {
          title: "Nos valeurs",
          text: "Notre entreprise a été bâtie autour de valeurs fortes. Découvrez-les.",
          icon: "⭕",
          link: "#valeurs",
        },
        {
          title: "Témoignages",
          text: "Découvrez les témoignages de nos clients.",
          icon: "📘",
          link: "#temoignages",
        },
        {
          title: "Nous contacter",
          text: "Une question ? N’hésitez pas à nous contacter.",
          icon: "💬",
          link: "#contact",
        },
      ],
    },
  ];

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 80px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Sparkling Sun Energy"
          style={{ height: "150px", maxWidth: "100%" }}
        />
      </div>

      {/* Menu */}
      <nav
        style={{
          display: "flex",
          gap: "40px",
          fontWeight: "500",
          color: "#011e3e",
        }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: "6px",
            }}
            onClick={() => toggleMenu(index)}
          >
            <span>{item.name}</span>

            {/* Flèche */}
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderLeft: "2px solid #011e3e",
                borderBottom: "2px solid #011e3e",
                transform:
                  openMenu === index ? "rotate(-225deg)" : "rotate(-45deg)",
                transition: "0.3s",
              }}
            ></span>

            {/* Sous-menu */}
            {openMenu === index && item.submenu.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "white",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  padding: "20px",
                  minWidth: "350px",
                  borderRadius: "8px",
                  display: "grid",
                  gap: "16px",
                }}
              >
                {item.submenu.map((sub, sIndex) => (
                  <a
                    key={sIndex}
                    href={sub.link}
                    style={{
                      display: "flex",
                      gap: "12px",
                      textDecoration: "none",
                      color: "#011e3e",
                    }}
                  >
                    <span style={{ fontSize: "22px" }}>{sub.icon}</span>

                    <div>
                      <h4 style={{ margin: 0, fontSize: "16px" }}>{sub.title}</h4>
                      <p style={{ margin: 0, fontSize: "13px", color: "#6B7280" }}>
                        {sub.text}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bouton */}
      <button
        style={{
          backgroundColor: "#011e3e",
          color: "white",
          padding: "8px 16px",
          borderRadius: "9999px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Estimation gratuite
      </button>
    </header>
  );
}

export default Navbar;
