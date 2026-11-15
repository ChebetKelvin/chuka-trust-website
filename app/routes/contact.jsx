import { useEffect, useRef } from "react";
import { data, Form, Link, useActionData, useNavigation } from "react-router";
import PageHeader from "../components/PageHeader";
import { CONTACT, telHref, toE164 } from "../lib/contact";
import { sendContactEmail } from "../lib/mail.server";

export function meta() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Atiriri Bururi Ma Chuka Trust",
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "49",
      addressLocality: "Magumoni",
      addressCountry: "KE",
    },
    ...(CONTACT.phone && { telephone: toE164(CONTACT.phone) }),
    ...(CONTACT.email && { email: CONTACT.email }),
  };

  return [
    { title: "Contact | Atiriri Bururi Ma Chuka Trust" },
    {
      name: "description",
      content:
        "Contact Atiriri Bururi Ma Chuka Trust by phone, email or post (P.O. Box 49, Magumoni), or send the trust a message.",
    },
    { "script:ld+json": structuredData },
  ];
}

const TOPICS = [
  "General enquiry",
  "Membership",
  "Partnership or support",
  "Media or research",
  "Other",
];

const clean = (v) => (typeof v === "string" ? v.trim() : "");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^(?:\+?254|0)[17]\d{8}$/;

export async function action({ request }) {
  const form = await request.formData();
  if (clean(form.get("website"))) return { success: true }; // honeypot

  const values = {
    name: clean(form.get("name")),
    topic: clean(form.get("topic")),
    reply: clean(form.get("reply")),
    body: clean(form.get("body")),
  };

  const errors = {};
  if (values.name.length < 2 || values.name.length > 100)
    errors.name = "Enter your name.";

  if (!TOPICS.includes(values.topic))
    errors.topic = "Choose what your message is about.";

  const phoneDigits = values.reply.replace(/[\s-]/g, "");
  const replyIsEmail = EMAIL_RE.test(values.reply);
  const replyIsPhone = PHONE_RE.test(phoneDigits);
  if (!replyIsEmail && !replyIsPhone)
    errors.reply =
      "Enter a valid phone number (like 0712 345 678) or email address.";

  if (values.body.length < 10 || values.body.length > 3000)
    errors.body = "Write your message in at least 10 characters (up to 3,000).";

  if (Object.keys(errors).length)
    return data({ errors, values }, { status: 400 });

  try {
    await sendContactEmail({
      name: values.name,
      topic: values.topic,
      reply: replyIsEmail ? values.reply : phoneDigits,
      replyIsEmail,
      body: values.body,
    });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return data(
      {
        formError: "We could not send your message. Please try again later.",
        values,
      },
      { status: 500 },
    );
  }

  return { success: true };
}

const inputClass =
  "mt-1.5 block min-h-12 w-full rounded-md border-2 border-forest/40 bg-white px-4 py-3 text-ink aria-[invalid=true]:border-earth";
const textLink =
  "font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep";

function Field({ id, label, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold text-ink">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="text-[0.9375rem] text-ink/75">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-semibold text-earth">
          {error}
        </p>
      )}
    </div>
  );
}

