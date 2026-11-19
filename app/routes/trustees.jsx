import { Link } from "react-router";
import PageHeader from "../components/PageHeader";

export function meta() {
  return [
    {
      title:
        "Trustees | Leadership & Governance – Atiriri Bururi Ma Chuka Trust",
    },
    {
      name: "description",
      content:
        "Meet the 11 registered trustees of Atiriri Bururi Ma Chuka Trust and learn how they are appointed, their leadership responsibilities and accountability.",
    },
    {
      name: "keywords",
      content:
        "Atiriri Bururi Ma Chuka Trust trustees, Chuka Trust leadership, registered trustees, Trust governance, trustee accountability",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://atiriribururimachukatrust.com/trustees",
    },
    {
      property: "og:title",
      content: "Trustees | Atiriri Bururi Ma Chuka Trust",
    },
    {
      property: "og:description",
      content:
        "Meet the 11 registered trustees and discover how leadership, appointments and accountability work within Atiriri Bururi Ma Chuka Trust.",
    },
    {
      property: "og:url",
      content: "https://atiriribururimachukatrust.com/trustees",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Trustees | Atiriri Bururi Ma Chuka Trust",
    },
    {
      name: "twitter:description",
      content:
        "Discover the leadership and governance of Atiriri Bururi Ma Chuka Trust and meet its 11 registered trustees.",
    },
  ];
}

const OFFICIALS = [
  {
    name: "Gitonga Mbogo",
    role: "Chairman",
    photo: "/images/trustees/gitonga-mbogo.jpg",
  },
  {
    name: "Godfrey Micheni Ngara",
    role: "Vice Chairman",
    photo: "/images/trustees/godfrey-micheni-ngara.jpg",
  },
  {
    name: "Desiderio M\u2019Mugere Mbogo",
    role: "Secretary",
    photo: "/images/trustees/desiderio-mmugere-mbogo.jpg",
  },
  {
    name: "Joses Njeru G. Rugane",
    role: "Assistant Secretary",
    photo: "/images/trustees/joses-njeru-rugane.jpg",
  },
  {
    name: "Naomi Mukwanjagi Samwel",
    role: "Treasurer",
    photo: "/images/trustees/naomi-mukwanjagi-samwel.jpg",
  },
];

const TRUSTEES = [
  { name: "Mutegi Ntabari", role: "Trustee" },
  {
    name: "Lena Muthoni Iringo",
    role: "Trustee",
    photo: "/images/trustees/lena-muthoni-iringo.jpg",
  },
  {
    name: "Jane Kanini Mbuba",
    role: "Trustee",
    photo: "/images/trustees/jane-kanini-mbuba.jpg",
  },
  { name: "Salesio Muchiri Murianki", role: "Trustee" },
  { name: "Sebastian Kireu Mung\u2019atia", role: "Trustee" },
  { name: "Justus Mbuba M\u2019Raci", role: "Trustee" },
];

const SAFEGUARDS = [
  {
    title: "New trustees",
    text: "When a new trustee is appointed, the remaining trustees confirm it in writing to the Registrar.",
  },
  {
    title: "Yearly return",
    text: "Every year, the trustees send the Registrar the names, residences and descriptions of the trustees.",
  },
  {
    title: "The common seal",
    text: "The trust\u2019s common seal can only be used with the trustees\u2019 authority and in the presence of at least two trustees, who must sign the document.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .filter((part) => /^[A-Za-z]/.test(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

function PersonCard({ name, role, photo, featured = false, official = false }) {
  return (
    <li
      className={[
        "group relative overflow-hidden rounded-2xl bg-forest shadow-md ring-1 ring-forest/10",
        "transition duration-300 hover:-translate-y-1 hover:shadow-xl",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        featured
          ? "col-span-2 aspect-4/3 lg:row-span-2 lg:aspect-auto"
          : "aspect-4/5",
      ].join(" ")}
    >
      {photo ? (
        <img
          src={photo}
          alt={`Portrait of ${name}`}
          width="480"
          height="600"
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-display text-6xl font-bold text-cream/40"
        >
          {initials(name)}
        </div>
      )}

      <div
        className={[
          "absolute inset-x-0 bottom-0 bg-linear-to-t from-forest-deep via-forest-deep/75 to-transparent p-4 pt-16",
          featured ? "sm:p-6 sm:pt-24" : "",
        ].join(" ")}
      >
        {official ? (
          <span className="mb-2 inline-block rounded-full bg-gold px-3 py-0.5 text-sm font-bold text-ink">
            {role}
          </span>
        ) : (
          <p className="mb-0.5 text-sm font-semibold text-cream/80">{role}</p>
        )}
        <p
          className={[
            "font-display leading-snug font-semibold text-cream",
            featured ? "text-2xl sm:text-3xl" : "text-lg",
          ].join(" ")}
        >
          {name}
        </p>
      </div>
    </li>
  );
}

const textLink =
  "font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep";

export default function Trustees() {
  return (
    <>
      <PageHeader
        title="Our trustees"
        intro="Eleven registered trustees hold office on behalf of the trust, under the terms of its trust deed."
      />

      <section aria-labelledby="trustees-heading">
        <div className="mx-auto grid max-w-304 items-center gap-10 px-4 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2
              id="trustees-heading"
              className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl"
            >
              Who holds office
            </h2>
            <p className="mt-4 text-lg">
              These are the trustees named on our Certificate of Incorporation,
              who were constituted as trustees at a meeting of the trust on 30
              September 2022.
            </p>
            <p className="mt-4 text-lg">
              Trustees can be reached care of P.O. Box 49, Magumoni.
            </p>
          </div>

          <figure className="lg:col-span-7">
            <img
              src="/Trustees.jpeg"
              alt="A group of the trust's trustees standing together indoors"
              width="1200"
              height="900"
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl bg-forest/10 object-cover shadow-lg ring-1 ring-forest/10"
            />
            <figcaption className="mt-3 text-[0.9375rem] text-ink/80">
              Some of the trust&rsquo;s 11 registered trustees.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        aria-labelledby="officials-heading"
        className="border-y border-forest/15 bg-white"
      >
        <div className="mx-auto max-w-304 px-4 py-14 sm:px-8 sm:py-20">
          <h2
            id="officials-heading"
            className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl"
          >
            Officials
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            The trust&rsquo;s chairman, vice chairman, secretary, assistant
            secretary and treasurer.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {OFFICIALS.map((person, index) => (
              <PersonCard
                key={person.name}
                {...person}
                official
                featured={index === 0}
              />
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="members-heading">
        <div className="mx-auto max-w-304 px-4 py-14 sm:px-8 sm:py-20">
          <h2
            id="members-heading"
            className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl"
          >
            Trustees
          </h2>

          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {TRUSTEES.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="accountability-heading"
        className="border-y border-forest/15 bg-white"
      >
        <div className="mx-auto max-w-304 px-4 py-14 sm:px-8 sm:py-20">
          <h2
            id="accountability-heading"
            className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl"
          >
            How trustees are held accountable
          </h2>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {SAFEGUARDS.map(({ title, text }) => (
              <li
                key={title}
                className="rounded-2xl border-t-4 border-gold bg-cream p-6 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-lg">{text}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8">
            <Link to="/about" className={textLink}>
              Read more about how we are governed
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
