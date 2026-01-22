import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.get("/api/health")
def health():
    return jsonify({"ok": True, "service": "backend", "message": "API is healthy"})

@app.post("/api/quote")
def create_quote():
    data = request.get_json(force=True)

    required = ["name", "email", "phone", "serviceNeeded"]
    missing = [k for k in required if not data.get(k)]
    if missing:
        return jsonify({"ok": False, "error": f"Missing fields: {', '.join(missing)}"}), 400

    quote_id = f"Q-{abs(hash(data['email'])) % 100000:05d}"

    return jsonify({
        "ok": True,
        "quoteId": quote_id,
        "message": "Quote request received. We'll reach out shortly."
    })

@app.post("/api/invoices")
def create_invoice_mock():
    data = request.get_json(force=True)

    if not data.get("customerName") or not data.get("lineItems"):
        return jsonify({"ok": False, "error": "customerName and lineItems are required"}), 400

    invoice_id = f"INV-{abs(hash(data['customerName'])) % 100000:05d}"
    total = sum((float(item.get("amount", 0)) for item in data.get("lineItems", [])), 0.0)

    return jsonify({
        "ok": True,
        "invoiceId": invoice_id,
        "total": round(total, 2),
        "status": "CREATED_MOCK",
        "message": "Mock invoice created (QuickBooks integration placeholder)."
    })

@app.get("/api/qbo/connect")
def qbo_connect():
    return jsonify({
        "ok": True,
        "message": "QuickBooks OAuth connect route placeholder. Add Intuit OAuth here."
    })

@app.get("/api/qbo/callback")
def qbo_callback():
    return jsonify({
        "ok": True,
        "message": "QuickBooks OAuth callback placeholder. Handle auth code here."
    })

if __name__ == "__main__":
    port = int(os.getenv("PORT", "5000"))
    app.run(host="0.0.0.0", port=port, debug=True)
