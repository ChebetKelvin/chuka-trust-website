// Green title band shared by inner pages.
export default function PageHeader({ title, intro }) {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto max-w-304 px-4 py-14 sm:px-8 sm:py-20">
        <h1 className="font-display text-4xl leading-tight font-bold sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-xl text-xl leading-relaxed text-cream/90">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
