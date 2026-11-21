# MEDVERSE 3D — GitHub & Vercel Deployment Guide
## برمجة وتطوير معتز العلقمي – تعز – اليمن – 2026م

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "MEDVERSE 3D — Complete Phases 01 to 06"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/medverse-3d.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to https://vercel.com/new and import your `medverse-3d` GitHub repository.
2. Vercel auto-detects **Vite** (`vercel.json` is already configured with `npm run build` and `dist`, plus `/api/tutor` serverless function).
3. In **Vercel → Project Settings → Environment Variables**, add:
   - `GEMINI_API_KEY` = Your Google AI Studio Gemini API Key (server-side only; **never** prefix with `VITE_`).
   - `GEMINI_MODEL` = `gemini-2.5-flash` (optional).
4. Click **Deploy**. Even without `GEMINI_API_KEY`, the entire 3D platform works using the built-in Local Grounded RAG Engine!

### 3. Run Automated Unit Tests Locally
```bash
node src/features/physiology/tests/simulation.test.mjs
node src/features/pharmacology/tests/pharmacology.test.mjs
node src/features/ai-tutor/tests/rag-safety-cms.test.mjs
```
