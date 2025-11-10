import express from "express";
import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";

const app = express();
app.use(express.json()); // Pour lire les JSON envoyés depuis React ou Postman

// ✅ Route API
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // ✅ Générer le PDF en mémoire
  const doc = new PDFDocument();
  const buffers = [];
  doc.on("data", buffers.push.bind(buffers));
  doc.on("end", async () => {
    const pdfBuffer = Buffer.concat(buffers);

    // ✅ Config de l'email (Mailtrap)
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "8f7b9cbc652a1f",
        pass: "fa148182155b58"
      }
    });

    // ✅ Envoyer l'email avec le PDF en pièce jointe
    try {
      await transporter.sendMail({
        from: "no-reply@example.com",
        to: "test@inbox.mailtrap.io", // ou ton email réel pour test
        subject: "Nouveau client - PDF joint",
        text: "Veuillez trouver les informations du client en pièce jointe.",
        attachments: [
          {
            filename: "client-info.pdf",
            content: pdfBuffer
          }
        ]
      });

      res.json({ success: true, message: "Email envoyé avec PDF !" });
    } catch (err) {
      console.error("Erreur Nodemailer :", err);
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ✅ Contenu du PDF
  doc.fontSize(16).text("Informations du client", { underline: true });
  doc.moveDown();
  doc.fontSize(12).text(`Nom : ${name}`);
  doc.text(`Email : ${email}`);
  doc.text(`Message : ${message}`);
  doc.end();
});

// ✅ Démarrer le serveur
app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
