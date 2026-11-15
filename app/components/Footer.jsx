import { Link } from "react-router";

// Fill these in when the client supplies them. Empty values are simply not shown.
const CONTACT = {
  phone: "+254728362827", // e.g. "+254 7XX XXX XXX"
  whatsapp: "+254728362827", // international format, digits only, e.g. "2547XXXXXXXX"
  email: "info@yourdomain.or.ke", // e.g. "info@yourdomain.or.ke"
};

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/our-work", label: "Our work" },
  { to: "/trustees", label: "Trustees" },
  { to: "/resources", label: "Resources" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
  { to: "/get-involved#report", label: "Report a land concern" },
];

const linkClass =
  "text-cream/90 underline decoration-gold decoration-2 underline-offset-4 hover:text-white focus-visible:outline-cream";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-gold bg-ink text-cream/90">
      <div className="mx-auto grid max-w-304 gap-10 px-4 py-14 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="font-display text-2xl leading-tight font-bold text-cream">
            Atiriri Bururi Ma Chuka Trust
          </p>
          <p className="mt-1 font-semibold text-gold">Registered Trustees</p>
          <p className="mt-4 max-w-sm">
            Protecting and promoting the land rights of the Chuka people of
            Kenya.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <h2 className="font-display text-lg font-bold text-cream">Explore</h2>
          <ul className="mt-3 space-y-2">
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="font-display text-lg font-bold text-cream">Contact</h2>
          <address className="mt-3 space-y-2 not-italic">
            <p>P.O. Box 49, Magumoni</p>
            {CONTACT.phone && (
              <p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className={linkClass}
                >
                  {CONTACT.phone}
                </a>
              </p>
            )}
            {CONTACT.whatsapp && (
              <p>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  className={linkClass}
                  rel="noopener"
                >
                  Message us on WhatsApp
                </a>
              </p>
            )}
            {CONTACT.email && (
              <p>
                <a href={`mailto:${CONTACT.email}`} className={linkClass}>
                  {CONTACT.email}
                </a>
              </p>
            )}
          </address>
        </div>
      </div>

      <div className="border-t border-cream/20">
        <div className="mx-auto flex max-w-304 flex-col gap-1 px-4 py-5 text-[0.9375rem] text-cream/80 sm:px-8 md:flex-row md:justify-between">
          <p>
            &copy; {year} Atiriri Bururi Ma Chuka Trust. All rights reserved.
          </p>
          <p>
            Registered under the Trustees (Perpetual Succession) Act, Cap. 164,
            on 10 August 2023.
          </p>
        </div>
      </div>
    </footer>
  );
}
