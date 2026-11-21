export type Language = 'en' | 'ar';
export type ReviewStatus = 'verified' | 'pending-review';
export type ContentVisualType = 'schematic' | 'clinical-mesh' | 'scientific-simulation';

export interface MedicalReference {
  id: string;
  titleEn: string;
  titleAr: string;
  organization: string;
  url: string;
}

export interface BodySystem {
  id: string;
  nameEn: string;
  nameAr: string;
  status: 'active' | 'planned';
  phase: 'Phase 01' | 'Phase 02' | 'Phase 03';
  descriptionEn: string;
  descriptionAr: string;
}

export interface AnatomicalStructure {
  id: string;
  meshId: string;
  systemId: string;
  organGroup: string;
  category: string;
  englishName: string;
  arabicName: string;
  scientificTerm: string;
  reviewStatus: ReviewStatus;
  visualType: ContentVisualType;
  locationEn: string;
  locationAr: string;
  descriptionEn: string;
  descriptionAr: string;
  structureEn: string;
  structureAr: string;
  functionEn: string;
  functionAr: string;
  relationshipsEn: string;
  relationshipsAr: string;
  clinicalEn: string;
  clinicalAr: string;
  relatedIds: string[];
  referenceIds: string[];
}

export interface MedicalDictionaryTerm {
  id: string;
  englishName: string;
  arabicName: string;
  scientificTerm: string;
  pronunciationEn: string;
  pronunciationAr: string;
  synonyms: string[];
  category: string;
  definitionEnglish: string;
  definitionArabic: string;
  relatedAnatomyIds: string[];
  sources: string[];
  reviewStatus: ReviewStatus;
}

export interface AssetProvenanceMetadata {
  assetId: string;
  title: string;
  sourceUrl: string;
  license: string;
  classification: 'schematic-demo' | 'nih-3d-mri' | 'user-imported-glb';
  attribution: string;
  verifiedAt?: string;
}
