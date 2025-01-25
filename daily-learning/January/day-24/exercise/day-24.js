const sicknessAndRemedies = {
    cancer: {
        symptoms: "Unexplained weight loss, fatigue, lumps, changes in skin, persistent cough, or unusual bleeding.",
        remedies: "Surgery, chemotherapy, radiation therapy, immunotherapy, or targeted therapy."
    },
    malaria: {
        symptoms: "Fever, chills, headache, nausea, vomiting, muscle pain, and fatigue.",
        remedies: "Antimalarial medications like chloroquine, artemisinin-based therapies, or quinine."
    },
    diabetes: {
        symptoms: "Frequent urination, excessive thirst, extreme hunger, unexplained weight loss, fatigue, and blurred vision.",
        remedies: "Insulin therapy, oral medications, balanced diet, regular exercise, and blood sugar monitoring."
    },
    hypertension: {
        symptoms: "Headaches, dizziness, blurred vision, shortness of breath, and chest pain in severe cases.",
        remedies: "Low-salt diet, regular exercise, weight management, and medications like ACE inhibitors."
    },
    asthma: {
        symptoms: "Wheezing, shortness of breath, chest tightness, and coughing, especially at night or early morning.",
        remedies: "Inhalers (bronchodilators and corticosteroids), avoiding triggers, and oral medications."
    },
    tuberculosis: {
        symptoms: "Persistent cough lasting more than three weeks, coughing up blood, chest pain, fatigue, fever, night sweats, and weight loss.",
        remedies: "Antibiotics like isoniazid, rifampin, ethambutol, and pyrazinamide for several months."
    },
    arthritis: {
        symptoms: "Joint pain, stiffness, swelling, redness, and decreased range of motion.",
        remedies: "Pain relievers, anti-inflammatory drugs, physical therapy, lifestyle changes, and surgery."
    },
    eczema: {
        symptoms: "Itchy, red, dry, and inflamed skin, often with rashes or blisters.",
        remedies: "Moisturizers, topical corticosteroids, antihistamines, and avoiding triggers."
    },
    pneumonia: {
        symptoms: "Cough with phlegm, fever, chills, difficulty breathing, and chest pain.",
        remedies: "Antibiotics, rest, hydration, and in severe cases, hospitalization."
    },
    hepatitis: {
        symptoms: "Fatigue, jaundice, abdominal pain, nausea, vomiting, and dark urine.",
        remedies: "Antiviral medications, rest, hydration, and avoiding alcohol."
    },
    migraine: {
        symptoms: "Severe headache, nausea, sensitivity to light, and visual disturbances.",
        remedies: "Pain relievers, rest in a dark room, hydration, and avoiding triggers."
    },
    cholera: {
        symptoms: "Severe diarrhea, vomiting, dehydration, and muscle cramps.",
        remedies: "Oral rehydration solutions, antibiotics, and intravenous fluids."
    },
    dengue: {
        symptoms: "High fever, severe headache, pain behind the eyes, joint and muscle pain, and rash.",
        remedies: "Hydration, pain relievers, and avoiding aspirin or NSAIDs."
    },
    typhoid: {
        symptoms: "High fever, weakness, stomach pain, headache, and loss of appetite.",
        remedies: "Antibiotics like ciprofloxacin or azithromycin, hydration, and rest."
    },
    lupus: {
        symptoms: "Fatigue, joint pain, skin rashes, fever, and sensitivity to sunlight.",
        remedies: "Anti-inflammatory drugs, corticosteroids, immunosuppressants, and lifestyle changes."
    },
    psoriasis: {
        symptoms: "Red, scaly patches on the skin, itching, and burning sensations.",
        remedies: "Topical treatments, phototherapy, and systemic medications."
    },
    anemia: {
        symptoms: "Fatigue, weakness, pale skin, shortness of breath, and dizziness.",
        remedies: "Iron supplements, vitamin B12 injections, and dietary changes."
    },
    osteoporosis: {
        symptoms: "Bone pain, fractures, loss of height, and stooped posture.",
        remedies: "Calcium and vitamin D supplements, weight-bearing exercise, and medications."
    },
    Alzheimer: {
        symptoms: "Memory loss, confusion, difficulty speaking, and behavioral changes.",
        remedies: "Medications like cholinesterase inhibitors, lifestyle changes, and cognitive therapy."
    },
    Parkinson: {
        symptoms: "Tremors, stiffness, slow movement, and balance problems.",
        remedies: "Medications like levodopa, physical therapy, and lifestyle adjustments."
    },
    stroke: {
        symptoms: "Sudden numbness, confusion, trouble speaking, vision problems, and severe headache.",
        remedies: "Emergency medical treatment, clot-busting drugs, rehabilitation, and lifestyle changes."
    },
    epilepsy: {
        symptoms: "Seizures, temporary confusion, staring spells, and loss of consciousness.",
        remedies: "Antiepileptic medications, surgery, and lifestyle modifications."
    },
    schizophrenia: {
        symptoms: "Hallucinations, delusions, disorganized thinking, and lack of motivation.",
        remedies: "Antipsychotic medications, therapy, and social support."
    },
    bipolarDisorder: {
        symptoms: "Mood swings, manic episodes, depressive episodes, and changes in energy levels.",
        remedies: "Mood stabilizers, therapy, and lifestyle management."
    },
    depression: {
        symptoms: "Persistent sadness, loss of interest, fatigue, and changes in sleep or appetite.",
        remedies: "Antidepressants, therapy, and lifestyle changes."
    },
    anxiety: {
        symptoms: "Excessive worry, restlessness, fatigue, difficulty concentrating, and irritability.",
        remedies: "Therapy, medications like SSRIs, and relaxation techniques."
    },
    ADHD: {
        symptoms: "Inattention, hyperactivity, impulsivity, and difficulty focusing.",
        remedies: "Stimulant medications, behavioral therapy, and lifestyle adjustments."
    },
    autism: {
        symptoms: "Difficulty with communication, social interactions, and repetitive behaviors.",
        remedies: "Behavioral therapy, speech therapy, and educational support."
    },
    insomnia: {
        symptoms: "Difficulty falling asleep, staying asleep, or waking up too early.",
        remedies: "Sleep hygiene, cognitive-behavioral therapy, and medications."
    },
    sleepApnea: {
        symptoms: "Loud snoring, gasping for air during sleep, daytime fatigue, and morning headaches.",
        remedies: "CPAP machines, lifestyle changes, and surgery in severe cases."
    },
    gout: {
        symptoms: "Sudden, severe joint pain, swelling, redness, and tenderness.",
        remedies: "Anti-inflammatory medications, dietary changes, and hydration."
    },
    fibromyalgia: {
        symptoms: "Widespread pain, fatigue, sleep disturbances, and cognitive difficulties.",
        remedies: "Pain relievers, antidepressants, physical therapy, and lifestyle changes."
    },
    chronicFatigueSyndrome: {
        symptoms: "Extreme fatigue, muscle pain, memory problems, and sleep disturbances.",
        remedies: "Graded exercise therapy, cognitive-behavioral therapy, and symptom management."
    },
    irritableBowelSyndrome: {
        symptoms: "Abdominal pain, bloating, diarrhea, and constipation.",
        remedies: "Dietary changes, stress management, and medications."
    },
    CrohnDisease: {
        symptoms: "Diarrhea, abdominal pain, weight loss, and fatigue.",
        remedies: "Anti-inflammatory drugs, immunosuppressants, and surgery."
    },
    ulcerativeColitis: {
        symptoms: "Diarrhea, rectal bleeding, abdominal pain, and weight loss.",
        remedies: "Anti-inflammatory drugs, immunosuppressants, and surgery."
    },
    celiacDisease: {
        symptoms: "Diarrhea, bloating, weight loss, and fatigue.",
        remedies: "Strict gluten-free diet and nutritional supplements."
    },
    lactoseIntolerance: {
        symptoms: "Bloating, diarrhea, gas, and stomach cramps after consuming dairy.",
        remedies: "Avoiding dairy products and using lactase supplements."
    },
    GERD: {
        symptoms: "Heartburn, regurgitation, chest pain, and difficulty swallowing.",
        remedies: "Antacids, lifestyle changes, and medications like proton pump inhibitors."
    },
    pepticUlcer: {
        symptoms: "Burning stomach pain, nausea, bloating, and loss of appetite.",
        remedies: "Antibiotics, acid-reducing medications, and lifestyle changes."
    },
    appendicitis: {
        symptoms: "Severe abdominal pain, nausea, vomiting, and fever.",
        remedies: "Surgical removal of the appendix and antibiotics."
    },
    gallstones: {
        symptoms: "Abdominal pain, nausea, vomiting, and jaundice.",
        remedies: "Surgery to remove the gallbladder and medications."
    },
    kidneyStones: {
        symptoms: "Severe pain in the back or side, blood in urine, and nausea.",
        remedies: "Pain relievers, hydration, and in some cases, surgery."
    },
    urinaryTractInfection: {
        symptoms: "Burning during urination, frequent urination, and cloudy urine.",
        remedies: "Antibiotics, hydration, and pain relievers."
    },
    prostatitis: {
        symptoms: "Painful urination, pelvic pain, and frequent urination.",
        remedies: "Antibiotics, pain relievers, and lifestyle changes."
    },
    endometriosis: {
        symptoms: "Pelvic pain, painful periods, and infertility.",
        remedies: "Pain relievers, hormone therapy, and surgery."
    },
    polycysticOvarySyndrome: {
        symptoms: "Irregular periods, weight gain, acne, and excessive hair growth.",
        remedies: "Lifestyle changes, hormonal birth control, and medications."
    },
    menopause: {
        symptoms: "Hot flashes, night sweats, mood swings, and vaginal dryness.",
        remedies: "Hormone replacement therapy, lifestyle changes, and symptom management."
    },
    osteoporosis: {
        symptoms: "Bone pain, fractures, loss of height, and stooped posture.",
        remedies: "Calcium and vitamin D supplements, weight-bearing exercise, and medications."
    },
    cataracts: {
        symptoms: "Cloudy vision, difficulty seeing at night, and sensitivity to light.",
        remedies: "Surgery to remove the cataract and replace the lens."
    },
    glaucoma: {
        symptoms: "Loss of peripheral vision, eye pain, and blurred vision.",
        remedies: "Eye drops, laser treatment, and surgery."
    },
    macularDegeneration: {
        symptoms: "Blurred or distorted central vision and difficulty reading.",
        remedies: "Anti-VEGF injections, laser therapy, and lifestyle changes."
    },
    conjunctivitis: {
        symptoms: "Redness, itching, discharge, and tearing of the eyes.",
        remedies: "Antibiotic or antiviral eye drops, depending on the cause."
    },
    sinusitis: {
        symptoms: "Facial pain, nasal congestion, and thick nasal discharge.",
        remedies: "Decongestants, nasal irrigation, and antibiotics if bacterial."
    },
    tonsillitis: {
        symptoms: "Sore throat, difficulty swallowing, and swollen tonsils.",
        remedies: "Antibiotics, pain relievers, and in severe cases, surgery."
    },
    laryngitis: {
        symptoms: "Hoarseness, loss of voice, and sore throat.",
        remedies: "Resting the voice, hydration, and avoiding irritants."
    },
    bronchitis: {
        symptoms: "Cough with mucus, fatigue, shortness of breath, and chest discomfort.",
        remedies: "Rest, hydration, cough suppressants, and in some cases, antibiotics."
    },
    emphysema: {
        symptoms: "Shortness of breath, chronic cough, and wheezing.",
        remedies: "Bronchodilators, oxygen therapy, and lifestyle changes."
    },
    chronicObstructivePulmonaryDisease: {
        symptoms: "Shortness of breath, wheezing, and chronic cough.",
        remedies: "Bronchodilators, steroids, and pulmonary rehabilitation."
    },
    lungCancer: {
        symptoms: "Persistent cough, coughing up blood, chest pain, and weight loss.",
        remedies: "Surgery, chemotherapy, radiation therapy, and targeted therapy."
    },
    skinCancer: {
        symptoms: "Unusual moles, sores that don't heal, and changes in skin appearance.",
        remedies: "Surgery, radiation therapy, and chemotherapy."
    },
    melanoma: {
        symptoms: "Asymmetrical moles, irregular borders, and changes in color or size.",
        remedies: "Surgical removal, immunotherapy, and targeted therapy."
    },
    acne: {
        symptoms: "Pimples, blackheads, whiteheads, and oily skin.",
        remedies: "Topical treatments, oral medications, and lifestyle changes."
    },
    rosacea: {
        symptoms: "Facial redness, visible blood vessels, and acne-like bumps.",
        remedies: "Topical treatments, oral antibiotics, and laser therapy."
    },
    vitiligo: {
        symptoms: "White patches on the skin due to loss of pigment.",
        remedies: "Topical corticosteroids, phototherapy, and cosmetic cover-ups."
    },
    hives: {
        symptoms: "Itchy, red welts on the skin that appear suddenly.",
        remedies: "Antihistamines, avoiding triggers, and corticosteroids."
    },
    shingles: {
        symptoms: "Painful rash, blisters, itching, and burning sensations.",
        remedies: "Antiviral medications, pain relievers, and topical creams."
    },
    herpes: {
        symptoms: "Painful blisters, itching, and flu-like symptoms.",
        remedies: "Antiviral medications, pain relievers, and avoiding triggers."
    },
    HIV: {
        symptoms: "Fever, fatigue, swollen lymph nodes, and weight loss.",
        remedies: "Antiretroviral therapy and lifestyle changes."
    },
    AIDS: {
        symptoms: "Severe weight loss, opportunistic infections, and chronic diarrhea.",
        remedies: "Antiretroviral therapy and treatment of opportunistic infections."
    },
    gonorrhea: {
        symptoms: "Painful urination, discharge, and pelvic pain.",
        remedies: "Antibiotics and avoiding sexual contact until cured."
    },
    syphilis: {
        symptoms: "Sores, rash, fever, and swollen lymph nodes.",
        remedies: "Antibiotics like penicillin and regular follow-ups."
    },
    chlamydia: {
        symptoms: "Painful urination, discharge, and pelvic pain.",
        remedies: "Antibiotics and avoiding sexual contact until cured."
    },
    trichomoniasis: {
        symptoms: "Itching, burning, and discharge in the genital area.",
        remedies: "Antibiotics and avoiding sexual contact until cured."
    },
    scabies: {
        symptoms: "Intense itching, rash, and visible burrows on the skin.",
        remedies: "Topical creams, oral medications, and washing bedding and clothing."
    },
    lice: {
        symptoms: "Itching, visible lice or nits on the scalp or body.",
        remedies: "Medicated shampoos, combing, and washing bedding and clothing."
    },
    ringworm: {
        symptoms: "Circular, red, itchy patches on the skin.",
        remedies: "Antifungal creams, oral medications, and keeping the area clean and dry."
    },
    athleteFoot: {
        symptoms: "Itching, burning, and cracked skin on the feet.",
        remedies: "Antifungal creams, keeping feet dry, and wearing breathable shoes."
    },
    jockItch: {
        symptoms: "Itching, redness, and rash in the groin area.",
        remedies: "Antifungal creams, keeping the area dry, and wearing loose clothing."
    },
    yeastInfection: {
        symptoms: "Itching, burning, and discharge in the vaginal area.",
        remedies: "Antifungal creams, oral medications, and maintaining hygiene."
    },
    bacterialVaginosis: {
        symptoms: "Fishy odor, discharge, and itching in the vaginal area.",
        remedies: "Antibiotics and maintaining vaginal hygiene."
    },
    urinaryIncontinence: {
        symptoms: "Leakage of urine, frequent urination, and urgency.",
        remedies: "Pelvic floor exercises, medications, and lifestyle changes."
    },
    erectileDysfunction: {
        symptoms: "Difficulty achieving or maintaining an erection.",
        remedies: "Medications like Viagra, lifestyle changes, and therapy."
    },
    infertility: {
        symptoms: "Inability to conceive after a year of trying.",
        remedies: "Fertility treatments, lifestyle changes, and assisted reproductive technologies."
    },
    miscarriage: {
        symptoms: "Vaginal bleeding, cramping, and loss of pregnancy symptoms.",
        remedies: "Medical evaluation, emotional support, and follow-up care."
    },
    premenstrualSyndrome: {
        symptoms: "Mood swings, bloating, cramps, and fatigue before menstruation.",
        remedies: "Pain relievers, hormonal birth control, and lifestyle changes."
    },
    menstrualCramps: {
        symptoms: "Pain in the lower abdomen, back pain, and nausea during menstruation.",
        remedies: "Pain relievers, heat therapy, and lifestyle changes."
    },
    osteoporosis: {
        symptoms: "Bone pain, fractures, loss of height, and stooped posture.",
        remedies: "Calcium and vitamin D supplements, weight-bearing exercise, and medications."
    },
    scoliosis: {
        symptoms: "Uneven shoulders, waist, or hips, and back pain.",
        remedies: "Bracing, physical therapy, and in severe cases, surgery."
    },
    carpalTunnelSyndrome: {
        symptoms: "Numbness, tingling, and weakness in the hand and wrist.",
        remedies: "Wrist splints, physical therapy, and in severe cases, surgery."
    },
    tendinitis: {
        symptoms: "Pain, swelling, and tenderness around a joint.",
        remedies: "Rest, ice, physical therapy, and anti-inflammatory medications."
    },
    bursitis: {
        symptoms: "Pain, swelling, and tenderness around a joint.",
        remedies: "Rest, ice, physical therapy, and anti-inflammatory medications."
    },
    osteoporosis: {
        symptoms: "Bone pain, fractures, loss of height, and stooped posture.",
        remedies: "Calcium and vitamin D supplements, weight-bearing exercise, and medications."
    },
}