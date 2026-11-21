import * as THREE from 'three';

/**
 * Enforces standard Anatomical Position coordinate convention:
 * +Y = Superior, -Y = Inferior
 * +Z = Anterior, -Z = Posterior
 * -X = Patient Right, +X = Patient Left (never mirrored)
 */
export const ANATOMICAL_AXES = {
  SUPERIOR: new THREE.Vector3(0, 1, 0),
  INFERIOR: new THREE.Vector3(0, -1, 0),
  ANTERIOR: new THREE.Vector3(0, 0, 1),
  POSTERIOR: new THREE.Vector3(0, 0, -1),
  PATIENT_RIGHT: new THREE.Vector3(-1, 0, 0),
  PATIENT_LEFT: new THREE.Vector3(1, 0, 0)
};
