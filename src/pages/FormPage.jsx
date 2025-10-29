import React, { useState } from "react";
import "./FormPage.css";
import jsPDF from "jspdf";

function FormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Veuillez accepter les Termes & Conditions.");
      return;
    }

    const doc = new jsPDF();
    doc.text(`Prénom: ${formData.firstName}`, 10, 10);
    doc.text(`Nom: ${formData.lastName}`, 10, 20);
    doc.text(`Téléphone: ${formData.phone}`, 10, 30);
    doc.text(`Email: ${formData.email}`, 10, 40);
    doc.text(`Message: ${formData.message}`, 10, 50);

    const pdfBlob = doc.output("blob");
    const data = new FormData();
    data.append("file", pdfBlob, "formulaire.pdf");

    try {
      const res = await fetch("http://localhost:8080/api/form/send-email", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        alert("Formulaire envoyé avec succès !");
      } else {
        alert("Erreur lors de l'envoi.");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur réseau.");
    }
  };

  return (
    <div className="form-page-container">
      <div className="form-background">
        <div className="form-content">
          <h2>Prêts à passer au solaire ?</h2>
          <p>Laissez-nous vos infos, on vous recontacte sous 48h.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Nom</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group terms">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label>
                J'accepte les <a href="#">Termes & Conditions</a>
              </label>
            </div>

            <button type="submit">Être rappelé</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
