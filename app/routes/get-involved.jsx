import { useEffect, useRef } from "react";
import { data, Form, Link, useActionData, useNavigation } from "react-router";
import { sendConcernEmail } from "../lib/mail.server";

export function meta() {
  return [
    { title: "Get Involved | Atiriri Bururi Ma Chuka Trust" },
    {
      name: "description",
      content:
        "Report a land concern to Atiriri Bururi Ma Chuka Trust, or find out how to support the trust's work for the land rights of the Chuka people.",
    },
  ];
}

const CONCERN_TYPES = [
  "Boundary dispute",
  "Landlessness",
  "Succession or inheritance",
  "Eviction or illegal occupation",
  "Other",
];

const clean = (v) => (typeof v === "string" ? v.trim() : "");

export async function action({ request }) {
  const form = await request.formData();

  // Honeypot: real visitors never see or fill this field. Pretend success to bots.
  if (clean(form.get("website"))) return { success: true };

  const values = {
    name: clean(form.get("name")),
    phone: clean(form.get("phone")),
    email: clean(form.get("email")),
    location: clean(form.get("location")),
    concernType: clean(form.get("concernType")),
    description: clean(form.get("description")),
    consent: form.get("consent") === "on",
  };

  const errors = {};
  if (values.name.length < 2 || values.name.length > 100)
    errors.name = "Enter your name.";

  const phoneDigits = values.phone.replace(/[\s-]/g, "");
  if (!/^(?:\+?254|0)[17]\d{8}$/.test(phoneDigits))
    errors.phone =
      "Enter a valid Kenyan phone number, for example 0712 345 678.";

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address, or leave this blank.";

  if (values.location.length < 2 || values.location.length > 150)
    errors.location =
      "Enter the village, area or sub-county where the land is.";

  if (!CONCERN_TYPES.includes(values.concernType))
    errors.concernType = "Choose the type of concern.";

  if (values.description.length < 20 || values.description.length > 3000)
    errors.description =
      "Describe the concern in at least 20 characters (up to 3,000).";

  if (!values.consent)
    errors.consent =
      "Tick the box to let us contact you and keep this information.";

  if (Object.keys(errors).length)
    return data({ errors, values }, { status: 400 });

  try {
    await sendConcernEmail({
      name: values.name,
      phone: phoneDigits,
      email: values.email,
      location: values.location,
      concernType: values.concernType,
      description: values.description,
    });
  } catch (err) {
    console.error("Failed to send land concern email:", err);
    return data(
      {
        formError:
          "We could not send your report. Please try again, or contact the trust directly.",
        values,
      },
      { status: 500 },
    );
  }

  return { success: true };
}

const inputClass =
  "mt-1.5 block min-h-12 w-full rounded-md border-2 border-forest/40 bg-white px-4 py-3 text-ink placeholder:text-ink/50 aria-[invalid=true]:border-earth";

