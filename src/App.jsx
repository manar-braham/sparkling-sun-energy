import React, { useState } from "react";

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

  // 👉 Mise à jour champs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 👉 Envoi formulaire au backend
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
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", padding: "2rem", backgroundColor: "#f5f5f5" }}>
      
      <div>
        <span style={{ backgroundColor: "#d1fae5", color: "#065f46", padding: "0.25rem 0.75rem", borderRadius: "20px", fontWeight: "500" }}>
          Une question ?
        </span>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "1rem" }}>
          Nous sommes là pour vous aider.
        </h1>
        <p style={{ marginBottom: "2rem", color: "#4b5563" }}>
          Un de nos conseillers reviendra vers vous dans les plus brefs délais.
        </p>

        <p>📧 contact@votreentreprise.fr</p>
        <p>📞 01 86 90 54 50</p>
        <p>📍 14 rue Scandicci, 93500 Pantin</p>
      </div>

      {/* -------- FORMULAIRE -------- */}
      <form 
        onSubmit={handleSubmit}
        style={{ background: "white", padding: "2rem", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >

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
                <input
                  type="radio"
                  name="type"
                  value={type}
                  onChange={handleChange}
                />{" "}
                {type}
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

        {/* 🔘 BOUTON ENVOYER */}
        <button type="submit" style={styles.button}>
          Envoyer
        </button>
      </form>
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

export default Contact;
