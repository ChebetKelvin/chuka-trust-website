import { Link } from "react-router";
import PageHeader from "../components/PageHeader";

export function meta() {
  return [
    { title: "About Us | Atiriri Bururi Ma Chuka Trust" },
    {
      name: "description",
      content:
        "The story of Magundu Ma Chuka, the ancestral land of the Chuka people, and how Atiriri Bururi Ma Chuka Trust was formed, registered and held accountable.",
    },
  ];
}

// The community's history, from the letter supplied by the client (14 November 2026).
// To confirm with the client before launch: the exact wording of each point, and whether
// they want the 12,000-acre figure and the Gazette Notice date shown.
const STORY = [
  {
    date: "1911 to 1934",
    text: "According to the community\u2019s history, the Chuka people lived on their ancestral land, which they call Magundu Ma Chuka.",
  },
  {
    date: "1934",
    text: "The community says it was forcibly evicted by the colonial government, and that the land was kept as crown land. Families became squatters or sought refuge with neighbouring clans.",
  },
  {
    date: "1961",
    text: "The community raised its claim. The Njuri Ncheke of Ameru held a baraza on how the Mt. Kenya region would be divided, and recommended that the Chuka people repossess their land as soon as Kenya became independent.",
  },
  {
    date: "After independence",
    text: "The land was not returned. The community says it was taken over and fenced by the Kenya Forest Service, and that the Chuka people were left landless.",
  },
  {
    date: "2018",
    text: "The community filed a claim with the National Lands Commission.",
  },
  {
    date: "1 March 2019",
    text: "The claim was allowed, under a Kenya Gazette Notice. The Commission recommended that the Kenya Forest Service consider excising 12,000 acres in the community\u2019s favour, and that the Director of Settlement set up a settlement scheme for them in Tharaka Nithi County.",
  },
  {
    date: "2022 and 2023",
    text: "The community organised itself as Atiriri Bururi Ma Chuka Trust, and the trust was registered in August 2023.",
  },
  {
    date: "Today",
    text: "The trustees say the Commission\u2019s recommendation has not yet been carried out. They continue to ask for it to be implemented, so that the land can be registered for the community.",
  },
];

// All content below comes from the Certificate of Incorporation and the trust deed (clauses 3.1 and 3.2).
const PURPOSES = [
  {
    title: "Identify land conflicts",
    text: "We identify areas where land conflicts within the Chuka community remain unresolved.",
  },
  {
    title: "Affirm legal land rights",
    text: "We establish and affirm the legal land rights of the people of Chuka.",
  },
  {
    title: "Promote proper use of communal land",
    text: "We promote, and monitor, the proper use of all the communal land that belongs to the Chuka people, for their benefit.",
  },
  {
    title: "Resolve disputes",
    text: "We establish proper alternative dispute resolution mechanisms for matters of land rights.",
  },
  {
    title: "Support the landless",
    text: "We work to ease the plight of landless people within the Chuka community.",
  },
  {
    title: "Reduce poverty",
    text: "We take part in poverty eradication strategies, on our own and with others.",
  },
  {
    title: "Carry out research",
    text: "We conduct research on all matters relevant to these purposes, and encourage others to do the same.",
  },
  {
    title: "Share what we learn",
    text: "We use all forms of communication, including print, radio, television, film, recordings and exhibitions, to tell the community about this work.",
  },
];

const MILESTONES = [
  {
    date: "30 September 2022",
    text: "The trustees are constituted at a meeting of the trust.",
  },
  {
    date: "7 August 2023",
    text: "The Principal Land Registrar grants the Certificate of Incorporation in Nairobi.",
  },
  {
    date: "10 August 2023",
    text: "The certificate is registered with the Lands Department, under the Trustees (Perpetual Succession) Act, Cap. 164.",
  },
];