function Field({ id, label, error, hint, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold text-ink">
        {label}
        {optional && (
          <span className="font-normal text-ink/70"> (optional)</span>
        )}
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

function describedBy(id, { hint, error }) {
  return (
    [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") ||
    undefined
  );
}

export default function GetInvolved() {
  const result = useActionData();
  const navigation = useNavigation();
  const sending = navigation.state === "submitting";
  const errors = result?.errors ?? {};
  const values = result?.values ?? {};
  const summaryRef = useRef(null);
  const successRef = useRef(null);

  // Move focus to the outcome so screen reader and keyboard users notice it.
  useEffect(() => {
    if (result?.success) successRef.current?.focus();
    else if (result?.errors || result?.formError) summaryRef.current?.focus();
  }, [result]);

  const errorEntries = Object.entries(errors);

  return (
    <>
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-304 px-4 py-14 sm:px-8 sm:py-20">
          <h1 className="font-display text-4xl leading-tight font-bold sm:text-5xl">
            Get involved
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-relaxed text-cream/90">
            If you have a land concern, tell us. If you want to support the
            trust&rsquo;s work, get in touch.
          </p>
        </div>
      </section>

      <section
        id="report"
        aria-labelledby="report-heading"
        className="scroll-mt-24"
      >
        <div className="mx-auto grid max-w-304 gap-10 px-4 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2
              id="report-heading"
              className="font-display text-3xl leading-tight font-bold text-forest"
            >
              Report a land concern
            </h2>
            <p className="mt-4 text-lg">
              Tell us what is happening and where. A member of our team will
              contact you.
            </p>
            <p className="mt-4 text-[0.9375rem] text-ink/80">
              Your information is treated with care and shared only with those
              assisting your case.
            </p>
          </div>

          <div className="lg:col-span-8">
            {result?.success ? (
              <div
                ref={successRef}
                tabIndex={-1}
                role="status"
                className="rounded-md border-l-4 border-gold bg-white p-6 sm:p-8"
              >
                <h3 className="font-display text-2xl font-bold text-forest">
                  Thank you. We have received your report.
                </h3>
                <p className="mt-3 text-lg">
                  A member of our team will contact you on the phone number you
                  gave.
                </p>
                <Link
                  to="/"
                  className="mt-5 inline-block font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4"
                >
                  Back to the home page
                </Link>
              </div>
            ) : (
              <Form method="post" className="space-y-6">
                {(errorEntries.length > 0 || result?.formError) && (
                  <div
                    ref={summaryRef}
                    tabIndex={-1}
                    role="alert"
                    className="rounded-md border-l-4 border-earth bg-white p-5"
                  >
                    <p className="font-bold text-earth">
                      {result.formError ?? "Please fix the following:"}
                    </p>
                    {errorEntries.length > 0 && (
                      <ul className="mt-2 list-disc pl-5">
                        {errorEntries.map(([field, message]) => (
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

                {/* Honeypot, hidden from people */}
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

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field id="name" label="Your name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      defaultValue={values.name}
                      aria-invalid={!!errors.name}
                      aria-describedby={describedBy("name", {
                        error: errors.name,
                      })}
                      className={inputClass}
                    />
                  </Field>
                  <Field id="phone" label="Phone number" error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      defaultValue={values.phone}
                      aria-invalid={!!errors.phone}
                      aria-describedby={describedBy("phone", {
                        error: errors.phone,
                      })}
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field id="email" label="Email" optional error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    defaultValue={values.email}
                    aria-invalid={!!errors.email}
                    aria-describedby={describedBy("email", {
                      error: errors.email,
                    })}
                    className={inputClass}
                  />
                </Field>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    id="location"
                    label="Where is the land?"
                    hint="Village, area or sub-county"
                    error={errors.location}
                  >
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      defaultValue={values.location}
                      aria-invalid={!!errors.location}
                      aria-describedby={describedBy("location", {
                        hint: true,
                        error: errors.location,
                      })}
                      className={inputClass}
                    />
                  </Field>
                  <Field
                    id="concernType"
                    label="Type of concern"
                    error={errors.concernType}
                  >
                    <select
                      id="concernType"
                      name="concernType"
                      required
                      defaultValue={values.concernType ?? ""}
                      aria-invalid={!!errors.concernType}
                      aria-describedby={describedBy("concernType", {
                        error: errors.concernType,
                      })}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Choose one
                      </option>
                      {CONCERN_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field
                  id="description"
                  label="What is happening?"
                  hint="Describe the concern in your own words."
                  error={errors.description}
                >
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    required
                    minLength={20}
                    maxLength={3000}
                    defaultValue={values.description}
                    aria-invalid={!!errors.description}
                    aria-describedby={describedBy("description", {
                      hint: true,
                      error: errors.description,
                    })}
                    className={inputClass}
                  />
                </Field>

                <div>
                  <label className="flex items-start gap-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      defaultChecked={values.consent}
                      aria-invalid={!!errors.consent}
                      aria-describedby={
                        errors.consent ? "consent-error" : undefined
                      }
                      className="mt-1 size-6 flex-none accent-forest"
                    />
                    <span>
                      I agree that the trust may contact me and keep this
                      information to help with my concern.
                    </span>
                  </label>
                  {errors.consent && (
                    <p
                      id="consent-error"
                      className="mt-1.5 font-semibold text-earth"
                    >
                      {errors.consent}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md bg-forest px-8 py-3 font-bold text-cream hover:bg-forest-deep disabled:cursor-wait disabled:opacity-70"
                >
                  {sending ? "Sending…" : "Send report"}
                </button>
              </Form>
            )}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="support-heading"
        className="border-t border-forest/15 bg-white"
      >
        <div className="mx-auto max-w-304 px-4 py-14 sm:px-8 sm:py-16">
          <h2
            id="support-heading"
            className="font-display text-3xl font-bold text-forest"
          >
            Support our work
          </h2>
          <p className="mt-4 max-w-xl text-lg">
            To volunteer, partner with the trust or help in another way, contact
            us and tell us how you would like to be involved.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-forest-deep"
          >
            Contact the trust
          </Link>
        </div>
      </section>
    </>
  );
}
