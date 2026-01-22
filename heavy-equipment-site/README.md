# Heavy Equipment Repair & Services (Full Stack)

## Requirements
- Python 3.10+
- Node.js 18+

## Run Backend
```bash
cd backend
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
# source .venv/bin/activate

pip install -r requirements.txt
python app.py
```

Backend runs on: http://localhost:5000

## Run Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: http://localhost:5173

## API
- GET  /api/health
- POST /api/quote
- POST /api/invoices (mock)

QuickBooks OAuth routes are placeholders:
- GET /api/qbo/connect
- GET /api/qbo/callback
