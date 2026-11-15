import AboutPreview from "../components/AboutPreview";
import Hero from "../components/Hero";
import TrustFacts from "../components/Trustfacts";
import WhatWeDo from "../components/Whatwedo";
import TrusteesPreview from "../components/TrusteesPreview";
import Concerncta from "../components/Concerncta";

export function meta() {
  return [
    { title: "Atiriri Bururi Ma Chuka Trust" },
    {
      name: "description",
      content:
        "Learn how Atiriri Bururi Ma Chuka Trust was formed, who our trustees are, and how we hold land in trust for the Chuka community.",
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
      <Concerncta />
    </div>
  );
}
