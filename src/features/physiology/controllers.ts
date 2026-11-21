export interface HeartMotionController {
  bpm: number;
  mode: 'illustrative' | 'validated-model';
  play(): void;
  pause(): void;
  reset(): void;
}
export interface BreathingAnimationController { respiratoryRate: number; diaphragmExcursionMm: number; }
export interface BloodFlowVisualizationController { pathwayId: 'pulmonary' | 'systemic'; velocityScale: number; }
export interface NeuralSignalVisualizationController { tractId: string; propagationSpeed: number; }
export interface DigestiveMotionController { peristalsisEnabled: boolean; }
export interface KidneyFunctionVisualizationController { nephronStage: 'filtration' | 'reabsorption' | 'secretion'; }
export interface PhysiologyTimelineController { durationSec: number; currentTime: number; seek(t: number): void; }
