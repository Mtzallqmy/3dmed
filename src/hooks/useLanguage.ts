import { useEffect, useState } from 'react';
import { Language } from '../types/medical';

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('medverse_lang');
      return saved === 'ar' ? 'ar' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('medverse_lang', lang); } catch {}
  }, [lang]);

  const toggleLanguage = () => setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  return { lang, setLang, toggleLanguage };
}