const describedBy = (id, hint, error) =>
  [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") ||
  undefined;

export default function Contact() {
  const result = useActionData();
  const sending = useNavigation().state === "submitting";
  const errors = result?.errors ?? {};
  const values = result?.values ?? {};
  const outcomeRef = useRef(null);

  useEffect(() => {
    if (result) outcomeRef.current?.focus();
  }, [result]);

  const hasDetails = CONTACT.phone || CONTACT.whatsapp || CONTACT.email;

  return (
    <>
      <PageHeader
        title="Contact"
        intro="Write to the trust, or reach us using the details below."
      />

      <section aria-labelledby="details-heading">
        <div className="mx-auto grid max-w-304 gap-12 px-4 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2
              id="details-heading"
              className="font-display text-3xl leading-tight font-bold text-forest"
            >
              Reach us
            </h2>
            <dl className="mt-6 space-y-5 text-lg">
              <div className="border-l-4 border-gold pl-4">
                <dt className="text-[0.9375rem] font-semibold text-earth">
                  Postal address
                </dt>
                <dd className="mt-1 font-display text-xl font-semibold">
                  {CONTACT.address}
                </dd>
              </div>
              {CONTACT.phone && (
                <div className="border-l-4 border-gold pl-4">
                  <dt className="text-[0.9375rem] font-semibold text-earth">
                    Phone
                  </dt>
                  <dd className="mt-1 font-display text-xl font-semibold">
                    <a href={telHref(CONTACT.phone)} className={textLink}>
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
              )}
              {CONTACT.whatsapp && (
                <div className="border-l-4 border-gold pl-4">
                  <dt className="text-[0.9375rem] font-semibold text-earth">
                    WhatsApp
                  </dt>
                  <dd className="mt-1 font-display text-xl font-semibold">
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp}`}
                      rel="noopener"
                      className={textLink}
                    >
                      Message us on WhatsApp
                    </a>
                  </dd>
                </div>
              )}
              {CONTACT.email && (
                <div className="border-l-4 border-gold pl-4">
                  <dt className="text-[0.9375rem] font-semibold text-earth">
                    Email
                  </dt>
                  <dd className="mt-1 font-display text-xl font-semibold break-all">
                    <a href={`mailto:${CONTACT.email}`} className={textLink}>
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
            {!hasDetails && (
              <p className="mt-6 text-lg">
                The quickest way to reach us is to send a message using the
                form.
              </p>
            )}
            <p className="mt-8 text-lg">
              Have a land concern? Please use the{" "}
              <Link to="/get-involved#report" className={textLink}>
                report form
              </Link>{" "}
              instead, so we can see the details we need.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl leading-tight font-bold text-forest">
              Send a message
            </h2>

            {result?.success ? (
              <div
                ref={outcomeRef}
                tabIndex={-1}
                role="status"
                className="mt-6 rounded-md border-l-4 border-gold bg-white p-6 sm:p-8"
              >
                <h3 className="font-display text-2xl font-bold text-forest">
                  Thank you. Your message has been sent.
                </h3>
                <p className="mt-3 text-lg">
                  We will reply using the details you gave.
                </p>
              </div>
            ) : (
              <Form method="post" className="mt-6 space-y-6">
                {(result?.formError || Object.keys(errors).length > 0) && (
                  <div
                    ref={outcomeRef}
                    tabIndex={-1}
                    role="alert"
                    className="rounded-md border-l-4 border-earth bg-white p-5"
                  >
                    <p className="font-bold text-earth">
                      {result.formError ?? "Please fix the following:"}
                    </p>
                    {Object.keys(errors).length > 0 && (
                      <ul className="mt-2 list-disc pl-5">
                        {Object.entries(errors).map(([field, message]) => (
                          <li key={field}>
                            <a
                              href={`#${field}`}
                              className="underline underline-offset-2"
                            >
                              {message}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                <div aria-hidden="true" className="absolute left-[-9999px]">
                  <label>
                    Website
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                <Field id="name" label="Your name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    defaultValue={values.name}
                    aria-invalid={!!errors.name}
                    aria-describedby={describedBy("name", false, errors.name)}
                    className={inputClass}
                  />
                </Field>

                <Field
                  id="reply"
                  label="Phone number or email"
                  hint="Where should we reply?"
                  error={errors.reply}
                >
                  <input
                    id="reply"
                    name="reply"
                    type="text"
                    inputMode="email"
                    autoComplete="email"
                    required
                    defaultValue={values.reply}
                    aria-invalid={!!errors.reply}
                    aria-describedby={describedBy("reply", true, errors.reply)}
                    className={inputClass}
                  />
                </Field>

                <Field
                  id="topic"
                  label="What is your message about?"
                  error={errors.topic}
                >
                  <select
                    id="topic"
                    name="topic"
                    required
                    defaultValue={values.topic ?? "General enquiry"}
                    aria-invalid={!!errors.topic}
                    aria-describedby={describedBy("topic", false, errors.topic)}
                    className={inputClass}
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="body" label="Your message" error={errors.body}>
                  <textarea
                    id="body"
                    name="body"
                    rows={6}
                    required
                    minLength={10}
                    maxLength={3000}
                    defaultValue={values.body}
                    aria-invalid={!!errors.body}
                    aria-describedby={describedBy("body", false, errors.body)}
                    className={inputClass}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md bg-forest px-8 py-3 font-bold text-cream hover:bg-forest-deep disabled:cursor-wait disabled:opacity-70"
                >
                  {sending ? "Sending…" : "Send message"}
                </button>
              </Form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
