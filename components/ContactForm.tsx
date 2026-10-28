"use client";

import { useState, type FormEvent } from "react";
import { buttonClasses } from "./Button";

type Status = "idle" | "sending" | "success" | "error";

const fieldClasses =
  "mt-2 w-full rounded-xl border border-navy/20 bg-ivory/50 px-4 py-3 transition-colors hover:border-navy/50 focus:border-gold focus:bg-white";

// "source" is optional: a project page passes its name so you know where the enquiry came from.
export default function ContactForm({ source }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the page from reloading
    setStatus("sending");

    // Collect all the form fields into a simple object
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrorText(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setErrorText("We could not reach the server. Check your internet and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-navy/5">
        <h2 className="font-serif text-3xl">Thank you. We have your details.</h2>
        <p className="mt-3">We will call you soon to understand your plan and book your free consultation.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm underline">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-navy/5 md:p-10">
      {source && <input type="hidden" name="source" value={source} />}
      <div>
        <label htmlFor="name" className="text-sm font-semibold">
          Your name
        </label>
        <input id="name" name="name" type="text" required minLength={2} autoComplete="name" className={fieldClasses} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold">
            Email (optional)
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={fieldClasses} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="interest" className="text-sm font-semibold">
            I need help with
          </label>
          <select id="interest" name="interest" className={fieldClasses}>
            <option>Where to invest</option>
            <option>Price and budget planning</option>
            <option>Home loan</option>
            <option>Everything above</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="text-sm font-semibold">
            Budget
          </label>
          <select id="budget" name="budget" className={fieldClasses}>
            <option>Below ₹60 lakh</option>
            <option>₹60 lakh to ₹1 crore</option>
            <option>₹1 crore to ₹2 crore</option>
            <option>Above ₹2 crore</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold">
          Anything else we should know? (optional)
        </label>
        <textarea id="message" name="message" rows={4} className={fieldClasses} />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl border-l-4 border-red-800 bg-red-50 px-4 py-3 text-sm text-red-900">
          {errorText}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className={`${buttonClasses("navy")} disabled:opacity-60`}>
        {status === "sending" ? "Sending..." : "Request a free consultation"}
      </button>
    </form>
  );
}
