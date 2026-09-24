import { unsplash } from '../lib/images.js';

export const activities = [
  {
    id: 'sunset-catamaran-cruise',
    name: 'Sunset Catamaran Cruise',
    category: 'On the Water',
    duration: '5 hours',
    groupSize: 'Up to 12 guests',
    price: 145,
    image: unsplash('1414437384035-787b9df782d7'),
    summary: 'Sail the caldera by private catamaran, with stops for swimming at the hot springs and a sunset dinner on board.',
    description:
      'Depart from our private jetty aboard a traditional wooden catamaran for an afternoon on the caldera. We anchor at the volcanic hot springs for a swim, cruise past the red and white beaches, and finish with a barbecue dinner on deck as the sun sets behind the island of Thirasia.',
    includes: ['Private jetty departure', 'Swim stop at the volcanic hot springs', 'On-board barbecue dinner', 'Unlimited local wine & soft drinks'],
  },
  {
    id: 'guided-caldera-hike',
    name: 'Guided Caldera Rim Hike',
    category: 'On Foot',
    duration: '3 hours',
    groupSize: 'Up to 8 guests',
    price: 65,
    image: unsplash('1560099815-6deb2e8ab9d2'),
    summary: 'A guided walk along the caldera rim from Fira to Oia, tracing the island\'s volcanic history.',
    description:
      'This guided hike follows the dramatic caldera-rim path connecting Fira and Oia, past whitewashed chapels and centuries-old cave houses. Our local guide shares the volcanic history behind the landscape, with stops for photos at the most striking viewpoints along the way.',
    includes: ['Local licensed guide', 'Bottled water & trail snacks', 'Return transfer to the resort', 'Small-group pace'],
  },
  {
    id: 'volcanic-wine-tasting-tour',
    name: 'Volcanic Vineyard Wine Tour',
    category: 'Food & Wine',
    duration: '4 hours',
    groupSize: 'Up to 10 guests',
    price: 110,
    image: unsplash('1637181156153-bedd1098f8c1'),
    summary: 'Visit three family-run vineyards to taste Assyrtiko wines grown in Santorini\'s volcanic soil.',
    description:
      'Santorini\'s volcanic soil produces some of the Mediterranean\'s most distinctive white wines. This tour visits three family-run vineyards, where growers explain the traditional basket-vine training method before guiding you through tastings of their reserve Assyrtiko and Vinsanto labels.',
    includes: ['Private transfer between vineyards', 'Guided tastings at 3 wineries', 'Traditional meze pairing', 'Take-home bottle of Assyrtiko'],
  },
  {
    id: 'scuba-discovery-dive',
    name: 'Scuba Discovery Dive',
    category: 'On the Water',
    duration: '3 hours',
    groupSize: 'Up to 6 guests',
    price: 130,
    image: unsplash('1583212292454-1fe6229603b7'),
    summary: 'A beginner-friendly dive through underwater volcanic formations, no certification required.',
    description:
      'No prior diving experience is required for this introductory dive, led by our PADI-certified instructors. After a briefing on our private beach, you\'ll descend to explore submerged volcanic arches and reef fish in the clear waters just off the resort\'s coastline.',
    includes: ['PADI-certified instructor', 'All equipment provided', 'Beachside briefing session', 'Underwater photos included'],
  },
  {
    id: 'kids-explorer-club',
    name: 'Little Explorers Club',
    category: 'Family',
    duration: 'Half or Full Day',
    groupSize: 'Ages 4–12',
    price: 40,
    image: unsplash('1648090272983-440e86555e8e'),
    summary: 'Supervised island-themed activities for younger guests, from treasure hunts to marine biology crafts.',
    description:
      'Our Little Explorers Club keeps younger guests engaged with a rotating programme of treasure hunts, Greek mythology storytelling and marine biology crafts, supervised by our qualified childcare team in a dedicated, shaded activity space near the family pool.',
    includes: ['Qualified supervising staff', 'Themed daily activity programme', 'Healthy snacks included', 'Half-day and full-day options'],
  },
  {
    id: 'sunrise-yoga',
    name: 'Sunrise Yoga on the Cliff',
    category: 'Wellness',
    duration: '60 minutes',
    groupSize: 'Up to 15 guests',
    price: 30,
    image: unsplash('1544367567-0f2fcb009e0b'),
    summary: 'A guided vinyasa flow on our cliffside deck as the sun rises over the caldera.',
    description:
      'Begin the day with a guided vinyasa flow on our cliffside yoga deck, timed to greet the sunrise over the caldera. Suitable for all levels, with mats and props provided. A small group size keeps the session personal and unhurried.',
    includes: ['Certified yoga instructor', 'Mats & props provided', 'Herbal tea served after class', 'Suitable for all levels'],
  },
];

export function getActivityById(id) {
  return activities.find((activity) => activity.id === id);
}
