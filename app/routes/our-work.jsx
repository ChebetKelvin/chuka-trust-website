import { Link } from "react-router";
import PageHeader from "../components/PageHeader";

export function meta() {
  return [
    { title: "Our Work | Atiriri Bururi Ma Chuka Trust" },
    {
      name: "description",
      content:
        "How Atiriri Bururi Ma Chuka Trust works for the land rights of the Chuka people: land conflicts, communal land, dispute resolution, landless families and research.",
    },
  ];
}

const AREAS = [
  {
    id: "communal-land",
    title: "Communal land",
    text: [
      "The trust promotes the proper use of all the communal land that belongs to the Chuka people, and monitors that use, so that the community benefits from it.",
    ],
    activities: [],
  },
  {
    id: "dispute-resolution",
    title: "Resolving land disputes",
    text: [
      "The trust aims to establish proper alternative dispute resolution mechanisms for land rights. These are ways of settling land disputes other than through the courts, so that families have fair options when they disagree.",
    ],
    link: { to: "/get-involved#report", label: "Tell us about a dispute" },
    activities: [],
  },
  {
    id: "landless-support",
    title: "Landless families and poverty",
    text: [
      "The trust works to ease the plight of landless people within the Chuka community. It also takes part in poverty eradication strategies, whether run by the trust itself or by others.",
    ],
    link: { to: "/contact", label: "Contact the trust" },
    activities: [],
  },
  {
    id: "research-and-media",
    title: "Research and sharing information",
    text: [
      "The trust conducts, and encourages others to conduct, research on matters relevant to its purposes. It shares this work through print, radio, television, film, recordings and exhibitions.",
    ],
    link: { to: "/resources", label: "See our resources" },
    activities: [],
  },
];

const textLink =
  "inline-block font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep";

export default function OurWork() {
  return (
    <>
      <PageHeader
        title="Our work"
        intro="Everything the trust does follows the purposes set out in its trust deed."
      />

      <nav
        aria-label="On this page"
        className="border-b border-forest/15 bg-white"
      >
        <ul className="mx-auto flex max-w-304 flex-wrap gap-x-8 gap-y-3 px-4 py-5 sm:px-8">
          {AREAS.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {AREAS.map(({ id, title, text, link, activities }, index) => (
        <section
          key={id}
          id={id}
          aria-labelledby={`${id}-heading`}
          className={`scroll-mt-24 ${index % 2 === 0 ? "" : "border-y border-forest/15 bg-white"}`}
        >
          <div className="mx-auto grid max-w-304 gap-6 px-4 py-14 sm:px-8 sm:py-16 lg:grid-cols-12 lg:gap-16">
            <h2
              id={`${id}-heading`}
              className="font-display text-3xl leading-tight font-bold text-forest lg:col-span-4"
            >
              {title}
            </h2>
            <div className="max-w-2xl space-y-4 text-lg lg:col-span-8">
              {text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {activities.length > 0 && (
                <div className="pt-2">
                  <h3 className="font-display text-xl font-bold text-ink">
                    Current activities
                  </h3>
                  <ul className="mt-3 space-y-3 border-l-4 border-gold pl-4">
                    {activities.map((activity) => (
                      <li key={activity.title}>
                        <p className="font-semibold text-ink">
                          {activity.title}
                        </p>
                        {activity.description && <p>{activity.description}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {link && (
                <p>
                  <Link to={link.to} className={textLink}>
                    {link.label}
                  </Link>
                </p>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
