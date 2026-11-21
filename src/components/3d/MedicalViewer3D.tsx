import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { CARDIOVASCULAR_STRUCTURES } from '../../data/cardiovascular';
import { Language } from '../../types/medical';

interface Props {
  selectedId: string;
  onSelect: (id: string) => void;
  lang: Language;
  showLabels: boolean;
}

function SchematicHeartMesh({ selectedId, onSelect, lang, showLabels }: Props) {
  const positions: Record<string, [number, number, number]> = {
    'right-atrium': [-0.78, 0.32, 0.1],
    'left-atrium': [0.68, 0.36, -0.28],
    'right-ventricle': [-0.46, -0.58, 0.34],
    'left-ventricle': [0.48, -0.64, -0.05],
    'interventricular-septum': [0.02, -0.62, 0.16],
    'aorta': [0.25, 1.35, -0.05],
    'pulmonary-artery': [-0.14, 0.85, 0.42],
    'pulmonary-veins': [1.2, 0.4, -0.32],
    'vena-cava': [-0.88, 1.15, -0.02],
    'heart': [0, -1.5, 0.5]
  };
  const colors: Record<string, string> = {
    'right-atrium': '#1d4ed8', 'left-atrium': '#f43f5e', 'right-ventricle': '#2563eb',
    'left-ventricle': '#e11d48', 'interventricular-septum': '#f59e0b', 'aorta': '#ef4444',
    'pulmonary-artery': '#0ea5e9', 'pulmonary-veins': '#fb7185', 'vena-cava': '#3b82f6', 'heart': '#38bdf8'
  };

  return (
    <group>
      {CARDIOVASCULAR_STRUCTURES.map(item => {
        const pos = positions[item.id] || [0, 0, 0];
        const active = item.id === selectedId;
        return (
          <mesh key={item.id} position={pos} onClick={(e) => { e.stopPropagation(); onSelect(item.id); }}>
            <sphereGeometry args={[item.id === 'heart' ? 0.25 : 0.45, 24, 24]} />
            <meshStandardMaterial color={colors[item.id]} emissive={active ? '#06b6d4' : '#000000'} emissiveIntensity={active ? 0.55 : 0} />
            {showLabels && (
              <Html distanceFactor={8}>
                <button onClick={() => onSelect(item.id)} className="px-2 py-0.5 rounded-full text-[11px] bg-navy-900/90 text-cyan-200 border border-cyan-400/40 whitespace-nowrap">
                  {lang === 'ar' ? item.arabicName : item.englishName}
                </button>
              </Html>
            )}
          </mesh>
        );
      })}
    </group>
  );
}

export const MedicalViewer3D: React.FC<Props> = (props) => (
  <div className="w-full h-[480px] rounded-2xl overflow-hidden bg-navy-950 border border-cyan-500/20">
    <Canvas camera={{ position: [0, 0.5, 5.2], fov: 42 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 7, 6]} intensity={1.25} />
      <Suspense fallback={null}>
        <SchematicHeartMesh {...props} />
      </Suspense>
      <OrbitControls enableDamping />
    </Canvas>
  </div>
);
