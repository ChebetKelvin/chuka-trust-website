import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/our-work", label: "Our work" },
  { to: "/trustees", label: "Trustees" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  [
    "block min-h-12 py-3.5 text-xl font-semibold no-underline hover:text-forest",
    "nav:min-h-0 nav:border-b-[3px] nav:py-1.5 nav:text-[1.0625rem]",
    isActive
      ? "pl-4 text-forest shadow-[inset_4px_0_0_var(--color-gold)] nav:border-gold nav:pl-0 nav:shadow-none"
      : "text-ink nav:border-transparent",
  ].join(" ");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="absolute -top-16 left-4 z-100 rounded-md bg-forest px-4 py-3 text-cream focus:top-4"
      >
        Skip to main content
      </a>

      {/* Legal strip: shows registration status, scrolls away with the page */}
      <div className="bg-forest-deep text-[0.9375rem] text-cream">
        <p className="mx-auto max-w-304 px-4 py-1.5 text-center sm:px-8 nav:text-left">
          Registered under the Trustees (Perpetual Succession) Act, Cap. 164
        </p>
      </div>

      <header className="sticky top-0 z-50 border-b-[3px] border-gold bg-cream">
        <div className="relative mx-auto flex max-w-304 items-center justify-between gap-6 px-4 py-3 sm:px-8">
          <Link
            to="/"
            aria-label="Atiriri Bururi Ma Chuka Trust, home"
            className="flex min-w-0 items-center gap-3 text-forest no-underline"
          >
            <img
              src="/logo.png"
              alt=""
              width="56"
              height="56"
              className="size-14 flex-none"
            />
            <span className="flex min-w-0 flex-col">
              <span className="font-display text-[1.1875rem] leading-tight font-bold">
                Atiriri Bururi Ma Chuka Trust
              </span>
              <span className="text-[0.9375rem] font-semibold text-earth">
                Registered Trustees
              </span>
            </span>
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
            className="group inline-flex min-h-12 cursor-pointer items-center gap-2.5 rounded-md bg-forest px-3.5 font-semibold text-cream nav:hidden"
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="grid w-5 gap-1" aria-hidden="true">
              <span className="block h-0.5 bg-current transition-transform motion-reduce:transition-none group-aria-expanded:translate-y-1.5 group-aria-expanded:rotate-45" />
              <span className="block h-0.5 bg-current transition-opacity motion-reduce:transition-none group-aria-expanded:opacity-0" />
              <span className="block h-0.5 bg-current transition-transform motion-reduce:transition-none group-aria-expanded:-translate-y-1.5 group-aria-expanded:-rotate-45" />
            </span>
          </button>

          <nav
            id="site-menu"
            aria-label="Main"
            className={[
              open ? "block" : "hidden",
              "absolute inset-x-0 top-full border-b-[3px] border-gold bg-cream px-4 pt-2 pb-6 shadow-[0_12px_24px_rgba(22,58,43,0.12)] sm:px-8",
              "nav:static nav:flex nav:items-center nav:gap-7 nav:border-0 nav:bg-transparent nav:p-0 nav:shadow-none",
            ].join(" ")}
          >
            <ul className="m-0 mb-4 list-none p-0 nav:mb-0 nav:flex nav:items-center nav:gap-6">
              {LINKS.map(({ to, label }) => (
                <li
                  key={to}
                  className="border-t border-forest/15 first:border-t-0 nav:border-0"
                >
                  <NavLink to={to} className={linkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="/get-involved#report"
              className="block min-h-12 rounded-md bg-forest px-5 py-3.5 text-center font-bold text-cream no-underline hover:bg-forest-deep nav:whitespace-nowrap nav:px-4.5 nav:py-2.5"
            >
              Report a land concern
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
