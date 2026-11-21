import { BODY_SYSTEMS } from '../data/bodySystems';
import { CARDIOVASCULAR_STRUCTURES } from '../data/cardiovascular';
import { AnatomicalStructure, BodySystem } from '../types/medical';

export interface AnatomyRepository {
  getSystems(): BodySystem[];
  getStructuresBySystem(systemId: string): AnatomicalStructure[];
  getStructureById(id: string): AnatomicalStructure | undefined;
}

export const localAnatomyRepository: AnatomyRepository = {
  getSystems: () => BODY_SYSTEMS,
  getStructuresBySystem: (systemId) => CARDIOVASCULAR_STRUCTURES.filter(s => s.systemId === systemId),
  getStructureById: (id) => CARDIOVASCULAR_STRUCTURES.find(s => s.id === id)
};
