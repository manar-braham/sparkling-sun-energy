import React, { useState } from "react";
import logo from '../assets/logo.jpg';

function Navbar() {
  const menuItems = [
    { name: "Nos solutions", link: "#solutions" },
    { name: "Nos conseils", link: "#advice" },
    { name: "Qui sommes-nous ?", link: "#about" },
  ];

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 80px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Sparkling Sun Energy"
          style={{ height: '150px', maxWidth: '100%' }}
        />
      </div>

      {/* Menu */}
      <nav style={{ display: 'flex', gap: '40px', fontWeight: '500', color: '#011e3e' }}>
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            style={{ position: 'relative', display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '6px' }}
            onClick={() => toggleMenu(index)}
          >
            <span>{item.name}</span>
            
            {/* Flèche vide à droite */}
            <span 
              style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderLeft: '2px solid #011e3e',
                borderBottom: '2px solid #011e3e',
                transform: openMenu === index ? 'rotate(-225deg)' : 'rotate(-45deg)',
                transition: '0.3s'
              }}
            ></span>

            {/* Sous-menu */}
            {openMenu === index && (
              <div style={{ position: 'absolute', top: '100%', left: '0', backgroundColor: 'white', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', padding: '8px 0', minWidth: '150px' }}>
                <a href={item.link} style={{ display: 'block', padding: '8px 16px', textDecoration: 'none', color: '#4B5563' }}>Option 1</a>
                <a href={item.link} style={{ display: 'block', padding: '8px 16px', textDecoration: 'none', color: '#4B5563' }}>Option 2</a>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bouton */}
      <button
        style={{
          backgroundColor: '#011e3e',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Estimation gratuite
      </button>
    </header>
  );
}

export default Navbar;
