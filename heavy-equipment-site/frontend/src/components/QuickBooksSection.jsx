import { useState } from "react";
import { createInvoiceMock } from "../api";

export default function QuickBooksSection() {
  const [status, setStatus] = useState(null);
  const [err, setErr] = useState(null);

  async function demoCreateInvoice() {
    setErr(null);
    setStatus("Creating mock invoice…");

    try {
      const res = await createInvoiceMock({
        customerName: "Demo Customer",
        lineItems: [
          { description: "Diagnostics", amount: 150 },
          { description: "Labor", amount: 300 }
        ]
      });
      setStatus(`Mock invoice created: ${res.invoiceId} — Total $${res.total}`);
    } catch (e) {
      setErr(e.message);
      setStatus(null);
    }
  }

  return (
    <section className="border-t border-zinc-200 bg-white py-14 md:py-20">
      <div className="container-max">
        <div className="rounded-3xl border border-zinc-200 p-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Seamless QuickBooks Integration
          </h2>
          <p className="mt-2 max-w-3xl text-zinc-600">
            The site is wired as a full stack app: the quote form posts to the Python API,
            and invoices can be created through backend routes (mocked now).
            When you’re ready, we replace the mock endpoints with real QuickBooks OAuth + API calls.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["Create Invoice", "QuickBooks API", "Track Payments", "Generate Reports"].map((t) => (
              <div key={t} className="rounded-2xl border border-zinc-200 p-4 text-sm font-semibold">
                {t}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={demoCreateInvoice}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Demo: Create Invoice (Mock)
            </button>

            <div className="text-sm text-zinc-600">
              This will call <span className="font-mono text-xs">POST /api/invoices</span> on the Flask backend.
            </div>
          </div>

          {status && (
            <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm">
              {status}
            </div>
          )}

          {err && (
            <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
              {err}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
