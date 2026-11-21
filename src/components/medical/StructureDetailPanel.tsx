import React from 'react';
import { AnatomicalStructure, Language } from '../../types/medical';
import { VERIFIED_REFERENCES } from '../../data/references';

export const StructureDetailPanel: React.FC<{ structure: AnatomicalStructure; lang: Language }> = ({ structure, lang }) => (
  <aside className="p-4 rounded-2xl bg-navy-900/80 border border-cyan-500/20 space-y-3">
    <h2 className="text-lg font-bold text-white">{lang === 'ar' ? structure.arabicName : structure.englishName}</h2>
    <div className="text-sm text-cyan-300">{lang === 'ar' ? structure.englishName : structure.arabicName}</div>
    <p className="text-xs text-slate-300">{lang === 'ar' ? structure.descriptionAr : structure.descriptionEn}</p>
    <div className="pt-2 border-t border-slate-800 space-y-1">
      {structure.referenceIds.map(id => {
        const ref = VERIFIED_REFERENCES[id];
        return ref ? <a key={id} href={ref.url} target="_blank" rel="noreferrer" className="block text-xs text-cyan-300 underline">{lang === 'ar' ? ref.titleAr : ref.titleEn}</a> : null;
      })}
    </div>
  </aside>
);
