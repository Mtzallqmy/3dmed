export type ScientificValidityLevel = 'LEVEL_A_VALIDATED' | 'LEVEL_B_EDUCATIONAL_MODEL' | 'LEVEL_C_ILLUSTRATIVE';

export interface SimulationModelRecord {
  id: string;
  anatomicalSystemId: string;
  titleEnglish: string;
  titleArabic: string;
  scientificValidityLevel: ScientificValidityLevel;
  permittedParameterRanges: Record<string, { min: number; max: number; unit: string }>;
  limitations: string;
  sources: string[];
  version: string;
}

export const SIMULATION_MODEL_REGISTRY: SimulationModelRecord[] = [
  {
    id: 'cardio-cycle-edu-v1',
    anatomicalSystemId: 'cardiovascular',
    titleEnglish: 'Cardiac Cycle & Conduction Educational Model',
    titleArabic: 'النموذج التعليمي للدورة القلبية والتوصيل الكهربائي',
    scientificValidityLevel: 'LEVEL_B_EDUCATIONAL_MODEL',
    permittedParameterRanges: { heartRateBpm: { min: 60, max: 100, unit: 'BPM' }, playbackSpeed: { min: 0.25, max: 2.0, unit: 'x' } },
    limitations: 'Educational timing model only; does not compute patient-specific stroke volume, blood pressure, or diagnostic ECG.',
    sources: ['https://www.ncbi.nlm.nih.gov/books/NBK459327/', 'https://www.heart.org/en/health-topics/arrhythmia/about-arrhythmia'],
    version: '3.0.0'
  },
  {
    id: 'resp-ventilation-edu-v1',
    anatomicalSystemId: 'respiratory',
    titleEnglish: 'Respiratory Mechanics & Alveolar Diffusion Model',
    titleArabic: 'ميكانيكية التنفس وتبادل الغازات الحويصلي',
    scientificValidityLevel: 'LEVEL_B_EDUCATIONAL_MODEL',
    permittedParameterRanges: { breathingRateBpm: { min: 10, max: 26, unit: 'breaths/min' }, playbackSpeed: { min: 0.25, max: 2.0, unit: 'x' } },
    limitations: 'Educational mechanics and Fick diffusion directionality; does not predict SpO2 or individual lung volumes.',
    sources: ['https://www.ncbi.nlm.nih.gov/books/NBK539907/'],
    version: '3.0.0'
  }
];
