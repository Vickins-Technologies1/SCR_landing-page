"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || z.string().email().safeParse(v).success, "Please enter a valid email."),
  phone: z.string().optional(),
  subject: z.string().trim().optional(),
  message: z.string().min(12, "Tell us a bit more so we can respond well."),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  onSubmitted?: (values: FormValues) => void;
};

export function ContactForm({ onSubmitted }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "", website: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitted(false);
    setSubmitError(null);

    if (values.website?.trim()) {
      reset();
      setSubmitted(true);
      return;
    }

    const contactApiUrl =
      process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "https://app.soranapropertymanagers.com/api/public/contact";

    const payload = {
      name: values.name.trim(),
      email: values.email?.trim() || undefined,
      phone: values.phone?.trim() || undefined,
      subject: values.subject?.trim() || undefined,
      message: values.message.trim(),
      website: "",
    };

    let res: Response;
    try {
      res = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch {
      setSubmitError("Could not reach the contact service. Please try again.");
      return;
    }

    if (!res.ok) {
      const maybeJson = await res.json().catch(() => null);
      const message =
        (maybeJson && typeof maybeJson === "object" && "error" in maybeJson && typeof maybeJson.error === "string"
          ? maybeJson.error
          : null) ||
        (maybeJson && typeof maybeJson === "object" && "message" in maybeJson && typeof maybeJson.message === "string"
          ? maybeJson.message
          : null) ||
        `Failed to send message (HTTP ${res.status}).`;

      setSubmitError(message);
      return;
    }

    onSubmitted?.(values);
    reset();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Jane Wanjiku"
          {...register("name")}
          className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-sm transition-all"
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-2 text-xs text-primary">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email Address (optional)
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            {...register("email")}
            className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-sm transition-all"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-2 text-xs text-primary">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+254 7xx xxx xxx"
            {...register("phone")}
            className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-sm transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-2">
          Subject (optional)
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Property management enquiry"
          {...register("subject")}
          className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-sm transition-all"
          aria-invalid={!!errors.subject}
        />
        {errors.subject && <p className="mt-2 text-xs text-primary">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell us what you own, where it is located, and what you’d like us to handle."
          {...register("message")}
          className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-sm resize-none transition-all"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-2 text-xs text-primary">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-hover disabled:opacity-80 disabled:cursor-not-allowed text-primary-foreground font-semibold py-4 px-8 rounded-full text-sm shadow-xl transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      {submitted && (
        <div className="rounded-2xl border border-border/60 bg-muted/40 px-5 py-4 text-sm text-muted-foreground">
          Message received. A Sorana advisor will respond within one business day.
        </div>
      )}

      {submitError && (
        <div className="rounded-2xl border border-primary/40 bg-primary/5 px-5 py-4 text-sm text-foreground">
          {submitError}
        </div>
      )}
    </form>
  );
}
