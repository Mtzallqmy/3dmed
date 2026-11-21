import React, { useState } from 'react';
import { Language } from '../types/medical';
import { localAnatomyRepository } from '../services/anatomyRepository';
import { MedicalViewer3D } from '../components/3d/MedicalViewer3D';
import { StructureDetailPanel } from '../components/medical/StructureDetailPanel';

export const AnatomyExplorerPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const structures = localAnatomyRepository.getStructuresBySystem('cardiovascular');
  const [selectedId, setSelectedId] = useState(structures[0].id);
  const selected = structures.find(s => s.id === selectedId) || structures[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-8">
        <MedicalViewer3D selectedId={selectedId} onSelect={setSelectedId} lang={lang} showLabels={true} />
      </div>
      <div className="lg:col-span-4">
        <StructureDetailPanel structure={selected} lang={lang} />
      </div>
    </div>
  );
};
