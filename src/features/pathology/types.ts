export interface DiseaseRecord {
  diseaseId: string;
  englishName: string;
  arabicName: string;
  medicalCategory: string;
  affectedStructureIds: string[];
  relatedDrugClassIds: string[];
  relatedPhysiologyModule: string;
  reviewStatus: 'Verified Educational Content' | 'Pending Review';
  visualizationValidityLevel: 'LEVEL_B' | 'LEVEL_C';
  references: string[];
}
