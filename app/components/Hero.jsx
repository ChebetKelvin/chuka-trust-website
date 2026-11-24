import { Link } from "react-router";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-136 flex-col overflow-hidden bg-forest-deep text-cream lg:min-h-160"
    >
      {/* Background photo. Save the client's image as public/images/hero.png */}
      {/* Background photo: a tall crop for phones, a wide crop for desktop */}
      <picture className="absolute inset-0">
        <source media="(min-width: 64rem)" srcSet="/hero-desktop.png" />
        <img
          src="/hero-mobile.png"
          alt=""
          width="800"
          height="1200"
          fetchPriority="high"
          className="size-full object-cover object-center"
        />
      </picture>

      {/* Dark overlay keeps the text readable on any photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-forest-deep/75 lg:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-linear-to-r from-forest-deep/90 via-forest-deep/70 to-forest-deep/20 lg:block"
      />

      <div className="relative mx-auto flex w-full max-w-304 flex-1 flex-col justify-center px-4 py-16 sm:px-8 sm:py-24">
        <h1
          id="hero-heading"
          className="max-w-3xl font-display text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl"
        >
          <span className="block">Protecting the land.</span>
          <span className="block">
            Securing the future of the Chuka people.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-xl leading-relaxed text-cream/90">
          Atiriri Bururi Ma Chuka Trust works to identify, affirm and promote
          the land rights of the Chuka community, for today&rsquo;s families and
          generations to come.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:mt-12">
          <Link
            to="/about"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 py-3 font-bold text-ink no-underline hover:bg-[#e0b04f] focus-visible:outline-cream"
          >
            Learn who we are
          </Link>
        </div>
      </div>

      {/* Full name of the organisation */}
      <div className="relative border-t-[3px] border-gold bg-forest-deep/85 backdrop-blur-sm">
        <p className="mx-auto max-w-304 px-4 py-2 text-center font-display text-lg font-semibold text-cream sm:px-8 sm:text-xl lg:text-left">
          Atiriri Bururi Ma Chuka Trust Registered Trustees
        </p>
      </div>
    </section>
  );
}
