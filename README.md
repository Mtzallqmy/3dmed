# MEDVERSE 3D — Interactive Medical Universe (Phase 01)
## عالم الطب التفاعلي ثلاثي الأبعاد

**Official Credit:** برمجة وتطوير معتز العلقمي – تعز – اليمن – 2026م

### Quick Start
```bash
npm install
npm run dev
npm run build
```

### Architecture
- `src/app/` — Root application shell & router
- `src/components/3d/` — Reusable React Three Fiber / Three.js 3D medical viewer
- `src/components/layout/`, `medical/`, `ui/` — Navigation, 5-tab medical detail panel, UI primitives
- `src/data/` — Modular bilingual educational datasets & verified references
- `src/features/` — Domain modules (`anatomy`, `terminology`, `physiology`, `pathology`, `pharmacology`)
- `src/types/` — Strict TypeScript interfaces for medical content and future simulation engines
- `public/models/` — Local GLB/GLTF asset directory & provenance registry

### Medical Disclaimer
MEDVERSE 3D is an educational platform only and is not a diagnostic medical device.
