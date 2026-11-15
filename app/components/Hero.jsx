import { Link } from "react-router";

const CX = 520;
const CY = 300;

function ringPath(i) {
  const base = 45 + i * 40;
  const phase = i * 0.35;
  const steps = 96;
  const pts = [];
  for (let s = 0; s < steps; s++) {
    const t = (s / steps) * Math.PI * 2;
    const wobble =
      1 +
      0.1 * Math.sin(3 * t + 0.6 + phase) +
      0.06 * Math.sin(5 * t + 1.9 - phase);
    const r = base * wobble;
    const x = CX + r * 1.3 * Math.cos(t);
    const y = CY + r * 0.9 * Math.sin(t);
    pts.push(`${s === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `${pts.join(" ")} Z`;
}

const RINGS = Array.from({ length: 11 }, (_, i) => ringPath(i));

const fade = "linear-gradient(to right, transparent 0%, black 55%)";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-forest text-cream"
    >
      {/* Contour lines draw themselves once on load, then stay still. */}
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full text-gold lg:w-[72%]"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {RINGS.map((d, i) => (
          <path
            key={i}
            d={d}
            pathLength="1"
            strokeOpacity={Math.max(0.18, 0.6 - i * 0.04)}
            className="animate-draw [stroke-dasharray:1] [stroke-dashoffset:1] motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0]"
            style={{ animationDelay: `${i * 140}ms` }}
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-304 px-4 py-16 sm:px-8 sm:py-24 lg:py-32">
        <h1
          id="hero-heading"
          className="max-w-3xl font-display text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl"
        >
          <span className="block">Protecting the land.</span>
          <span className="block">
            Securing the future of the Chuka people.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-xl leading-relaxed text-cream/90">
          Atiriri Bururi Ma Chuka Trust works to identify, affirm and promote
          the land rights of the Chuka community, for today&rsquo;s families and
          generations to come.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/about"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 py-3 font-bold text-ink no-underline hover:bg-[#e0b04f] focus-visible:outline-cream"
          >
            Learn who we are
          </Link>
          <Link
            to="/get-involved#report"
            className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-cream/70 px-6 py-3 font-bold text-cream no-underline hover:bg-cream hover:text-forest focus-visible:outline-cream"
          >
            Report a land concern
          </Link>
        </div>
      </div>
    </section>
  );
}
