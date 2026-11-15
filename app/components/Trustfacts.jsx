import { Link } from "react-router";

// Facts taken from the Certificate of Incorporation. Keep in sync with the original.
const FACTS = [
  {
    label: "Registered under",
    value: "Trustees (Perpetual Succession) Act, Cap. 164",
  },
  {
    label: "Date of registration",
    value: <time dateTime="2023-08-10">10 August 2023</time>,
  },
  { label: "Governed by", value: "11 registered trustees" },
  { label: "Postal address", value: "P.O. Box 49, Magumoni" },
];

export default function TrustFacts() {
  return (
    <section
      aria-labelledby="trust-facts-heading"
      className="border-b border-forest/15 bg-white"
    >
      <div className="mx-auto max-w-304 px-4 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <h2
            id="trust-facts-heading"
            className="font-display text-2xl leading-snug font-bold text-forest sm:text-3xl"
          >
            A legally registered community trust
          </h2>
          <Link
            to="/resources"
            className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep"
          >
            View the certificate
          </Link>
        </div>

        <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map(({ label, value }) => (
            <div key={label} className="border-l-4 border-gold pl-4">
              <dt className="text-[0.9375rem] font-semibold text-earth">
                {label}
              </dt>
              <dd className="mt-1 font-display text-xl leading-snug font-semibold text-ink">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
