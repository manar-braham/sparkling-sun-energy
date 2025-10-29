import React from "react";

import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.webp",
    "/images/panneaux-photovoltaiques-3.jpg",
    "/images/panneaux-solaires5.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
  

      {/* Section principale */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 'calc(100vh - 100px)', paddingTop: '100px', gap: '20px' }}>
        
        {/* Texte à gauche */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Le <span style={{ textDecoration: 'underline', textDecorationColor: '#011e3e' }}>solaire</span> partout, <br /> pour tous.
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '1.5rem' }}>
            Produisez votre électricité verte grâce aux aides de l'État.
            Demandez votre étude solaire pour découvrir le montant économisé
            et votre rentabilité.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ backgroundColor: '#011e3e', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer' }}> Estimer le montant de mes économies </button>
             <Link to="/contact" style={{ color: "#011e3e", fontWeight: "500", textDecoration: "underline" }}>
            Nous contacter →
          </Link>
            
          </div>
        </div>

        {/* Carrousel vertical à droite (réduit) */}
        <div style={{ height: '80vh', width: '80%', margin: 'auto', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} style={{ height: '80vh' }}>
                <img 
                  src={img} 
                  alt={`Solaire ${index}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            ))}
          </Slider>
        </div>

      </section>
       
    </div>
  );
}


function Contact() {

  return (
    <div style={{ fontFamily: 'sans-serif', paddingTop: '100px' }}>
    
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 'calc(100vh - 100px)', paddingTop: '100px', gap: '20px' }}>
      
      {/* Bloc gauche avec infos */}
      <div>
        <span style={{ backgroundColor: "#d1fae5", color: "#065f46", padding: "0.25rem 0.75rem",paddingTop: '100px', borderRadius: "20px", fontWeight: "500" }}>
          Une question ?
        </span>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "1rem" }}>
          Nous sommes là pour vous aider.
        </h1>
        <p style={{ marginBottom: "2rem", color: "#4b5563" }}>
          Un de nos conseillers reviendra vers vous dans les plus brefs délais.
        </p>

        <p>📧 <a href="mailto:contact@votreentreprise.fr">manar.braham@gmail.com</a></p>
        <p>📞 <a href="tel:+33186905450">01 86 90 54 50</a></p>
        <p>📍 14 rue Scandicci, 93500 Pantin</p>
      </div>

      {/* Formulaire */}
      <form style={{ background: "white", padding: "2rem", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",paddingTop: '100px' }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label>Nom</label>
            <input type="text" style={styles.input} />
          </div>
          <div>
            <label>Prénom</label>
            <input type="text" style={styles.input} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
          <div>
            <label>Mail</label>
            <input type="email" style={styles.input} />
          </div>
          <div>
            <label>Numéro de téléphone</label>
            <input type="tel" style={styles.input} />
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Code Postal</label>
          <input type="text" style={styles.input} />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Vous êtes :</label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "0.5rem" }}>
            <label><input type="radio" name="type" /> Particulier</label>
            <label><input type="radio" name="type" /> Entreprise</label>
            <label><input type="radio" name="type" /> Collectivité</label>
            <label><input type="radio" name="type" /> Association</label>
            <label><input type="radio" name="type" /> Institution</label>
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Objet de votre demande</label>
          <textarea placeholder="Précisez l'objet de votre demande..." rows="4" style={styles.textarea}></textarea>
        </div>

        <button type="submit" style={styles.button}>Envoyer</button>
      </form>
    </div>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "0.5rem",
    marginTop: "0.25rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  textarea: {
    width: "100%",
    padding: "0.5rem",
    marginTop: "0.25rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "#011e3e",
    color: "white",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "9999px",
    cursor: "pointer",
    fontWeight: "600",
  },
};



function App() {
  return (
    <Router>
         <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
  


