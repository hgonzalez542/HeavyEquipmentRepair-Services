import { useState } from "react";
import { submitQuote } from "../api";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setError(null);
    setResult(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name")?.toString().trim(),
      email: form.get("email")?.toString().trim(),
      phone: form.get("phone")?.toString().trim(),
      serviceNeeded: form.get("serviceNeeded")?.toString().trim(),
      details: form.get("details")?.toString().trim()
    };

    try {
      setLoading(true);
      const res = await submitQuote(payload);
      setResult(res);
      e.currentTarget.reset();
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="quote" className="border-y border-zinc-200 bg-zinc-50 py-14 md:py-20">
      <div className="container-max grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Request a Quote</h2>
          <p className="mt-2 text-zinc-600">
            Tell us what you need — we’ll respond quickly with next steps.
          </p>

          <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-semibold">Service Area</div>
            <p className="mt-2 text-sm text-zinc-600">
              Based in Seekonk, MA — Our shop works with all types of commercial/heavy duty trucks, with our prices that beat the competition. We not only service but we program, install, and diagnose all makes and models.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-zinc-700">
              <div><span className="font-semibold">Primary:</span> 508-954-9397</div>
              <div><span className="font-semibold">Secondary:</span> 401-215-8651</div>
              <div><span className="font-semibold">Address:</span> 132 Old Fall River Rd, Seekonk, MA 02771</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Name</label>
              <input name="name" className="rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-900/10" placeholder="Your name" />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Email</label>
              <input name="email" type="email" className="rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-900/10" placeholder="you@email.com" />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Phone</label>
              <input name="phone" className="rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-900/10" placeholder="(###) ###-####" />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Service needed</label>
              <select name="serviceNeeded" className="rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-900/10">
                <option value="">Select…</option>
                <option>Engine Repair</option>
                <option>Diagnostics & Programming</option>
                <option>Tire Services</option>
                <option>Construction Equipment</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Details</label>
              <textarea name="details" rows="4" className="rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-900/10" placeholder="Truck/equipment info, symptoms, urgency…" />
            </div>

            <button
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Request"}
            </button>

            {result && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                <div className="font-semibold">Request sent</div>
                <div className="mt-1">{result.message}</div>
                <div className="mt-2 text-xs opacity-80">Quote ID: {result.quoteId}</div>
              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
                <div className="font-semibold">Couldn’t send</div>
                <div className="mt-1">{error}</div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
