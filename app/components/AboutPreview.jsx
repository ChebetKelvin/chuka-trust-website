import { Link } from "react-router";

export default function AboutPreview() {
  return (
    <section
      aria-labelledby="about-heading"
      className="border-y border-forest/15 bg-white"
    >
      <div className="mx-auto grid max-w-304 gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-7">
          <h2 id="about-heading" className="sr-only">
            About the trust
          </h2>
          <p className="font-display text-3xl leading-snug font-semibold text-forest sm:text-4xl lg:text-[2.5rem]">
            Atiriri Bururi Ma Chuka Trust is a community trust formed to
            safeguard the land rights of the Chuka people.
          </p>
        </div>

        <div className="space-y-5 text-lg lg:col-span-5 lg:border-l-4 lg:border-gold lg:pl-8">
          <p>
            Our trustees were constituted at a meeting on 30 September 2022, and
            the trust was registered under Kenya&rsquo;s Trustees (Perpetual
            Succession) Act in August 2023.
          </p>
          <p>
            Any land or property the trust holds may be used only for the
            purposes in our trust deed and in line with the wishes of those who
            give it. Everything we do is guided by that deed and by the
            community we serve.
          </p>
          <Link
            to="/about#story"
            className="inline-block font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
}
