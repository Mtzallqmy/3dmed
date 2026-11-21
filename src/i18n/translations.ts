import { Language } from '../types/medical';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    brand: 'MEDVERSE 3D — Interactive Medical Universe',
    heroTitle: 'Explore the Human Body in 3D',
    heroDesc: 'Discover anatomy, physiology, pathology, and pharmacology through immersive interactive medical education.',
    credit: 'برمجة وتطوير معتز العلقمي – تعز – اليمن – 2026م'
  },
  ar: {
    brand: 'عالم الطب التفاعلي ثلاثي الأبعاد',
    heroTitle: 'استكشف جسم الإنسان بتقنية ثلاثية الأبعاد',
    heroDesc: 'اكتشف علم التشريح ووظائف الأعضاء وعلم الأمراض وعلم الأدوية عبر تجربة تعليم طبي تفاعلي متقدمة.',
    credit: 'برمجة وتطوير معتز العلقمي – تعز – اليمن – 2026م'
  }
};
