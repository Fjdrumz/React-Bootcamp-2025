// const sickness = {
//     "1. Headache": "Drink plenty of water to stay hydrated. Apply a cold or warm compress to your forehead. Consider taking over-the-counter pain relievers like ibuprofen or acetaminophen. Rest in a dark, quiet room to reduce sensory stimulation.",
//     "2. Fever": "Stay hydrated by drinking water, herbal teas, or clear broths. Take over-the-counter fever reducers like acetaminophen or ibuprofen. Use a damp cloth to sponge your body with lukewarm water. Rest and avoid heavy physical activity.",
//     "3. Cough": "Drink warm liquids like honey-lemon tea or broth to soothe your throat. Use a humidifier to keep the air moist. Consider over-the-counter cough suppressants or expectorants. Avoid irritants like smoke or strong perfumes.",
//     "4. Sore Throat": "Gargle with warm salt water several times a day. Drink warm teas with honey and lemon. Use throat lozenges or sprays to numb the pain. Stay hydrated and avoid acidic or spicy foods.",
//     "5. Nausea": "Eat small, bland meals like crackers or toast. Sip on ginger tea or chew ginger candies. Avoid strong smells and fatty or spicy foods. Rest in a propped-up position to reduce stomach pressure.",
//     "6. Stomach Ache": "Drink peppermint or chamomile tea to soothe the stomach. Apply a warm heating pad to your abdomen. Avoid heavy, greasy, or spicy foods. Consider over-the-counter antacids if indigestion is the cause.",
//     "7. Diarrhea": "Stay hydrated with water, oral rehydration solutions, or clear broths. Eat bland foods like bananas, rice, applesauce, and toast (BRAT diet). Avoid dairy, caffeine, and fatty foods. Rest and monitor for signs of dehydration.",
//     "8. Constipation": "Increase your fiber intake with fruits, vegetables, and whole grains. Drink plenty of water throughout the day. Exercise regularly to stimulate bowel movements. Consider over-the-counter laxatives if needed.",
//     "9. Muscle Pain": "Apply a warm compress or heating pad to the affected area. Gently stretch and massage the muscles. Take over-the-counter pain relievers like ibuprofen. Rest and avoid strenuous activities.",
//     "10. Joint Pain": "Apply ice packs to reduce inflammation and swelling. Take over-the-counter anti-inflammatory medications like ibuprofen. Perform gentle stretches or low-impact exercises like swimming. Rest the affected joint and avoid overuse.",
//     "11. Fatigue": "Ensure you’re getting 7-9 hours of sleep per night. Eat a balanced diet rich in fruits, vegetables, and whole grains. Stay hydrated and limit caffeine intake. Incorporate light exercise like walking to boost energy levels.",
//     "12. Insomnia": "Establish a regular sleep schedule and stick to it. Avoid screens and bright lights at least an hour before bed. Create a calming bedtime routine, such as reading or taking a warm bath. Consider herbal teas like chamomile or valerian root.",
//     "13. Sinus Congestion": "Use a saline nasal spray or neti pot to clear your sinuses. Apply a warm compress to your face to relieve pressure. Drink plenty of fluids to thin mucus. Consider over-the-counter decongestants or antihistamines.",
//     "14. Runny Nose": "Blow your nose gently to avoid irritation. Use a saline nasal spray to keep nasal passages moist. Drink warm fluids like tea or soup to thin mucus. Avoid allergens or irritants that may worsen symptoms.",
//     "15. Earache": "Apply a warm compress to the affected ear. Use over-the-counter pain relievers like ibuprofen or acetaminophen. Avoid inserting anything into the ear. If symptoms persist, consult a doctor for possible ear infection.",
//     "16. Dizziness": "Sit or lie down immediately to prevent falls. Stay hydrated and avoid sudden movements. Eat small, frequent meals to maintain blood sugar levels. If dizziness persists, consult a healthcare professional.",
//     "17. Heartburn": "Avoid spicy, fatty, or acidic foods. Eat smaller meals and avoid lying down immediately after eating. Use over-the-counter antacids to neutralize stomach acid. Elevate your head while sleeping to prevent reflux.",
//     "18. Bloating": "Avoid gas-producing foods like beans, carbonated drinks, and broccoli. Eat slowly and chew food thoroughly. Drink peppermint or ginger tea to soothe digestion. Consider over-the-counter gas relief medications.",
//     "19. Acid Reflux": "Avoid trigger foods like caffeine, chocolate, and citrus. Eat smaller, more frequent meals. Avoid lying down for at least 2-3 hours after eating. Use over-the-counter antacids or proton pump inhibitors.",
//     "20. Cold Sores": "Apply an over-the-counter antiviral cream to the sore. Keep the area clean and dry to prevent infection. Avoid touching or picking at the sore. Use a lip balm with SPF to protect from sun exposure.",
//     "21. Sunburn": "Apply aloe vera or a cooling moisturizer to the affected area. Take over-the-counter pain relievers like ibuprofen. Stay hydrated and avoid further sun exposure. Use cool compresses to soothe the skin.",
//     "22. Poison Ivy Rash": "Wash the affected area with soap and water immediately. Apply calamine lotion or hydrocortisone cream to reduce itching. Take antihistamines to relieve itching. Avoid scratching to prevent infection.",
//     "23. Insect Bites": "Clean the bite area with soap and water. Apply an anti-itch cream or calamine lotion. Use a cold compress to reduce swelling. Take antihistamines if itching is severe.",
//     "24. Allergies": "Avoid allergens like pollen, dust, or pet dander. Use over-the-counter antihistamines or nasal sprays. Keep windows closed during high pollen seasons. Consider using an air purifier indoors.",
//     "25. Asthma": "Use your prescribed inhaler as directed. Avoid triggers like smoke, dust, or strong odors. Practice deep breathing exercises to improve lung function. Seek medical attention if symptoms worsen.",
//     "26. Back Pain": "Apply a heating pad or ice pack to the affected area. Perform gentle stretches to relieve tension. Take over-the-counter pain relievers like ibuprofen. Avoid heavy lifting and maintain good posture.",
//     "27. Neck Pain": "Apply a warm compress to the affected area. Perform gentle neck stretches and exercises. Take over-the-counter pain relievers like ibuprofen. Avoid prolonged use of phones or computers.",
//     "28. Toothache": "Rinse your mouth with warm salt water. Apply a cold compress to the outside of your cheek. Take over-the-counter pain relievers like ibuprofen. Avoid chewing on the affected side and see a dentist promptly.",
//     "29. Gum Pain": "Rinse your mouth with warm salt water. Use a soft-bristled toothbrush to avoid irritation. Apply a numbing gel to the affected area. Avoid sugary or acidic foods that can worsen pain.",
//     "30. Dry Skin": "Apply a thick moisturizer immediately after bathing. Use a humidifier to add moisture to the air. Avoid hot showers and harsh soaps. Drink plenty of water to stay hydrated.",
//     "31. Eczema": "Apply a fragrance-free moisturizer regularly. Use over-the-counter hydrocortisone cream for flare-ups. Avoid triggers like stress, sweat, or allergens. Take short, lukewarm showers to prevent dryness.",
//     "32. Acne": "Wash your face twice daily with a gentle cleanser. Use over-the-counter acne treatments containing benzoyl peroxide or salicylic acid. Avoid picking or squeezing pimples. Keep your hair and hands away from your face.",
//     "33. Hives": "Apply a cold compress to reduce itching. Take antihistamines to relieve symptoms. Avoid scratching to prevent worsening. Identify and avoid triggers like certain foods or stress.",
//     "34. Chapped Lips": "Apply a lip balm with SPF regularly. Avoid licking your lips, as saliva can dry them out. Drink plenty of water to stay hydrated. Use a humidifier to add moisture to the air.",
//     "35. Pink Eye": "Apply a warm compress to the affected eye. Avoid touching or rubbing your eyes. Use over-the-counter eye drops to relieve irritation. Wash your hands frequently to prevent spreading.",
//     "36. Dry Eyes": "Use artificial tears or lubricating eye drops. Avoid prolonged screen time and take regular breaks. Wear sunglasses to protect your eyes from wind and sun. Use a humidifier to add moisture to the air.",
//     "37. Motion Sickness": "Sit in the front seat of a car or near the wings of a plane. Focus on the horizon or a fixed point. Take over-the-counter motion sickness medication. Avoid heavy meals before traveling.",
//     "38. Hangover": "Drink plenty of water to rehydrate. Eat a light meal with carbohydrates and protein. Take over-the-counter pain relievers for headaches. Rest and avoid alcohol until fully recovered.",
//     "39. Dehydration": "Drink water or oral rehydration solutions. Eat water-rich foods like fruits and vegetables. Avoid caffeine and alcohol, which can worsen dehydration. Rest in a cool, shaded area.",
//     "40. Heat Exhaustion": "Move to a cool, shaded area and rest. Drink plenty of water or sports drinks. Apply cool, wet cloths to your skin. Seek medical attention if symptoms worsen.",
//     "41. Heat Stroke": "Seek emergency medical help immediately. Move to a cool place and remove excess clothing. Apply ice packs or cool cloths to the body. Fan the person to lower their body temperature.",
//     "42. Frostbite": "Gradually warm the affected area using warm (not hot) water. Avoid rubbing or massaging the frostbitten area. Wrap the area in sterile bandages. Seek medical attention for severe cases.",
//     "43. Hypothermia": "Move to a warm place and remove wet clothing. Wrap the person in blankets or warm clothing. Offer warm, non-alcoholic beverages. Seek emergency medical help if symptoms are severe.",
//     "44. Anxiety": "Practice deep breathing or meditation exercises. Engage in physical activity like walking or yoga. Avoid caffeine and alcohol, which can worsen anxiety. Consider speaking with a therapist or counselor.",
//     "45. Depression": "Engage in regular physical activity to boost mood. Maintain a healthy diet and sleep schedule. Talk to a trusted friend or family member. Seek professional help if symptoms persist.",
//     "46. Stress": "Practice relaxation techniques like deep breathing or meditation. Prioritize tasks and break them into manageable steps. Exercise regularly to reduce stress hormones. Take breaks and engage in hobbies you enjoy.",
//     "47. Migraine": "Rest in a dark, quiet room to reduce sensory stimulation. Apply a cold compress to your forehead or neck. Take prescribed migraine medication if available. Avoid triggers like bright lights, loud noises, or certain foods.",
//     "48. Seasonal Affective Disorder (SAD)": "Spend time outdoors during daylight hours. Use a light therapy box to simulate natural light. Exercise regularly to boost mood. Consider speaking with a mental health professional.",
//     "49. Bad Breath": "Brush your teeth and tongue twice daily. Floss regularly to remove food particles. Stay hydrated to prevent dry mouth. Avoid foods like garlic and onions that can cause bad breath.",
//     "50. Body Odor": "Shower daily with antibacterial soap. Use an antiperspirant or deodorant. Wear breathable fabrics like cotton. Avoid foods that can worsen body odor, such as spicy foods.",
//     "51. Athlete’s Foot": "Keep your feet clean and dry. Use antifungal creams or powders. Wear breathable shoes and change socks regularly. Avoid walking barefoot in public areas.",
//     "52. Ringworm": "Apply antifungal creams to the affected area. Keep the area clean and dry. Wash clothing, towels, and bedding regularly. Avoid sharing personal items to prevent spreading.",
//     "53. Jock Itch": "Keep the groin area clean and dry. Apply antifungal creams or powders. Wear loose-fitting, breathable clothing. Avoid sharing towels or clothing with others.",
//     "54. Yeast Infection": "Use over-the-counter antifungal creams or suppositories. Wear cotton underwear and avoid tight clothing. Avoid douching or using scented feminine products. Consult a doctor if symptoms persist.",
//     "55. Urinary Tract Infection (UTI)": "Drink plenty of water to flush out bacteria. Avoid caffeine and alcohol, which can irritate the bladder. Take over-the-counter pain relievers for discomfort. Consult a doctor for antibiotics if needed.",
//     "56. Hemorrhoids": "Soak in a warm sitz bath to relieve discomfort. Apply over-the-counter hemorrhoid creams. Avoid straining during bowel movements. Eat a high-fiber diet to prevent constipation.",
//     "57. Indigestion": "Eat smaller, more frequent meals. Avoid spicy, fatty, or acidic foods. Take over-the-counter antacids to neutralize stomach acid. Avoid lying down immediately after eating.",
//     "58. Food Poisoning": "Stay hydrated with water or oral rehydration solutions. Eat bland foods like crackers or toast. Avoid dairy, caffeine, and fatty foods. Rest and seek medical attention if symptoms worsen.",
//     "59. Chickenpox": "Apply calamine lotion to reduce itching. Take antihistamines to relieve itching. Keep nails short to prevent scratching. Stay hydrated and rest until symptoms subside.",
//     "60. Shingles": "Apply cool compresses to the affected area. Take prescribed antiviral medications. Use over-the-counter pain relievers for discomfort. Avoid scratching to prevent infection.",
//     "61. Cold": "Drink plenty of fluids like water, tea, or soup. Use a humidifier to keep the air moist. Take over-the-counter cold medications for symptom relief. Rest and avoid spreading germs to others.",
//     "62. Flu": "Stay hydrated and rest as much as possible. Take over-the-counter medications for fever and body aches. Use a humidifier to ease congestion. Seek medical attention if symptoms worsen.",
//     "63. Bronchitis": "Drink plenty of fluids to thin mucus. Use a humidifier to ease breathing. Take over-the-counter cough suppressants or expectorants. Rest and avoid smoking or irritants.",
//     "64. Pneumonia": "Get plenty of rest and stay hydrated. Take prescribed antibiotics if bacterial. Use a humidifier to ease breathing. Seek medical attention if symptoms worsen.",
//     "65. High Blood Pressure": "Reduce salt intake and eat a balanced diet. Exercise regularly to maintain a healthy weight. Avoid smoking and limit alcohol consumption. Take prescribed medications as directed.",
//     "66. High Cholesterol": "Eat a diet low in saturated fats and cholesterol. Exercise regularly to improve heart health. Avoid smoking and limit alcohol consumption. Take prescribed medications as directed.",
//     "67. Diabetes": "Monitor blood sugar levels regularly. Eat a balanced diet with controlled carbohydrate intake. Exercise regularly to maintain a healthy weight. Take prescribed medications or insulin as directed.",
//     "68. Anemia": "Eat iron-rich foods like spinach, red meat, and beans. Take iron supplements if recommended by a doctor. Include vitamin C-rich foods to enhance iron absorption. Rest and avoid overexertion.",
//     "69. Vitamin D Deficiency": "Spend time outdoors in sunlight. Eat vitamin D-rich foods like fatty fish and fortified dairy. Take vitamin D supplements if recommended by a doctor. Exercise regularly to support bone health.",
//     "70. Vitamin B12 Deficiency": "Eat B12-rich foods like meat, fish, and dairy. Take B12 supplements if recommended by a doctor. Consider B12 injections for severe deficiency. Monitor symptoms and consult a doctor.",
//     "71. Iron Deficiency": "Eat iron-rich foods like spinach, beans, and red meat. Take iron supplements if recommended by a doctor. Include vitamin C-rich foods to enhance iron absorption. Avoid caffeine with iron-rich meals.",
//     "72. Calcium Deficiency": "Eat calcium-rich foods like dairy, leafy greens, and fortified foods. Take calcium supplements if recommended by a doctor. Include vitamin D to enhance calcium absorption. Exercise to support bone health.",
//     "73. Magnesium Deficiency": "Eat magnesium-rich foods like nuts, seeds, and leafy greens. Take magnesium supplements if recommended by a doctor. Avoid excessive alcohol and caffeine. Monitor symptoms and consult a doctor.",
//     "74. Potassium Deficiency": "Eat potassium-rich foods like bananas, potatoes, and spinach. Take potassium supplements if recommended by a doctor. Avoid excessive sweating and dehydration. Monitor symptoms and consult a doctor.",
//     "75. Zinc Deficiency": "Eat zinc-rich foods like meat, shellfish, and legumes. Take zinc supplements if recommended by a doctor. Avoid excessive alcohol consumption. Monitor symptoms and consult a doctor.",
//     "76. Iodine Deficiency": "Eat iodine-rich foods like seafood and iodized salt. Take iodine supplements if recommended by a doctor. Avoid excessive consumption of goitrogenic foods like cabbage. Monitor symptoms and consult a doctor.",
//     "77. Omega-3 Deficiency": "Eat omega-3-rich foods like fatty fish, flaxseeds, and walnuts. Take omega-3 supplements if recommended by a doctor. Avoid excessive consumption of processed foods. Monitor symptoms and consult a doctor.",
//     "78. Fiber Deficiency": "Eat fiber-rich foods like fruits, vegetables, and whole grains. Drink plenty of water to aid digestion. Avoid processed and low-fiber foods. Monitor symptoms and consult a doctor.",
//     "79. Protein Deficiency": "Eat protein-rich foods like meat, fish, eggs, and legumes. Take protein supplements if recommended by a doctor. Avoid excessive consumption of low-protein foods. Monitor symptoms and consult a doctor.",
//     "80. Dehydration": "Drink plenty of water throughout the day. Eat water-rich foods like fruits and vegetables. Avoid caffeine and alcohol, which can worsen dehydration. Rest in a cool, shaded area.",
//     "81. Overhydration": "Reduce fluid intake and avoid excessive water consumption. Eat salty snacks to restore electrolyte balance. Monitor symptoms and consult a doctor. Avoid drinking large amounts of water in a short time.",
//     "82. Heat Rash": "Keep the affected area cool and dry. Wear loose-fitting, breathable clothing. Apply calamine lotion to reduce itching. Avoid excessive sweating and heat exposure.",
//     "83. Swimmer’s Ear": "Keep the ear dry and avoid swimming. Use over-the-counter ear drops to relieve pain. Apply a warm compress to the affected ear. Consult a doctor if symptoms persist.",
//     "84. Tinnitus": "Avoid exposure to loud noises. Use white noise machines to mask ringing. Reduce caffeine and alcohol consumption. Consult a doctor if symptoms worsen.",
//     "85. Vertigo": "Sit or lie down immediately to prevent falls. Avoid sudden movements. Perform vestibular exercises to improve balance. Consult a doctor if symptoms persist.",
//     "86. Gout": "Avoid purine-rich foods like red meat and seafood. Stay hydrated to flush out uric acid. Take prescribed medications to reduce inflammation. Rest and elevate the affected joint.",
//     "87. Osteoporosis": "Eat calcium and vitamin D-rich foods. Perform weight-bearing exercises to strengthen bones. Avoid smoking and limit alcohol consumption. Take prescribed medications as directed.",
//     "88. Arthritis": "Apply heat or cold packs to the affected joint. Take over-the-counter pain relievers like ibuprofen. Perform gentle exercises to maintain joint mobility. Consult a doctor for severe symptoms.",
//     "89. Tendonitis": "Rest the affected tendon and avoid overuse. Apply ice packs to reduce inflammation. Take over-the-counter pain relievers like ibuprofen. Perform gentle stretches to improve flexibility.",
//     "90. Bursitis": "Rest the affected joint and avoid repetitive motions. Apply ice packs to reduce inflammation. Take over-the-counter pain relievers like ibuprofen. Consult a doctor if symptoms persist.",
//     "91. Carpal Tunnel Syndrome": "Rest the affected hand and avoid repetitive motions. Wear a wrist splint to reduce pressure on the nerve. Take over-the-counter pain relievers like ibuprofen. Consult a doctor for severe symptoms.",
//     "92. Plantar Fasciitis": "Stretch your feet and calves regularly. Wear supportive shoes with good arch support. Apply ice packs to reduce inflammation. Take over-the-counter pain relievers like ibuprofen.",
//     "93. Sciatica": "Apply heat or ice packs to the affected area. Perform gentle stretches to relieve pressure on the sciatic nerve. Take over-the-counter pain relievers like ibuprofen. Consult a doctor for severe symptoms.",
//     "94. Herniated Disc": "Rest and avoid heavy lifting. Apply heat or ice packs to the affected area. Take over-the-counter pain relievers like ibuprofen. Consult a doctor for physical therapy or surgery options.",
//     "95. Sprains": "Rest the affected joint and avoid putting weight on it. Apply ice packs to reduce swelling. Compress the area with a bandage. Elevate the injured limb to reduce swelling.",
//     "96. Strains": "Rest the affected muscle and avoid overuse. Apply ice packs to reduce swelling. Compress the area with a bandage. Elevate the injured limb to reduce swelling.",
//     "97. Bruises": "Apply a cold compress to reduce swelling. Elevate the injured area to reduce blood flow. Avoid putting pressure on the bruise. Take over-the-counter pain relievers if needed.",
//     "98. Cuts and Scrapes": "Clean the wound with soap and water. Apply an antibiotic ointment to prevent infection. Cover the wound with a sterile bandage. Change the bandage daily and monitor for signs of infection.",
//     "99. Burns": "Run cool water over the burn for 10-15 minutes. Apply aloe vera or a burn ointment. Cover the burn with a sterile bandage. Seek medical attention for severe burns.",
//     "100. Nosebleeds": "Sit upright and lean slightly forward. Pinch the soft part of your nose for 10-15 minutes. Apply a cold compress to the bridge of your nose. Avoid blowing your nose for several hours.",
// };