const SAFEGUARDS = [
  {
    title: "Trustees are accountable",
    text: "Each of our 11 trustees holds office under the terms and limits of the trust deed. When a new trustee is appointed, the remaining trustees confirm it in writing to the Registrar.",
  },
  {
    title: "Yearly reporting",
    text: "Within a month after each year from the date of the certificate, the trustees send the Registrar the names, residences and descriptions of the trustees.",
  },
  {
    title: "A common seal, used with care",
    text: "The trust\u2019s common seal is kept by the trustees. It may only be used with their authority, and in the presence of at least two trustees, who must sign every document it is used on.",
  },
  {
    title: "Land is held for its purpose",
    text: "The trust may hold movable and immovable property in Kenya, whether bought, donated or given. Land and buildings may be used only for purposes that agree with the trust\u2019s objects, and with any wishes the donor expressed.",
  },
];

const textLink =
  "font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep";

export default function About() {
  return (
    <>
      <PageHeader
        title="About us"
        intro="The story of Magundu Ma Chuka, and the registered trust working for the land rights of the Chuka people."
      />

      <section
        id="story"
        aria-labelledby="story-heading"
        className="scroll-mt-24 border-y border-forest/15 bg-white"
      >
        <div className="mx-auto grid max-w-304 gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2
              id="story-heading"
              className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl"
            >
              Our story: Magundu Ma Chuka
            </h2>
            <p className="mt-4 text-lg">
              This is the history of the land as the community tells it, and the
              steps taken since.
            </p>
          </div>
          <ol className="space-y-8 border-l-4 border-gold pl-6 lg:col-span-8">
            {STORY.map(({ date, text }) => (
              <li key={date}>
                <p className="font-display text-xl font-bold text-ink">
                  {date}
                </p>
                <p className="mt-1 max-w-xl text-lg">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="who-heading">
        <div className="mx-auto grid max-w-304 gap-8 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <h2
            id="who-heading"
            className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl lg:col-span-4"
          >
            Who we are
          </h2>
          <div className="max-w-2xl space-y-5 text-lg lg:col-span-8">
            <p>
              Atiriri Bururi Ma Chuka Trust is a community trust. Its main
              purpose is to identify, establish and promote the land rights of
              the Chuka community.
            </p>
            <p>
              We are a body corporate, registered as &ldquo;Atiriri Bururi Ma
              Chuka Trust Registered Trustees&rdquo; and governed by a trust
              deed. Everything we do must serve the purposes set out in that
              deed.
            </p>
            <p>Our postal address is P.O. Box 49, Magumoni.</p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="purpose-heading"
        className="border-y border-forest/15 bg-white"
      >
        <div className="mx-auto max-w-304 px-4 py-16 sm:px-8 sm:py-20">
          <h2
            id="purpose-heading"
            className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl"
          >
            What we exist to do
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            Our trust deed names these purposes. They guide every project we
            take on.
          </p>
          <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {PURPOSES.map(({ title, text }) => (
              <li key={title} className="border-t-4 border-gold pt-4">
                <h3 className="font-display text-xl leading-snug font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-lg">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="milestones-heading">
        <div className="mx-auto grid max-w-304 gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <h2
            id="milestones-heading"
            className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl lg:col-span-4"
          >
            How we were registered
          </h2>
          <ol className="space-y-8 border-l-4 border-gold pl-6 lg:col-span-8">
            {MILESTONES.map(({ date, text }) => (
              <li key={date}>
                <p className="font-display text-xl font-bold text-ink">
                  {date}
                </p>
                <p className="mt-1 max-w-xl text-lg">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="governance-heading"
        className="border-y border-forest/15 bg-white"
      >
        <div className="mx-auto max-w-304 px-4 py-16 sm:px-8 sm:py-20">
          <h2
            id="governance-heading"
            className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl"
          >
            How we are held accountable
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            The law and our trust deed put clear limits on how the trust and its
            trustees may act.
          </p>
          <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {SAFEGUARDS.map(({ title, text }) => (
              <div key={title} className="border-l-4 border-gold pl-4">
                <dt className="font-display text-xl leading-snug font-bold text-ink">
                  {title}
                </dt>
                <dd className="mt-2 text-lg">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-label="Next steps">
        <div className="mx-auto flex max-w-304 flex-col gap-4 px-4 py-14 sm:flex-row sm:gap-10 sm:px-8">
          <Link to="/trustees" className={textLink}>
            Meet the trustees
          </Link>
          <Link to="/resources" className={textLink}>
            View our registration documents
          </Link>
        </div>
      </section>
    </>
  );
}
