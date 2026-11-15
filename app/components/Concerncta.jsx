import { Link } from "react-router";

export default function ConcernCTA() {
  return (
    <section
      aria-labelledby="concern-heading"
      className="bg-forest-deep text-cream"
    >
      <div className="mx-auto grid max-w-304 gap-8 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-24">
        <div className="lg:col-span-7">
          <h2
            id="concern-heading"
            className="font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl"
          >
            Do you have a land concern?
          </h2>
          <p className="mt-5 max-w-xl text-xl leading-relaxed text-cream/90">
            Tell us what is happening and where. A member of our team will
            contact you.
          </p>
          <p className="mt-4 max-w-xl text-[0.9375rem] text-cream/80">
            Your information is treated with care and shared only with those
            assisting your case.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:col-span-5 lg:flex-col lg:items-start">
          <Link
            to="/get-involved#report"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 py-3 font-bold text-ink no-underline hover:bg-[#e0b04f] focus-visible:outline-cream"
          >
            Report a land concern
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-cream/70 px-6 py-3 font-bold text-cream no-underline hover:bg-cream hover:text-forest focus-visible:outline-cream"
          >
            Contact the trust
          </Link>
        </div>
      </div>
    </section>
  );
}
