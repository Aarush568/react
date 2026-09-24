import { unsplash } from '../lib/images.js';

export const treatments = [
  {
    id: 'signature-aegean-massage',
    name: 'Signature Aegean Massage',
    category: 'Massage',
    duration: '60 / 90 minutes',
    price: 140,
    image: unsplash('1741522509438-a120c0bb5e88'),
    summary: 'A full-body massage using warmed volcanic stones and local olive oil to ease tension built up from travel.',
    description:
      'Our signature treatment blends deep-tissue technique with warmed volcanic stones sourced from the island itself, finished with an aromatic olive-oil blend pressed on Santorini. It is the treatment most first-time guests book, and the one returning guests never skip.',
    benefits: ['Relieves travel-related tension', 'Improves circulation', 'Deeply hydrates skin'],
  },
  {
    id: 'thermal-hammam-ritual',
    name: 'Thermal Hammam Ritual',
    category: 'Ritual',
    duration: '75 minutes',
    price: 165,
    image: unsplash('1696841212541-449ca29397cc'),
    summary: 'A traditional steam and exfoliation ritual in our marble hammam, followed by a mineral-rich clay mask.',
    description:
      'Inspired by centuries-old Mediterranean bathing rituals, this treatment begins with time in our heated marble hammam before a full-body exfoliation and a mineral clay mask drawn from volcanic earth. Guests leave with noticeably softer skin and a deep sense of calm.',
    benefits: ['Deep exfoliation', 'Detoxifying clay mask', 'Eases muscle tension'],
  },
  {
    id: 'infinity-fitness-session',
    name: 'Private Infinity Pool & Fitness Session',
    category: 'Fitness',
    duration: '45 minutes',
    price: 90,
    image: unsplash('1735770517146-e95c872226fc'),
    summary: 'A private trainer-led session in our cliffside fitness studio, followed by recovery time in the infinity pool.',
    description:
      'For guests who want to stay active without leaving the view behind, our resident trainer leads a private strength or mobility session in the open-air fitness studio, followed by guided recovery stretches poolside at the cliffside infinity pool.',
    benefits: ['Personalised fitness programming', 'Ocean-view training studio', 'Guided recovery & stretching'],
  },
  {
    id: 'couples-sunset-retreat',
    name: 'Couples Sunset Retreat',
    category: 'Couples',
    duration: '120 minutes',
    price: 340,
    image: unsplash('1598901986949-f593ff2a31a6'),
    summary: 'A side-by-side massage and soak in our private couples suite, timed to finish as the sun sets over the caldera.',
    description:
      'Our most requested couples experience combines a side-by-side massage with a private outdoor soaking tub, timed precisely so your treatment concludes as the sun sets over the caldera. Champagne and a small tasting plate are served on your private terrace afterward.',
    benefits: ['Private couples suite & terrace', 'Synchronised massage experience', 'Champagne service included'],
  },
];

export function getTreatmentById(id) {
  return treatments.find((treatment) => treatment.id === id);
}
