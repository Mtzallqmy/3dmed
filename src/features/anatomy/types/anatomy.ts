export type AnatomicalOrientation = 'anterior' | 'posterior' | 'superior' | 'inferior' | 'left' | 'right';
export type IsolationMode = 'none' | 'isolate' | 'xray' | 'related';
export type QualityMode = 'auto' | 'low' | 'medium' | 'high';

export interface AnatomicalLayerConfig {
  id: string;
  order: number;
  nameEn: string;
  nameAr: string;
  available: boolean;
  visible: boolean;
  opacity: number;
}

export interface ClippingPlaneState {
  axial: { enabled: boolean; constant: number };
  coronal: { enabled: boolean; constant: number };
  sagittal: { enabled: boolean; constant: number };
}
