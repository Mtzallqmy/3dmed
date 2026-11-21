import { AnatomicalStructure } from '../types/medical';

export const CARDIOVASCULAR_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'heart', meshId: 'heart', systemId: 'cardiovascular', organGroup: 'Heart / القلب', category: 'Organ',
    englishName: 'Heart', arabicName: 'القلب', scientificTerm: 'Cor (TA2: 3934)', reviewStatus: 'verified', visualType: 'schematic',
    locationEn: 'Middle mediastinum of the thoracic cavity, posterior to the sternum.', locationAr: 'المنصف الأوسط داخل التجويف الصدري خلف عظم القص.',
    descriptionEn: 'Four-chambered muscular dual pump driving pulmonary and systemic blood circulation.', descriptionAr: 'عضو عضلي ذو أربع حجرات يضخ الدم في الدورتين الصغرى والكبرى.',
    structureEn: 'Endocardium, myocardium, epicardium within pericardial sac; 4 chambers and 4 valves.', structureAr: 'الشغاف وعضلة القلب والنخاب داخل التامور مع أربع حجرات وأربعة صمامات.',
    functionEn: 'Maintains continuous tissue perfusion via rhythmic electrical-mechanical contraction.', functionAr: 'يحافظ على التروية الدموية المستمرة بانقباضات منتظمة.',
    relationshipsEn: 'Continuous with venae cavae, pulmonary vessels, and ascending aorta.', relationshipsAr: 'يتصل بالأجوفين والأوعية الرئوية والشريان الأبهر الصاعد.',
    clinicalEn: 'Coronary ischemia, valve stenosis/regurgitation, and conduction disorders impair cardiac output.', clinicalAr: 'نقص التروية التاجية وأمراض الصمامات واضطرابات التوصيل تؤثر في كفاءة الضخ.',
    relatedIds: ['right-atrium', 'left-atrium', 'right-ventricle', 'left-ventricle', 'aorta'],
    referenceIds: ['nhlbiAnatomy', 'medlineChambers', 'ta2Part4']
  },
  {
    id: 'right-atrium', meshId: 'right-atrium', systemId: 'cardiovascular', organGroup: 'Heart / القلب', category: 'Chamber',
    englishName: 'Right Atrium', arabicName: 'الأذين الأيمن', scientificTerm: 'Atrium dextrum', reviewStatus: 'verified', visualType: 'schematic',
    locationEn: 'Upper right chamber of the heart.', locationAr: 'الحجرة العلوية اليمنى للقلب.',
    descriptionEn: 'Receives deoxygenated systemic venous blood and houses the SA node.', descriptionAr: 'يستقبل الدم الوريدي قليل الأكسجين ويحتضن العقدة الجيبية الأذينية.',
    structureEn: 'Thin muscular wall with pectinate muscles and right auricle.', structureAr: 'جدار رقيق يضم العضلات المشطية والأذينة اليمنى.',
    functionEn: 'Channels venous return into the right ventricle via the tricuspid valve.', functionAr: 'يمرر العائد الوريدي إلى البطين الأيمن عبر الصمام ثلاثي الشرفات.',
    relationshipsEn: 'Receives superior/inferior vena cava and coronary sinus.', relationshipsAr: 'يتصل بالوريدين الأجوفين العلوي والسفلي والجيب التاجي.',
    clinicalEn: 'SA node dysfunction causes sick sinus syndrome.', clinicalAr: 'خلل العقدة الجيبية يسبب اضطرابات النظم.',
    relatedIds: ['vena-cava', 'right-ventricle', 'heart'],
    referenceIds: ['medlineChambers', 'nhlbiAnatomy', 'ta2']
  },
  {
    id: 'left-atrium', meshId: 'left-atrium', systemId: 'cardiovascular', organGroup: 'Heart / القلب', category: 'Chamber',
    englishName: 'Left Atrium', arabicName: 'الأذين الأيسر', scientificTerm: 'Atrium sinistrum', reviewStatus: 'verified', visualType: 'schematic',
    locationEn: 'Upper left posterior base of the heart.', locationAr: 'الحجرة العلوية اليسرى الخلفية للقلب.',
    descriptionEn: 'Receives freshly oxygenated blood from four pulmonary veins.', descriptionAr: 'يستقبل الدم المؤكسج القادم من الرئتين عبر الأوردة الرئوية الأربعة.',
    structureEn: 'Predominantly smooth posterior wall with left auricle.', structureAr: 'جدار خلفي أملس مع الأذينة اليسرى.',
    functionEn: 'Delivers oxygenated blood through the mitral valve into the left ventricle.', functionAr: 'ينقل الدم المؤكسج عبر الصمام التاجي إلى البطين الأيسر.',
    relationshipsEn: 'Connected posteriorly to pulmonary veins and inferiorly to left ventricle.', relationshipsAr: 'يتصل بالأوردة الرئوية خلفياً وبالبطين الأيسر سفلياً.',
    clinicalEn: 'Mitral regurgitation elevates left atrial pressure.', clinicalAr: 'ارتجاع الصمام التاجي يرفع ضغط الأذين الأيسر.',
    relatedIds: ['pulmonary-veins', 'left-ventricle', 'heart'],
    referenceIds: ['medlineChambers', 'nhlbiValves', 'ta2']
  },
  {
    id: 'right-ventricle', meshId: 'right-ventricle', systemId: 'cardiovascular', organGroup: 'Heart / القلب', category: 'Chamber',
    englishName: 'Right Ventricle', arabicName: 'البطين الأيمن', scientificTerm: 'Ventriculus dexter', reviewStatus: 'verified', visualType: 'schematic',
    locationEn: 'Lower right anterior surface of the heart.', locationAr: 'الحجرة السفلية اليمنى الأمامية للقلب.',
    descriptionEn: 'Propels oxygen-poor blood into the pulmonary artery toward the lungs.', descriptionAr: 'يضخ الدم قليل الأكسجين إلى الشريان الرئوي نحو الرئتين.',
    structureEn: 'Crescentic chamber with trabeculae carneae and thinner myocardium than LV.', structureAr: 'حجرة هلالية بجدار عضلي أرق من البطين الأيسر.',
    functionEn: 'Pumps venous blood across the pulmonary valve into pulmonary circulation.', functionAr: 'يدفع الدم الوريدي عبر الصمام الرئوي إلى الدورة الرئوية.',
    relationshipsEn: 'Separated from LV by interventricular septum.', relationshipsAr: 'يفصله عن البطين الأيسر الحاجز بين البطينين.',
    clinicalEn: 'Pulmonary hypertension or pulmonary stenosis increases RV workload.', clinicalAr: 'ارتفاع الضغط الرئوي يزيد العبء على البطين الأيمن.',
    relatedIds: ['right-atrium', 'pulmonary-artery', 'interventricular-septum'],
    referenceIds: ['medlineCirculation', 'nhlbiValves', 'ta2']
  },
  {
    id: 'left-ventricle', meshId: 'left-ventricle', systemId: 'cardiovascular', organGroup: 'Heart / القلب', category: 'Chamber',
    englishName: 'Left Ventricle', arabicName: 'البطين الأيسر', scientificTerm: 'Ventriculus sinister', reviewStatus: 'verified', visualType: 'schematic',
    locationEn: 'Lower left chamber forming the cardiac apex.', locationAr: 'الحجرة السفلية اليسرى التي تشكل قمة القلب.',
    descriptionEn: 'Thick-walled primary systemic pumping chamber.', descriptionAr: 'المضخة الرئيسية سميكة الجدار للدورة الدموية الكبرى.',
    structureEn: 'Thickest myocardial wall with prominent papillary muscles.', structureAr: 'أسمك طبقة عضلية قلبية مع عضلات حليمية قوية.',
    functionEn: 'Ejects oxygenated blood through the aortic valve into the aorta.', functionAr: 'يضخ الدم المؤكسج عبر الصمام الأبهري إلى الشريان الأبهر.',
    relationshipsEn: 'Receives blood via mitral valve; ejects via aortic valve.', relationshipsAr: 'يتصل بالأذين الأيسر عبر الصمام التاجي وبالأبهر عبر الصمام الأبهري.',
    clinicalEn: 'Hypertension or aortic stenosis induces LV hypertrophy.', clinicalAr: 'ارتفاع الضغط المزمن يسبب تضخم جدار البطين الأيسر.',
    relatedIds: ['left-atrium', 'aorta', 'interventricular-septum'],
    referenceIds: ['medlineChambers', 'nhlbiAnatomy', 'ta2']
  },
  {
    id: 'aorta', meshId: 'aorta', systemId: 'cardiovascular', organGroup: 'Great Vessels / الأوعية الكبرى', category: 'Great Vessel',
    englishName: 'Aorta', arabicName: 'الشريان الأبهر', scientificTerm: 'Aorta', reviewStatus: 'verified', visualType: 'schematic',
    locationEn: 'Originates from left ventricle, arches superiorly, descends through thorax and abdomen.', locationAr: 'ينشأ من البطين الأيسر ويتقوس علوياً ثم ينزل عبر الصدر والبطن.',
    descriptionEn: 'Largest elastic artery distributing oxygenated blood to systemic tissues.', descriptionAr: 'أكبر شريان مرن يوزع الدم المؤكسج إلى كافة أنحاء الجسم.',
    structureEn: 'Ascending aorta, aortic arch, and descending aorta with elastic laminae.', structureAr: 'الأبهر الصاعد وقوس الأبهر والأبهر النازل بجدار مرن.',
    functionEn: 'Conducts high-pressure arterial output and maintains diastolic flow via elastic recoil.', functionAr: 'يتحمل الضغط الانقباضي ويرتد بمرونة للحفاظ على تدفق الدم.',
    relationshipsEn: 'Separated from LV by aortic valve; gives rise to coronary arteries.', relationshipsAr: 'يفصله الصمام الأبهري عن البطين الأيسر وتتفرع منه الشرايين التاجية.',
    clinicalEn: 'Age-related stiffening elevates systolic blood pressure; wall weakness risks aneurysm.', clinicalAr: 'تيبس جداره يرفع الضغط الانقباضي وقد يحدث فيه تمدد وعائي.',
    relatedIds: ['left-ventricle', 'heart', 'pulmonary-artery'],
    referenceIds: ['nhlbiValves', 'medlineCirculation', 'ta2Part4']
  },
  {
    id: 'pulmonary-artery', meshId: 'pulmonary-artery', systemId: 'cardiovascular', organGroup: 'Great Vessels / الأوعية الكبرى', category: 'Great Vessel',
    englishName: 'Pulmonary Artery', arabicName: 'الشريان الرئوي', scientificTerm: 'Truncus pulmonalis', reviewStatus: 'verified', visualType: 'schematic',
    locationEn: 'Emerges anteriorly from right ventricle and bifurcates beneath aortic arch.', locationAr: 'يخرج من البطين الأيمن ويتفرع أسفل قوس الأبهر إلى الرئتين.',
    descriptionEn: 'Transports deoxygenated blood from the right ventricle to the lungs.', descriptionAr: 'ينقل الدم قليل الأكسجين من البطين الأيمن إلى الرئتين.',
    structureEn: 'Pulmonary trunk dividing into right and left pulmonary arteries.', structureAr: 'الجذع الرئوي المتفرع إلى شريان رئوي أيمن وأيسر.',
    functionEn: 'Delivers venous blood to pulmonary capillary beds for gas exchange.', functionAr: 'يوصل الدم الوريدي إلى الشعيرات الرئوية لتبادل الغازات.',
    relationshipsEn: 'Guarded by pulmonary valve; crosses anterior to ascending aorta.', relationshipsAr: 'يحرسه الصمام الرئوي ويمر أمام الأبهر الصاعد.',
    clinicalEn: 'Obstruction causes pulmonary embolism; congenital atresia blocks outflow.', clinicalAr: 'انسداده يسبب الانصمام الرئوي ورتق صمامه يمنع التدفق.',
    relatedIds: ['right-ventricle', 'pulmonary-veins', 'aorta'],
    referenceIds: ['medlineCirculation', 'nhlbiValves', 'ta2Part4']
  },
  {
    id: 'pulmonary-veins', meshId: 'pulmonary-veins', systemId: 'cardiovascular', organGroup: 'Great Vessels / الأوعية الكبرى', category: 'Great Vessel',
    englishName: 'Pulmonary Veins', arabicName: 'الأوردة الرئوية', scientificTerm: 'Venae pulmonales', reviewStatus: 'verified', visualType: 'schematic',
    locationEn: 'Four vessels extending from lung hila to posterior left atrium.', locationAr: 'أربعة أوعية تمتد من الرئتين إلى الجدار الخلفي للأذين الأيسر.',
    descriptionEn: 'Return freshly oxygenated blood from the lungs to the left atrium.', descriptionAr: 'تعيد الدم المؤكسج من الرئتين إلى الأذين الأيسر.',
    structureEn: 'Four thin-walled valveless veins entering posterior LA.', structureAr: 'أربعة أوردة رقيقة الجدار بلا صمامات.',
    functionEn: 'Complete the pulmonary circulation return pathway.', functionAr: 'تتمم الدورة الدموية الصغرى.',
    relationshipsEn: 'Drain both lungs directly into left atrium.', relationshipsAr: 'تصرف دم الرئتين مباشرة إلى الأذين الأيسر.',
    clinicalEn: 'Anomalous pulmonary venous return is a congenital heart defect.', clinicalAr: 'العائد الوريدي الرئوي الشاذ تشوه قلبي خلقي معروف.',
    relatedIds: ['left-atrium', 'pulmonary-artery', 'heart'],
    referenceIds: ['medlineChambers', 'nih3dLibrary', 'ta2Part4']
  },
  {
    id: 'vena-cava', meshId: 'vena-cava', systemId: 'cardiovascular', organGroup: 'Great Vessels / الأوعية الكبرى', category: 'Great Vessel',
    englishName: 'Vena Cava', arabicName: 'الوريد الأجوف', scientificTerm: 'Vena cava superior et inferior', reviewStatus: 'verified', visualType: 'schematic',
    locationEn: 'Superior and inferior great veins entering right atrium.', locationAr: 'الوريدان الكبيران العلوي والسفلي الداخلان للأذين الأيمن.',
    descriptionEn: 'Largest systemic veins returning deoxygenated blood from body tissues.', descriptionAr: 'أكبر وريدين جهازيين يعيدان الدم قليل الأكسجين للقلب.',
    structureEn: 'Wide-lumen, compliant, low-pressure venous trunks.', structureAr: 'جذعان وريديان واسعان منخفضا الضغط.',
    functionEn: 'Return upper-body (SVC) and lower-body (IVC) venous blood to right atrium.', functionAr: 'يعيدان الدم الوريدي من النصفين العلوي والسفلي إلى الأذين الأيمن.',
    relationshipsEn: 'Open directly into right atrium.', relationshipsAr: 'يصبان مباشرة في الأذين الأيمن.',
    clinicalEn: 'Key landmarks for central venous access and venous return assessment.', clinicalAr: 'معلمان رئيسيان للقسطرة الوريدية المركزية.',
    relatedIds: ['right-atrium', 'heart', 'right-ventricle'],
    referenceIds: ['medlineCirculation', 'nhlbiAnatomy', 'ta2Part4']
  },
  {
    id: 'interventricular-septum', meshId: 'interventricular-septum', systemId: 'cardiovascular', organGroup: 'Heart / القلب', category: 'Septum',
    englishName: 'Interventricular Septum', arabicName: 'الحاجز بين البطينين', scientificTerm: 'Septum interventriculare', reviewStatus: 'verified', visualType: 'schematic',
    locationEn: 'Oblique internal partition separating right and left ventricles.', locationAr: 'جدار داخلي مائل يفصل بين البطين الأيمن والبطين الأيسر.',
    descriptionEn: 'Muscular and membranous wall preventing mixing of venous and arterial blood.', descriptionAr: 'حاجز عضلي وغشائي يمنع اختلاط الدم المؤكسج بغير المؤكسج.',
    structureEn: 'Superior thin membranous part and thick inferior muscular part carrying bundle branches.', structureAr: 'جزء غشائي علوي رقيق وجزء عضلي سفلي سميك يحمل فرعي حزمة التوصيل.',
    functionEn: 'Separates ventricular pressures and conducts electrical impulses toward the apex.', functionAr: 'يفصل ضغطي البطينين وينقل الإشارات الكهربائية نحو القمة.',
    relationshipsEn: 'Lies between right and left ventricles.', relationshipsAr: 'يقع بين البطين الأيمن والبطين الأيسر.',
    clinicalEn: 'Congenital openings cause VSD; ischemia can cause bundle branch block.', clinicalAr: 'الفتحة الخلقية تسبب عيب الحاجز البطيني (VSD).',
    relatedIds: ['left-ventricle', 'right-ventricle', 'heart'],
    referenceIds: ['nih3dLibrary', 'ta2']
  }
];
