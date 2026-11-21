import type { VercelRequest, VercelResponse } from '@vercel/node';

const EMERGENCY_FLAGS = [
  'chest pain', 'cannot breathe', "can't breathe", 'stroke', 'overdose', 'suicide', 'severe bleeding',
  'ألم صدر شديد', 'لا أستطيع التنفس', 'نزيف حاد', 'فقدان وعي'
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question, lang = 'en', mode = 'standard', contextRecords = [] } = req.body || {};
  if (typeof question !== 'string' || question.trim().length < 2 || question.length > 1000) {
    return res.status(400).json({ error: 'Invalid question payload.' });
  }

  const lower = question.toLowerCase();
  if (EMERGENCY_FLAGS.some(f => lower.includes(f))) {
    return res.status(200).json({
      isEmergency: true,
      answer: lang === 'ar'
        ? 'تنبيه طوارئ طبية: يرجى طلب الرعاية الإسعافية المحلية فوراً. منصة MEDVERSE 3D تعليمية فقط ولا تقدم تشخيصاً طبياً.'
        : 'URGENT MEDICAL SAFETY NOTICE: Please seek immediate local emergency medical care. MEDVERSE 3D is an educational platform only.'
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'GEMINI_API_KEY not configured on server; use local RAG fallback.' });
  }

  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const safeContext = Array.isArray(contextRecords)
    ? contextRecords.slice(0, 4).map((r: any) => `- [${String(r.kind || '')}] ${String(r.titleEn || '')} / ${String(r.titleAr || '')}: ${String(r.snippetEn || '')}`).join('\n')
    : '';

  const systemInstruction = [
    'You are the MEDVERSE 3D Medical Education Tutor.',
    'STRICT SAFETY RULES: Educational explanations ONLY. Never diagnose, prescribe, recommend individualized doses, or act as a clinician.',
    'Ground answers in the provided verified internal records. Do not fabricate citations.',
    `Respond in ${lang === 'ar' ? 'Arabic (Modern Standard Medical Arabic)' : 'English'} at a ${mode} level.`
  ].join(' ');

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents: [{ role: 'user', parts: [{ text: `Verified Context:\n${safeContext}\n\nStudent Question:\n${question.trim()}` }] }],
          generationConfig: { temperature: 0.3, maxOutputTokens: 700 }
        })
      }
    );

    if (!geminiRes.ok) {
      return res.status(502).json({ error: 'Upstream Gemini API request failed.' });
    }
    const payload = await geminiRes.json();
    const answer = payload?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return res.status(200).json({ answer, model });
  } catch {
    return res.status(500).json({ error: 'AI tutor service temporarily unavailable.' });
  }
}
