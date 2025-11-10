import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Endpoint pour envoyer un email
app.post("/send-email", async (req, res) => {
  const { nom, prenom, email, telephone, codePostal, type, message } = req.body;

  try {
    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou ton service SMTP (ex: outlook, yahoo)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // adresse qui reçoit les messages
      subject: `Nouveau message de ${nom} ${prenom}`,
      text: `
        📧 Email: ${email}
        📞 Téléphone: ${telephone}
        📍 Code Postal: ${codePostal}
        🏷️ Type: ${type}

        📝 Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur:", error);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi de l'email." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Serveur backend démarré sur http://localhost:${PORT}`);
});
