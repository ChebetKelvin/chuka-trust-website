import { Link } from "react-router";

// Drawn from clauses 3.1 and 3.2 of the trust deed.
const WORK = [
  {
    title: "Know the land",
    text: "We identify areas where land conflicts remain unresolved and document them, so problems are understood and addressed before they grow.",
    linkText: "How we map land conflicts",
    to: "/our-work#land-conflicts",
  },
  {
    title: "Resolve disputes fairly",
    text: "We promote alternative ways of resolving land disputes, so that families can settle land matters peacefully and fairly.",
    linkText: "How we support dispute resolution",
    to: "/our-work#dispute-resolution",
  },
  {
    title: "Leave no one landless",
    text: "We stand with landless people and take part in strategies that reduce poverty by opening up access to land.",
    linkText: "How we support landless families",
    to: "/our-work#landless-support",
  },
];

export default function WhatWeDo() {
  return (
    <section aria-labelledby="what-we-do-heading">
      <div className="mx-auto grid max-w-304 gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2
              id="what-we-do-heading"
              className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl"
            >
              What we do
            </h2>
            <p className="mt-4 max-w-md text-lg">
              Our work follows the purposes set out in our trust deed: to
              identify, establish and promote the land rights of the Chuka
              community.
            </p>
            <Link
              to="/our-work"
              className="mt-6 inline-block font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep"
            >
              See all our work
            </Link>
          </div>
        </div>

        <ul className="divide-y divide-forest/20 border-y border-forest/20 lg:col-span-8">
          {WORK.map(({ title, text, linkText, to }) => (
            <li key={title} className="py-8 sm:py-10">
              <h3 className="font-display text-2xl leading-snug font-bold text-ink sm:text-[1.75rem]">
                {title}
              </h3>
              <p className="mt-3 max-w-xl text-lg">{text}</p>
              <Link
                to={to}
                className="mt-4 inline-block font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep"
              >
                {linkText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
