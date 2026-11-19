import AboutPreview from "../components/AboutPreview";
import Hero from "../components/Hero";
import TrustFacts from "../components/Trustfacts";
import WhatWeDo from "../components/Whatwedo";
import TrusteesPreview from "../components/TrusteesPreview";

export function meta() {
  return [
    {
      title: "Atiriri Bururi Ma Chuka Trust | Community Land Trust",
    },
    {
      name: "description",
      content:
        "Discover Atiriri Bururi Ma Chuka Trust, its history, trustees and commitment to holding land in trust for the Chuka community.",
    },
    {
      name: "keywords",
      content:
        "Atiriri Bururi Ma Chuka Trust, Chuka community, community land trust, Chuka trust land",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://atiriribururimachukatrust.com/",
    },
    {
      property: "og:title",
      content: "Atiriri Bururi Ma Chuka Trust",
    },
    {
      property: "og:description",
      content:
        "Learn about Atiriri Bururi Ma Chuka Trust, its trustees and its commitment to the Chuka community.",
    },
    {
      property: "og:url",
      content: "https://atiriribururimachukatrust.com/",
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
      content: "Atiriri Bururi Ma Chuka Trust",
    },
    {
      name: "twitter:description",
      content:
        "Discover the history, trustees and community role of Atiriri Bururi Ma Chuka Trust.",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustFacts />
      <WhatWeDo />
      <AboutPreview />
      <TrusteesPreview />
    </div>
  );
}
