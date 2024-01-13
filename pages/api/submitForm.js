import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, surname, address, city, email, phoneNumber, kurs, message } =
    req.body;

  const emailadres = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailadres,
      pass: pass,
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "your-destination-email@example.com",
    subject: "New Form Submission",
    html: `
      <p>Name: ${name}</p>
      <p>Surname: ${surname}</p>
      <p>Address: ${address}</p>
      <p>City: ${city}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Selected Course: ${kurs}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
