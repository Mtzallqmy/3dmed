export interface AnatomicalAssetRecord {
  assetId: string;
  assetPath: string;
  sourceName: string;
  sourceUrl: string;
  license: string;
  attribution: string;
  version: string;
  anatomicalRegion: string;
  systemId: string;
  structureIds: string[];
  reviewStatus: 'Verified' | 'Pending Review' | 'Schematic Demonstration' | 'Pending Local GLB Asset';
  modelFormat: 'GLB' | 'GLTF' | 'Procedural';
  loadPriority: 'primary' | 'secondary' | 'lazy';
}
