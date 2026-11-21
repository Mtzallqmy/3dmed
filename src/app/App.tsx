import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Navbar } from '../components/layout/Navbar';
import { HomePage } from '../pages/HomePage';
import { AnatomyExplorerPage } from '../pages/AnatomyExplorerPage';
import { TRANSLATIONS } from '../i18n/translations';

export default function App() {
  const { lang, toggleLanguage } = useLanguage();
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100">
        <Navbar lang={lang} onToggleLang={toggleLanguage} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/anatomy" element={<AnatomyExplorerPage lang={lang} />} />
            <Route path="*" element={<HomePage lang={lang} />} />
          </Routes>
        </main>
        <footer className="border-t border-cyan-500/15 py-5 text-center text-xs text-cyan-200" dir="rtl">
          {TRANSLATIONS[lang].credit}
        </footer>
      </div>
    </BrowserRouter>
  );
}
