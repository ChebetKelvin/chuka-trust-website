export const CONTACT = {
  address: "P.O. Box 49, Magumoni",
  phone: "+254 710 359001",
  whatsapp: "",
  email: "machukaatiriribururi@gmail.com",
};

export function toE164(phone) {
  const digits = String(phone).replace(/\D/g, "");
  if (digits.startsWith("254")) return `+${digits}`;
  if (digits.startsWith("0")) return `+254${digits.slice(1)}`;
  return `+${digits}`;
}

export function telHref(phone) {
  return `tel:${toE164(phone)}`;
}
