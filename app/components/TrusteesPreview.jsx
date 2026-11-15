import { Link } from "react-router";

export default function TrusteesPreview() {
  return (
    <section aria-labelledby="trustees-heading">
      <div className="mx-auto grid max-w-304 items-center gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <figure className="lg:col-span-6">
          {/* Save the photo as public/images/trustees.jpg (about 1200px wide). */}
          <img
            src="/Trustees.jpeg"
            alt="A group of the trust's trustees standing together indoors"
            width="1200"
            height="900"
            loading="lazy"
            className="aspect-4/3 w-full rounded-sm bg-forest/10 object-cover"
          />
          <figcaption className="mt-3 text-[0.9375rem] text-ink/80">
            Some of the trust&rsquo;s 11 registered trustees.
          </figcaption>
        </figure>

        <div className="lg:col-span-6">
          <h2
            id="trustees-heading"
            className="font-display text-3xl leading-tight font-bold text-forest sm:text-4xl"
          >
            Our trustees
          </h2>
          <p className="mt-5 max-w-xl text-lg">
            The trust is governed by 11 registered trustees. They hold office
            under the terms of our trust deed, and each year they update the
            Land Registrar on who the trustees are and where they live.
          </p>
          <p className="mt-4 max-w-xl text-lg">
            Every land instrument the trust signs must carry the common seal and
            the signatures of at least two trustees.
          </p>
          <Link
            to="/trustees"
            className="mt-6 inline-block font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep"
          >
            Meet the trustees
          </Link>
        </div>
      </div>
    </section>
  );
}
