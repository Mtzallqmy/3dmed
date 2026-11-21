import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../../types/medical';

interface Props { lang: Language; onToggleLang: () => void; }

export const Navbar: React.FC<Props> = ({ lang, onToggleLang }) => (
  <header className="sticky top-0 z-40 bg-navy-900/90 backdrop-blur border-b border-cyan-500/20">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
      <Link to="/" className="font-bold text-white">MEDVERSE 3D</Link>
      <nav className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
        <Link to="/">{lang === 'ar' ? 'الرئيسية' : 'Home'}</Link>
        <Link to="/anatomy">{lang === 'ar' ? 'التشريح 3D' : '3D Anatomy'}</Link>
        <Link to="/dictionary">{lang === 'ar' ? 'القاموس' : 'Dictionary'}</Link>
        <Link to="/about">{lang === 'ar' ? 'عن المنصة' : 'About'}</Link>
      </nav>
      <button onClick={onToggleLang} className="px-3 py-1 rounded-lg bg-navy-800 border border-cyan-400/30 text-xs text-cyan-200">
        {lang === 'ar' ? 'English' : 'العربية'}
      </button>
    </div>
  </header>
);
