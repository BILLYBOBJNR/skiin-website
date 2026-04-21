"use client";

import { useState } from "react";

type Status = "New Customer" | "Existing Customer";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("New Customer");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire up to your email provider / Formspree / etc.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-peach/30 border border-peach p-8 text-center">
        <p className="text-brown font-semibold text-lg mb-2">
          Thank you — we&apos;ll be in touch shortly!
        </p>
        <p className="text-brown/60 text-sm">
          Our team typically responds within a few hours during clinic hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-wider uppercase text-brown/60 mb-1.5 font-medium">
            First Name <span className="text-brown">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full bg-cream border border-brown/20 focus:border-brown px-4 py-3 text-sm text-brown placeholder-brown/30 outline-none transition-colors"
            placeholder="Jane"
          />
        </div>
        <div>
          <label className="block text-xs tracking-wider uppercase text-brown/60 mb-1.5 font-medium">
            Last Name <span className="text-brown">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full bg-cream border border-brown/20 focus:border-brown px-4 py-3 text-sm text-brown placeholder-brown/30 outline-none transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-wider uppercase text-brown/60 mb-1.5 font-medium">
            Email <span className="text-brown">*</span>
          </label>
          <input
            type="email"
            required
            className="w-full bg-cream border border-brown/20 focus:border-brown px-4 py-3 text-sm text-brown placeholder-brown/30 outline-none transition-colors"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label className="block text-xs tracking-wider uppercase text-brown/60 mb-1.5 font-medium">
            Telephone <span className="text-brown">*</span>
          </label>
          <input
            type="tel"
            required
            className="w-full bg-cream border border-brown/20 focus:border-brown px-4 py-3 text-sm text-brown placeholder-brown/30 outline-none transition-colors"
            placeholder="07700 900000"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-brown/60 mb-2 font-medium">
          I am a
        </label>
        <div className="flex gap-4">
          {(["New Customer", "Existing Customer"] as Status[]).map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 cursor-pointer text-sm text-brown"
            >
              <input
                type="radio"
                name="status"
                value={opt}
                checked={status === opt}
                onChange={() => setStatus(opt)}
                className="accent-brown w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-brown/60 mb-1.5 font-medium">
          Message <span className="text-brown">*</span>
        </label>
        <textarea
          required
          rows={5}
          className="w-full bg-cream border border-brown/20 focus:border-brown px-4 py-3 text-sm text-brown placeholder-brown/30 outline-none transition-colors resize-none"
          placeholder="Tell us about your skin goals or any questions you have…"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brown text-cream py-4 text-xs tracking-widest uppercase font-semibold hover:bg-dark transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
