import { Link } from "react-router";
import PageHeader from "../components/PageHeader";

export function meta() {
  return [
    {
      title: "Resources & Official Documents | Atiriri Bururi Ma Chuka Trust",
    },
    {
      name: "description",
      content:
        "Access registration details and official documents of Atiriri Bururi Ma Chuka Trust, a registered community trust supporting the land rights of the Chuka people.",
    },
    {
      name: "keywords",
      content:
        "Atiriri Bururi Ma Chuka Trust documents, trust registration documents, Chuka community trust, official trust records, Chuka land rights",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://atiriribururimachukatrust.com/resources",
    },
    {
      property: "og:title",
      content: "Resources & Official Documents | Atiriri Bururi Ma Chuka Trust",
    },
    {
      property: "og:description",
      content:
        "Explore registration details and official documents of Atiriri Bururi Ma Chuka Trust.",
    },
    {
      property: "og:url",
      content: "https://atiriribururimachukatrust.com/resources",
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
      content: "Resources | Atiriri Bururi Ma Chuka Trust",
    },
    {
      name: "twitter:description",
      content:
        "Access official registration details and documents of Atiriri Bururi Ma Chuka Trust.",
    },
  ];
}

// Facts taken from the Certificate of Incorporation. Keep in sync with the original.
const REGISTRATION = [
  {
    label: "Name as registered",
    value: "Atiriri Bururi Ma Chuka Trust Registered Trustees",
  },
  {
    label: "Registered under",
    value: "Trustees (Perpetual Succession) Act, Cap. 164",
  },
  {
    label: "Certificate granted by",
    value:
      "The Principal Land Registrar, Ministry of Lands, Housing, Public Works and Urban Development",
  },
  { label: "Date of registration", value: "10 August 2023" },
  { label: "Trustees constituted", value: "30 September 2022" },
  { label: "Number of trustees", value: "11" },
  { label: "Postal address", value: "P.O. Box 49, Magumoni" },
  {
    label: "Common seal",
    value:
      "A circular seal with \u201CAtiriri Bururi Ma Chuka Trust\u201D around the edge and \u201CRegistered Trustees\u201D at the centre",
  },
];

// Add documents once the client has agreed to publish them. Save each file in
// public/documents/ and list it here. While this list is empty, the page tells
// visitors to ask the trust for copies.
//
// Example:
// {
//   title: "Certificate of Incorporation",
//   description: "Issued by the Principal Land Registrar, 10 August 2023.",
//   file: "/documents/certificate-of-incorporation.pdf",
//   type: "PDF",
//   size: "1.2 MB",
// },
const DOCUMENTS = [];

const textLink =
  "font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep";

export default function Resources() {
  return (
    <>
      <PageHeader
        title="Resources"
        intro="Our registration details and official documents, so that anyone can see that the trust is legally established."
      />

      <section aria-labelledby="registration-heading">
        <div className="mx-auto max-w-304 px-4 py-14 sm:px-8 sm:py-20">
          <h2
            id="registration-heading"
            className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl"
          >
            Registration at a glance
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            These details come from the trust&rsquo;s Certificate of
            Incorporation.
          </p>
          <dl className="mt-10 grid gap-x-12 gap-y-7 sm:grid-cols-2">
            {REGISTRATION.map(({ label, value }) => (
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

      <section
        id="documents"
        aria-labelledby="documents-heading"
        className="scroll-mt-24 border-y border-forest/15 bg-white"
      >
        <div className="mx-auto grid max-w-304 gap-8 px-4 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <h2
            id="documents-heading"
            className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl lg:col-span-4"
          >
            Documents
          </h2>

          <div className="max-w-2xl lg:col-span-8">
            {DOCUMENTS.length > 0 ? (
              <ul className="divide-y divide-forest/20 border-y border-forest/20">
                {DOCUMENTS.map(({ title, description, file, type, size }) => (
                  <li key={file} className="py-6">
                    <h3 className="font-display text-xl font-bold text-ink">
                      {title}
                    </h3>
                    {description && (
                      <p className="mt-2 text-lg">{description}</p>
                    )}
                    <a
                      href={file}
                      download
                      className={`${textLink} mt-3 inline-block`}
                    >
                      Download
                      {(type || size) && (
                        <span className="font-normal text-ink/70">
                          {" "}
                          ({[type, size].filter(Boolean).join(", ")})
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-4 text-lg">
                <p>
                  Copies of the Certificate of Incorporation and the trust deed
                  are available from the trust on request.
                </p>
                <p>
                  <Link to="/contact" className={textLink}>
                    Ask for a copy
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
