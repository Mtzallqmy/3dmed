import { AnatomicalAssetRecord } from '../types/medicalAssets';

export const ANATOMICAL_ASSET_REGISTRY: AnatomicalAssetRecord[] = [
  {
    assetId: 'mv3d-human-body-schematic-v2',
    assetPath: 'internal://procedural/human-body-multilayer',
    sourceName: 'MEDVERSE 3D Built-in Multi-Layer Schematic',
    sourceUrl: 'https://ta2viewer.openanatomy.org/',
    license: 'MIT (Project Internal Educational Asset)',
    attribution: 'MEDVERSE 3D Engineering Team',
    version: '2.0.0-phase02',
    anatomicalRegion: 'Full Body (Head, Thorax, Abdomen, Pelvis)',
    systemId: 'multi-system',
    structureIds: ['brain', 'spinal-cord', 'heart', 'aorta', 'right-lung', 'left-lung', 'diaphragm', 'liver', 'stomach', 'pancreas', 'spleen', 'right-kidney', 'left-kidney', 'small-intestine', 'large-intestine', 'urinary-bladder'],
    reviewStatus: 'Schematic Demonstration',
    modelFormat: 'Procedural',
    loadPriority: 'primary'
  },
  {
    assetId: 'nih3d-3DPX-002636',
    assetPath: 'public/models/3DPX-002636.glb',
    sourceName: 'NIH 3D — Normal Human Heart (Diastole)',
    sourceUrl: 'https://3d.nih.gov/entries/3DPX-002636',
    license: 'Verify NIH 3D entry license prior to redistribution',
    attribution: 'NIH 3D Heart Library / Jump Simulation',
    version: 'external-target',
    anatomicalRegion: 'Thorax / Heart',
    systemId: 'cardiovascular',
    structureIds: ['heart'],
    reviewStatus: 'Pending Local GLB Asset',
    modelFormat: 'GLB',
    loadPriority: 'lazy'
  }
];
