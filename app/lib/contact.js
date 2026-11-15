export const CONTACT = {
  address: "P.O. Box 49, Magumoni",
  phone: "0713 733 923",
  whatsapp: "", // international format, digits only. Fill in "254713733923" once the client confirms this number is on WhatsApp.
  email: "machukaatiriribururi@gmail.com",
};

// "0713 733 923" -> "+254713733923" (works for tel: links and structured data)
export function toE164(phone) {
  const digits = String(phone).replace(/\D/g, "");
  if (digits.startsWith("254")) return `+${digits}`;
  if (digits.startsWith("0")) return `+254${digits.slice(1)}`;
  return `+${digits}`;
}

export function telHref(phone) {
  return `tel:${toE164(phone)}`;
}
