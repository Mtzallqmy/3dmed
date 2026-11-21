import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types/medical';
import { TRANSLATIONS } from '../i18n/translations';

export const HomePage: React.FC<{ lang: Language }> = ({ lang }) => (
  <section className="max-w-6xl mx-auto px-4 py-14 space-y-5">
    <h1 className="text-4xl font-extrabold text-white">{TRANSLATIONS[lang].heroTitle}</h1>
    <p className="text-slate-300 max-w-2xl">{TRANSLATIONS[lang].heroDesc}</p>
    <Link to="/anatomy" className="inline-block px-5 py-2.5 rounded-xl bg-cyan-500 text-navy-950 font-bold text-sm">
      {lang === 'ar' ? 'ابدأ استكشاف التشريح 3D' : 'Launch 3D Anatomy Explorer'}
    </Link>
  </section>
);
