import { MedicalReference } from '../types/medical';

export const VERIFIED_REFERENCES: Record<string, MedicalReference> = {
  ta2: {
    id: 'ta2',
    titleEn: 'IFAA / FIPAT — Terminologia Anatomica (2nd Ed., TA2 Viewer)',
    titleAr: 'الاتحاد الدولي لجمعيات التشريح (IFAA / FIPAT) — المصطلحات التشريحية TA2',
    organization: 'IFAA / FIPAT',
    url: 'https://ta2viewer.openanatomy.org/'
  },
  ta2Part4: {
    id: 'ta2Part4',
    titleEn: 'FIPAT TA2 Part 4 — Chapter 12: Cardiovascular System',
    titleAr: 'FIPAT TA2 الجزء الرابع — الفصل 12: الجهاز القلبي الوعائي',
    organization: 'FIPAT',
    url: 'https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-4.pdf'
  },
  nhlbiAnatomy: {
    id: 'nhlbiAnatomy',
    titleEn: 'NIH NHLBI — How the Heart Works: What the Heart Looks Like',
    titleAr: 'NIH NHLBI — تشريح القلب',
    organization: 'NIH / NHLBI',
    url: 'https://www.nhlbi.nih.gov/health/heart/anatomy'
  },
  nhlbiValves: {
    id: 'nhlbiValves',
    titleEn: 'NIH NHLBI — Heart Valve Diseases: Types & Valve Anatomy',
    titleAr: 'NIH NHLBI — صمامات القلب وأمراضها',
    organization: 'NIH / NHLBI',
    url: 'https://www.nhlbi.nih.gov/health/heart-valve-diseases/types'
  },
  medlineChambers: {
    id: 'medlineChambers',
    titleEn: 'MedlinePlus (NIH NLM) — Heart Chambers Overview',
    titleAr: 'MedlinePlus — حجرات القلب الأربع',
    organization: 'NIH / NLM',
    url: 'https://medlineplus.gov/ency/imagepages/19612.htm'
  },
  medlineCirculation: {
    id: 'medlineCirculation',
    titleEn: 'MedlinePlus (NIH NLM) — Circulation of Blood Through the Heart',
    titleAr: 'MedlinePlus — دوران الدم عبر القلب',
    organization: 'NIH / NLM',
    url: 'https://medlineplus.gov/ency/imagepages/19387.htm'
  },
  nih3dLibrary: {
    id: 'nih3dLibrary',
    titleEn: 'NIH 3D — 3D Heart Library (MRI-Derived Anatomic Models)',
    titleAr: 'مكتبة القلب ثلاثية الأبعاد — NIH 3D',
    organization: 'NIH 3D',
    url: 'https://3d.nih.gov/collections/heart-library'
  }
};
