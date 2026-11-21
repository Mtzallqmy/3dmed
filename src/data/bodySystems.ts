import { BodySystem } from '../types/medical';

export const BODY_SYSTEMS: BodySystem[] = [
  { id: 'cardiovascular', nameEn: 'Cardiovascular System', nameAr: 'الجهاز القلبي الوعائي', status: 'active', phase: 'Phase 01', descriptionEn: 'Heart, chambers, great vessels, and circulation pathways.', descriptionAr: 'القلب وحجراته الأربع والأوعية الدموية الكبرى.' },
  { id: 'skeletal', nameEn: 'Skeletal System', nameAr: 'الجهاز الهيكلي', status: 'planned', phase: 'Phase 02', descriptionEn: 'Bones, joints, and structural framework.', descriptionAr: 'العظام والمفاصل والهيكل الداعم.' },
  { id: 'muscular', nameEn: 'Muscular System', nameAr: 'الجهاز العضلي', status: 'planned', phase: 'Phase 02', descriptionEn: 'Skeletal, smooth, and cardiac muscles.', descriptionAr: 'العضلات الهيكلية والملساء والقلبية.' },
  { id: 'nervous', nameEn: 'Nervous System', nameAr: 'الجهاز العصبي', status: 'planned', phase: 'Phase 02', descriptionEn: 'Brain, spinal cord, and neural pathways.', descriptionAr: 'الدماغ والحبل الشوكي والمسارات العصبية.' },
  { id: 'respiratory', nameEn: 'Respiratory System', nameAr: 'الجهاز التنفسي', status: 'planned', phase: 'Phase 02', descriptionEn: 'Airways, lungs, and gas exchange.', descriptionAr: 'الممرات الهوائية والرئتان وتبادل الغازات.' },
  { id: 'digestive', nameEn: 'Digestive System', nameAr: 'الجهاز الهضمي', status: 'planned', phase: 'Phase 03', descriptionEn: 'GI tract, liver, and pancreas.', descriptionAr: 'القناة الهضمية والكبد والبنكرياس.' },
  { id: 'urinary', nameEn: 'Urinary System', nameAr: 'الجهاز البولي', status: 'planned', phase: 'Phase 03', descriptionEn: 'Kidneys, ureters, and bladder.', descriptionAr: 'الكليتان والحالبان والمثانة.' },
  { id: 'endocrine', nameEn: 'Endocrine System', nameAr: 'جهاز الغدد الصماء', status: 'planned', phase: 'Phase 03', descriptionEn: 'Hormone-secreting regulatory glands.', descriptionAr: 'الغدد الصماء المنظمة للاستتباب.' },
  { id: 'reproductive', nameEn: 'Reproductive System', nameAr: 'الجهاز التناسلي', status: 'planned', phase: 'Phase 03', descriptionEn: 'Human reproductive anatomy.', descriptionAr: 'البنى التشريحية للتكاثر البشري.' },
  { id: 'integumentary', nameEn: 'Integumentary System', nameAr: 'الجهاز الغطائي (الجلدي)', status: 'planned', phase: 'Phase 03', descriptionEn: 'Skin layers and barrier defense.', descriptionAr: 'طبقات الجلد والحماية الحسية.' }
];
