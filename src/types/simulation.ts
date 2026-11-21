import { MedicalReference } from './medical';

export interface SimulationParameterControl {
  id: string;
  labelEn: string;
  labelAr: string;
  unit: string;
  min: number;
  max: number;
  defaultValue: number;
  step: number;
}

export interface EducationalAnimationTimeline {
  durationSeconds: number;
  fps: number;
  loop: boolean;
  markers: Array<{ timeSeconds: number; labelEn: string; labelAr: string }>;
}

export interface PhysiologySimulationEngine {
  readonly id: string;
  readonly modelClassification: 'validated-mathematical' | 'illustrative-educational';
  readonly references: MedicalReference[];
  parameters: SimulationParameterControl[];
  timeline: EducationalAnimationTimeline;
  step(deltaSeconds: number): Record<string, number>;
  validateBounds(): { valid: boolean; warnings: string[] };
}

export interface PathologyComparisonEngine {
  readonly baselineAssetId: string;
  readonly pathologyAssetId: string;
  readonly clinicalCategory: 'congenital' | 'valvular' | 'ischemic' | 'vascular';
  comparisonMode: 'split-viewport' | 'overlay-diff' | 'cross-section';
  references: MedicalReference[];
}

export interface DrugMechanismVisualizationEngine {
  readonly drugClassId: string;
  readonly targetAnatomyIds: string[];
  readonly mechanismType: 'receptor-antagonist' | 'ion-channel' | 'enzyme-inhibitor';
  readonly educationalDisclaimerRequired: true;
  references: MedicalReference[];
}
