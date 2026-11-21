import * as THREE from 'three';

export interface ModelValidationReport {
  valid: boolean;
  meshCount: number;
  vertexCount: number;
  boundingSize: [number, number, number];
  warnings: string[];
}

export function validateSceneGraph(root: THREE.Object3D): ModelValidationReport {
  let meshCount = 0;
  let vertexCount = 0;
  const warnings: string[] = [];
  root.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      meshCount++;
      const pos = (obj as THREE.Mesh).geometry?.attributes?.position;
      if (pos) vertexCount += pos.count;
    }
  });
  const box = new THREE.Box3().setFromObject(root);
  const size = new THREE.Vector3();
  box.getSize(size);
  if (meshCount === 0) warnings.push('Model contains zero renderable meshes.');
  if (vertexCount > 500000) warnings.push('High vertex count detected; consider LOD optimization for mobile WebGL.');
  return { valid: meshCount > 0, meshCount, vertexCount, boundingSize: [size.x, size.y, size.z], warnings };
}
