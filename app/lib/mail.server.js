import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  if (!transporter) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      throw new Error("SMTP_HOST, SMTP_USER and SMTP_PASS must be set");
    }
    const port = Number(SMTP_PORT) || 465;
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }
  return transporter;
}

const oneLine = (s) => String(s).replace(/[\r\n]+/g, " ");

export async function sendConcernEmail(concern) {
  const to = process.env.REPORT_TO_EMAIL;
  if (!to) throw new Error("REPORT_TO_EMAIL must be set");

  const text = [
    "A new land concern was submitted on the website.",
    "",
    `Name: ${concern.name}`,
    `Phone: ${concern.phone}`,
    `Email: ${concern.email || "not given"}`,
    `Location: ${concern.location}`,
    `Type of concern: ${concern.concernType}`,
    `Received: ${new Date().toISOString()}`,
    "",
    "Description:",
    concern.description,
    "",
    "The person agreed that the trust may contact them and keep this information.",
  ].join("\n");

  await getTransporter().sendMail({
    from: `"Chuka Trust website" <${process.env.SMTP_USER}>`,
    to,
    replyTo: concern.email || undefined,
    subject: oneLine(
      `New land concern: ${concern.concernType} (${concern.location})`,
    ),
    text,
  });
}

export async function sendContactEmail(message) {
  const to = process.env.REPORT_TO_EMAIL;
  if (!to) throw new Error("REPORT_TO_EMAIL must be set");

  const text = [
    "A new message was sent from the website contact form.",
    "",
    `Name: ${message.name}`,
    `Topic: ${message.topic}`,
    `Reply to: ${message.reply}`,
    `Received: ${new Date().toISOString()}`,
    "",
    "Message:",
    message.body,
  ].join("\n");

  await getTransporter().sendMail({
    from: `"Chuka Trust website" <${process.env.SMTP_USER}>`,
    to,
    replyTo: message.replyIsEmail ? message.reply : undefined,
    subject: oneLine(`Website message (${message.topic}) from ${message.name}`),
    text,
  });
}
