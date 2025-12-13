import React, { useState } from "react";
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
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '100px 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Le <span style={{ textDecoration: 'underline', textDecorationColor: '#011e3e' }}>solaire</span> partout, <br /> pour tous.
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '1.5rem' }}>
            Produisez votre électricité verte grâce aux aides de l'État. Demandez votre étude solaire pour découvrir le montant économisé et votre rentabilité.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ backgroundColor: '#011e3e', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
              Estimer le montant de mes économies
            </button>
            <Link to="/contact" style={{ color: "#011e3e", fontWeight: "500", textDecoration: "underline" }}>
              Nous contacter →
            </Link>
          </div>
        </div>

        <div style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Solaire ${index}`} style={{ width: '100%', height: '80vh', objectFit: 'cover' }} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    codePostal: "",
    type: "",
    objet: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📩 Formulaire envoyé :", formData);
    try {
      const response = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("✅ Réponse backend :", data);
      alert("Message envoyé avec succès !");
    } catch (error) {
      console.error("❌ Erreur d’envoi :", error);
      alert("Erreur lors de l’envoi du message.");
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '100px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <span style={{ backgroundColor: "#d1fae5", color: "#065f46", padding: "0.25rem 0.75rem", borderRadius: "20px", fontWeight: "500" }}>Une question ?</span>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "1rem" }}>Nous sommes là pour vous aider.</h1>
          <p style={{ marginBottom: "2rem", color: "#4b5563" }}>Un de nos conseillers reviendra vers vous dans les plus brefs délais.</p>
          <p>📧 <a href="mailto:manar.braham@gmail.com">manar.braham@gmail.com</a></p>
          <p>📞 <a href="tel:+33186905450">01 86 90 54 50</a></p>
          <p>📍 14 rue Scandicci, 93500 Pantin</p>
        </div>

        <form onSubmit={handleSubmit} style={{ background: "white", padding: "2rem", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label>Nom</label>
              <input name="nom" value={formData.nom} onChange={handleChange} type="text" style={styles.input} required />
            </div>
            <div>
              <label>Prénom</label>
              <input name="prenom" value={formData.prenom} onChange={handleChange} type="text" style={styles.input} required />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
            <div>
              <label>Mail</label>
              <input name="email" value={formData.email} onChange={handleChange} type="email" style={styles.input} required />
            </div>
            <div>
              <label>Numéro de téléphone</label>
              <input name="telephone" value={formData.telephone} onChange={handleChange} type="tel" style={styles.input} required />
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label>Code Postal</label>
            <input name="codePostal" value={formData.codePostal} onChange={handleChange} type="text" style={styles.input} />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label>Vous êtes :</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "0.5rem" }}>
              {["Particulier", "Entreprise", "Collectivité", "Association", "Institution"].map((type) => (
                <label key={type}>
                  <input type="radio" name="type" value={type} onChange={handleChange} /> {type}
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label>Objet de votre demande</label>
            <textarea
              name="objet"
              value={formData.objet}
              onChange={handleChange}
              placeholder="Précisez l'objet de votre demande..."
              rows="4"
              style={styles.textarea}
            ></textarea>
          </div>

          <button type="submit" style={styles.button}>Envoyer</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  input: { width: "100%", padding: "0.5rem", marginTop: "0.25rem", border: "1px solid #ccc", borderRadius: "6px" },
  textarea: { width: "100%", padding: "0.5rem", marginTop: "0.25rem", border: "1px solid #ccc", borderRadius: "6px" },
  button: { marginTop: "1rem", backgroundColor: "#011e3e", color: "white", padding: "0.75rem 1.5rem", border: "none", borderRadius: "9999px", cursor: "pointer", fontWeight: "600" },
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>
        } />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
