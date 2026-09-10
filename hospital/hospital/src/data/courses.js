import { GraduationCap, BookOpen, Stethoscope, Award } from 'lucide-react';

export const studyPrograms = [
  {
    level: 'Dual Bachelor’s Degree',
    icon: GraduationCap,
    programs: [
      {
        name: 'B.Sc. Nursing (Dual Studies)',
        duration: '3 years',
        summary:
          'Combine a fully accredited nursing degree with paid, hands-on clinical rotations across our departments.',
      },
      {
        name: 'B.Sc. Midwifery',
        duration: '3 years',
        summary:
          'Academic and practical training to become a fully qualified midwife, delivered in partnership with our maternity ward.',
      },
      {
        name: 'B.A. Health Management',
        duration: '3 years',
        summary:
          'Study healthcare administration and economics while gaining direct experience in hospital operations.',
      },
    ],
  },
  {
    level: 'Vocational Training (Ausbildung)',
    icon: BookOpen,
    programs: [
      {
        name: 'Registered Nurse Training',
        duration: '3 years',
        summary:
          'Generalist nursing training qualifying graduates to work across pediatric, adult and geriatric care settings.',
      },
      {
        name: 'Operating Room Technician',
        duration: '3 years',
        summary:
          'Specialized training to assist in surgical procedures, sterilization and operating room management.',
      },
      {
        name: 'Medical Laboratory Technician',
        duration: '3 years',
        summary:
          'Practical and theoretical training in diagnostic laboratory techniques within our accredited lab.',
      },
    ],
  },
  {
    level: 'Postgraduate & Master’s',
    icon: Award,
    programs: [
      {
        name: 'M.Sc. Advanced Practice Nursing',
        duration: '2 years',
        summary:
          'A part-time master’s program for registered nurses seeking advanced clinical and leadership roles.',
      },
      {
        name: 'M.Sc. Healthcare Management',
        duration: '2 years',
        summary:
          'Graduate study in hospital leadership, health policy and strategic management for working professionals.',
      },
    ],
  },
  {
    level: 'Medical Specialization (Facharzt)',
    icon: Stethoscope,
    programs: [
      {
        name: 'Residency Programs',
        duration: '5–6 years',
        summary:
          'Structured specialty training for physicians across Internal Medicine, Surgery, Anesthesiology and more.',
      },
      {
        name: 'Fellowship Opportunities',
        duration: '1–2 years',
        summary:
          'Subspecialty fellowships for qualified specialists seeking advanced expertise in a focused clinical area.',
      },
    ],
  },
];

export const applicationSteps = [
  {
    step: '01',
    title: 'Submit Your Application',
    description: 'Send your CV, cover letter and relevant certificates through our online application portal.',
  },
  {
    step: '02',
    title: 'Meet & Greet',
    description: 'Selected candidates are invited for an informal introduction with the department team.',
  },
  {
    step: '03',
    title: 'Interview & Assessment',
    description: 'A structured interview and, for clinical roles, a short practical assessment day.',
  },
  {
    step: '04',
    title: 'Offer & Onboarding',
    description: 'Successful candidates receive an offer along with a personalized onboarding plan.',
  },
];

export const careerBenefits = [
  'Guaranteed clinical placements with dedicated mentors',
  'Tuition and program fees fully covered',
  'Competitive training salary from day one',
  'Strong track record of permanent job offers after graduation',
  'Modern campus housing available for out-of-town students',
  'Ongoing continuing-education budget after graduation',
];
