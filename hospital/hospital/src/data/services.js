import {
  Siren,
  BedDouble,
  ScanLine,
  FlaskConical,
  Pill,
  Dumbbell,
  Apple,
  HeartHandshake,
  Wifi,
  ParkingCircle,
  Coffee,
  Languages,
} from 'lucide-react';

export const clinicalServices = [
  {
    icon: Siren,
    name: 'Emergency Care',
    description: '24/7 emergency department staffed for trauma, cardiac events and acute illness of any severity.',
  },
  {
    icon: BedDouble,
    name: 'Inpatient & Outpatient Care',
    description: 'Comfortable single and double rooms alongside same-day outpatient treatment across all departments.',
  },
  {
    icon: ScanLine,
    name: 'Diagnostic Imaging',
    description: 'On-site CT, MRI, X-ray and ultrasound with rapid reporting to support fast, accurate diagnoses.',
  },
  {
    icon: FlaskConical,
    name: 'Laboratory Medicine',
    description: 'A fully accredited in-house laboratory delivering results for routine and urgent testing.',
  },
  {
    icon: Pill,
    name: 'Hospital Pharmacy',
    description: 'Clinical pharmacists manage medication safety, supply and counseling for every patient.',
  },
  {
    icon: Dumbbell,
    name: 'Physiotherapy & Rehabilitation',
    description: 'Individualized rehabilitation plans to restore mobility and independence after illness or surgery.',
  },
  {
    icon: Apple,
    name: 'Nutrition Counseling',
    description: 'Clinical dietitians support recovery and long-term health with personalized nutrition plans.',
  },
  {
    icon: HeartHandshake,
    name: 'Social Services & Chaplaincy',
    description: 'Discharge planning, counseling and spiritual care for patients and their families of any faith.',
  },
];

export const patientAmenities = [
  {
    icon: Wifi,
    name: 'Free Wi-Fi',
    description: 'Complimentary high-speed internet throughout patient rooms and public areas.',
  },
  {
    icon: ParkingCircle,
    name: 'On-Site Parking',
    description: 'Convenient visitor and patient parking directly adjacent to the main entrance.',
  },
  {
    icon: Coffee,
    name: 'Café & Cafeteria',
    description: 'A relaxed café for patients, visitors and staff, open daily with fresh meals and snacks.',
  },
  {
    icon: Languages,
    name: 'Interpreter Services',
    description: 'On-demand interpreting in multiple languages to support clear communication with your care team.',
  },
];

export const visitingInfo = [
  { label: 'General visiting hours', value: 'Daily, 8:00 AM – 8:00 PM' },
  { label: 'Intensive care unit', value: 'Daily, 10:00 AM – 12:00 PM & 4:00 PM – 6:00 PM' },
  { label: 'Maternity ward', value: 'Daily, 9:00 AM – 9:00 PM (partners only after 8:00 PM)' },
  { label: 'Emergency department', value: 'Open 24 hours, every day of the year' },
];
