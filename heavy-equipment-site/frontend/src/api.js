const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export async function apiHealth() {
  const res = await fetch(`${API_BASE}/api/health`);
  return res.json();
}

export async function submitQuote(payload) {
  const res = await fetch(`${API_BASE}/api/quote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Failed to submit quote");
  return data;
}

export async function createInvoiceMock(payload) {
  const res = await fetch(`${API_BASE}/api/invoices`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Failed to create invoice");
  return data;
}
