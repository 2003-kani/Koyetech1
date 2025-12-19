"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ state: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) {
        setStatus({ state: "error", message: json.error || "Submission failed." });
        return;
      }

      setStatus({
        state: "success",
        message: json.message || "Thanks! We’ll get back to you soon.",
      });
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      setStatus({ state: "error", message: "Network error. Please try again." });
    }
  }

  const disabled = status.state === "submitting";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Full Name *</span>
          <input
            type="text"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
            placeholder="John Doe"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Email Address *</span>
          <input
            type="email"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            required
            placeholder="john@company.com"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Phone Number</span>
          <input
            type="tel"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="+1 (555) 000-0000"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Company Name</span>
          <input
            type="text"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors"
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            placeholder="Company Ltd"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Subject *</span>
        <select
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors appearance-none"
          name="subject"
          id="subject"
        >
          <option>General Inquiry</option>
          <option>Project Discussion</option>
          <option>Partnership</option>
          <option>Careers</option>
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Message *</span>
        <textarea
          className="mt-2 min-h-32 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          required
          placeholder="Tell us what you’re looking to build or the roles you need..."
        />
      </label>

      {
        status.state === "success" ? (
          <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-200">
            {status.message}
          </div>
        ) : null
      }
      {
        status.state === "error" ? (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {status.message}
          </div>
        ) : null
      }

      <div className="flex items-center gap-3">
        <Button disabled={disabled} className="bg-brand-accent hover:bg-brand-accent/90 text-white shadow-lg shadow-brand-accent/20">
          {status.state === "submitting" ? "Sending…" : "Send message"}
        </Button>
        <div className="text-xs text-blue-200/60">
          We’ll respond as soon as possible.
        </div>
      </div>
    </form >
  );
}
