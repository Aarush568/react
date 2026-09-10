import {
  HeartPulse,
  Bone,
  Baby,
  Brain,
  Stethoscope,
  Scissors,
  ScanLine,
  Syringe,
  Siren,
  Users,
  Activity,
  Eye,
} from 'lucide-react';

export const departments = [
  {
    id: 'cardiology',
    icon: HeartPulse,
    name: 'Cardiology',
    summary:
      'Diagnosis and treatment of heart and circulatory conditions, from hypertension to complex arrhythmias.',
    treatments: ['Coronary artery disease', 'Heart failure', 'Arrhythmia management', 'Echocardiography'],
    chief: 'Dr. med. Markus Ehlert',
  },
  {
    id: 'general-surgery',
    icon: Scissors,
    name: 'General & Visceral Surgery',
    summary:
      'Comprehensive surgical care including minimally invasive procedures for abdominal and digestive conditions.',
    treatments: ['Laparoscopic surgery', 'Hernia repair', 'Colorectal surgery', 'Gallbladder surgery'],
    chief: 'Dr. med. Sabine Kortmann',
  },
  {
    id: 'orthopedics',
    icon: Bone,
    name: 'Orthopedics & Trauma Surgery',
    summary:
      'Treatment of bones, joints and the musculoskeletal system, including joint replacement and sports injuries.',
    treatments: ['Hip & knee replacement', 'Fracture care', 'Spine surgery', 'Sports medicine'],
    chief: 'Dr. med. Jonas Weidner',
  },
  {
    id: 'gynecology',
    icon: Baby,
    name: 'Gynecology & Obstetrics',
    summary:
      "Women's health across every life stage, from prenatal care and delivery to gynecological surgery.",
    treatments: ['Prenatal care', 'Delivery & maternity ward', 'Gynecological oncology', 'Minimally invasive surgery'],
    chief: 'Dr. med. Helena Brandt',
  },
  {
    id: 'neurology',
    icon: Brain,
    name: 'Neurology',
    summary:
      'Specialist care for disorders of the brain, spine and nervous system, including stroke treatment.',
    treatments: ['Stroke unit', 'Epilepsy care', "Parkinson's & movement disorders", 'Neurorehabilitation'],
    chief: 'Dr. med. Fabian Lorenz',
  },
  {
    id: 'internal-medicine',
    icon: Stethoscope,
    name: 'Internal Medicine',
    summary:
      'Broad diagnostic and therapeutic expertise for adult patients with acute and chronic conditions.',
    treatments: ['Gastroenterology', 'Diabetology', 'Pulmonology', 'Nephrology'],
    chief: 'Dr. med. Anette Grunwald',
  },
  {
    id: 'radiology',
    icon: ScanLine,
    name: 'Radiology & Imaging',
    summary:
      'Modern imaging diagnostics supporting every department, from X-ray and ultrasound to MRI and CT.',
    treatments: ['CT & MRI scanning', 'Digital X-ray', 'Ultrasound diagnostics', 'Interventional radiology'],
    chief: 'Dr. med. Peter Vollmer',
  },
  {
    id: 'anesthesiology',
    icon: Syringe,
    name: 'Anesthesiology & Intensive Care',
    summary:
      'Perioperative anesthesia, pain management and round-the-clock intensive care for critically ill patients.',
    treatments: ['General & regional anesthesia', 'Intensive care unit', 'Pain management', 'Perioperative monitoring'],
    chief: 'Dr. med. Corinna Albers',
  },
  {
    id: 'emergency-medicine',
    icon: Siren,
    name: 'Emergency Medicine',
    summary:
      'A 24/7 emergency department equipped to handle everything from minor injuries to life-threatening trauma.',
    treatments: ['Trauma care', 'Chest pain unit', 'Acute stroke response', 'Pediatric emergencies'],
    chief: 'Dr. med. Tobias Reinke',
  },
  {
    id: 'psychiatry',
    icon: Users,
    name: 'Psychiatry & Psychotherapy',
    summary:
      'Compassionate inpatient and outpatient mental health care in a supportive, evidence-based setting.',
    treatments: ['Mood & anxiety disorders', 'Crisis intervention', 'Group & individual therapy', 'Day clinic'],
    chief: 'Dr. med. Lena Osterberg',
  },
  {
    id: 'urology',
    icon: Activity,
    name: 'Urology',
    summary:
      'Diagnosis and treatment of the urinary tract and male reproductive system using modern surgical techniques.',
    treatments: ['Kidney stone treatment', 'Prostate surgery', 'Continence care', 'Urologic oncology'],
    chief: 'Dr. med. Oliver Brandes',
  },
  {
    id: 'ophthalmology',
    icon: Eye,
    name: 'Ophthalmology',
    summary:
      'Comprehensive eye care from routine exams to advanced surgical treatment of vision-threatening conditions.',
    treatments: ['Cataract surgery', 'Glaucoma management', 'Retinal treatment', 'Diabetic eye care'],
    chief: 'Dr. med. Ines Papadopoulos',
  },
];
