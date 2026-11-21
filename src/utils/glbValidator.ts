export interface GlbValidationResult {
  valid: boolean;
  extension: string;
  error?: string;
}

export function validateModelFile(file: File): GlbValidationResult {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  if (!['glb', 'gltf'].includes(ext)) {
    return { valid: false, extension: ext, error: 'Unsupported format. Expected .glb or .gltf asset.' };
  }
  if (file.size === 0) {
    return { valid: false, extension: ext, error: 'Uploaded file is empty.' };
  }
  return { valid: true, extension: ext };
}
