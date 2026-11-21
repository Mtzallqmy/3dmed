import { AnatomicalLayerConfig } from '../types/anatomy';

export function toggleLayer(layers: AnatomicalLayerConfig[], layerId: string, visible: boolean): AnatomicalLayerConfig[] {
  return layers.map(l => (l.id === layerId && l.available ? { ...l, visible } : l));
}

export function setLayerOpacity(layers: AnatomicalLayerConfig[], layerId: string, opacity: number): AnatomicalLayerConfig[] {
  const clamped = Math.max(0.05, Math.min(1, opacity));
  return layers.map(l => (l.id === layerId && l.available ? { ...l, opacity: clamped } : l));
}

export function isolateLayer(layers: AnatomicalLayerConfig[], layerId: string): AnatomicalLayerConfig[] {
  return layers.map(l => (l.available ? { ...l, visible: l.id === layerId } : l));
}
