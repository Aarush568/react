import { unsplash } from '../lib/images.js';

export const venues = [
  {
    id: 'ouzo-terrace',
    name: 'Ouzo Terrace',
    cuisine: 'Modern Greek & Mediterranean',
    mealPeriods: 'Breakfast, Lunch & Dinner',
    dressCode: 'Smart Casual',
    hours: '7:00 AM – 11:00 PM',
    image: unsplash('1665758564802-f611df512d8d'),
    gallery: [
      unsplash('1612453329651-4ca61a6760a7', 900),
      unsplash('1721225644708-de19b9beb446', 900),
    ],
    summary: 'Our signature restaurant, serving refined Greek cuisine on a cliffside terrace above the caldera.',
    description:
      'Ouzo Terrace is Azzurra Bay\'s flagship dining room, where Executive Chef Nikos Vlachos reimagines Cycladic classics using produce from our own garden and daily catches from local fishermen. Tables spill out onto a cliffside terrace, so every course arrives with a front-row view of the sunset. Reservations are recommended for dinner, particularly around sunset hours.',
    menuHighlights: [
      'Slow-roasted lamb with wild Santorini capers',
      'Fava purée with charred octopus',
      'Fresh catch of the day, whole-grilled tableside',
      'Traditional Santorini tomato fritters',
    ],
  },
  {
    id: 'azure-beach-bar',
    name: 'Azure Beach Bar',
    cuisine: 'Light Bites & Craft Cocktails',
    mealPeriods: 'Lunch & All-Day Drinks',
    dressCode: 'Resort Casual',
    hours: '10:00 AM – 7:00 PM',
    image: unsplash('1734356959924-c080db952e95'),
    gallery: [
      unsplash('1782203601023-7d3c72351f09', 900),
      unsplash('1760533535832-f5b2c1ae932a', 900),
    ],
    summary: 'Poolside cocktails, fresh salads and wood-fired flatbreads served steps from the infinity pool.',
    description:
      'Set directly beside the resort\'s main infinity pool, Azure Beach Bar keeps things easy — fresh juices in the morning, wood-fired flatbreads at lunch, and expertly mixed cocktails as the afternoon turns golden. It\'s the natural gathering point for guests moving between the pool, the sun loungers and the sea.',
    menuHighlights: [
      'Grilled halloumi & watermelon salad',
      'Wood-fired flatbread with local feta',
      'Frozen Aperol & Greek yoghurt sorbet',
      'Fresh-pressed citrus and herb spritzers',
    ],
  },
  {
    id: 'sunset-lounge',
    name: 'Sunset Lounge',
    cuisine: 'Small Plates & Champagne',
    mealPeriods: 'Evenings Only',
    dressCode: 'Elegant Evening Wear',
    hours: '5:00 PM – Midnight',
    image: unsplash('1785512325194-abf503844e24'),
    gallery: [
      unsplash('1787639231902-a9ec790ba6fd', 900),
      unsplash('1789581977593-3c4543f90366', 900),
    ],
    summary: 'An intimate cliffside lounge for champagne, small plates and live acoustic sets at sunset.',
    description:
      'Sunset Lounge occupies the highest point of the resort, a tiered terrace with unobstructed views west across the caldera. As the sun drops toward the horizon, a resident musician plays acoustic sets while our sommelier pours from a list of over 120 Greek and international labels. Booking ahead is strongly recommended for the front tier during peak sunset hours.',
    menuHighlights: [
      'Curated Greek & international champagne list',
      'Santorini fava and smoked eggplant dips',
      'Chilled seafood tower for two',
      'Late-night dessert & digestif menu',
    ],
  },
  {
    id: 'olive-and-vine',
    name: 'Olive & Vine Cellar',
    cuisine: 'Wine Tasting & Tapas',
    mealPeriods: 'Evenings, by Reservation',
    dressCode: 'Smart Casual',
    hours: '6:00 PM – 10:30 PM',
    image: unsplash('1611575189074-9dfbbceb258a'),
    gallery: [
      unsplash('1642340828763-822a676c1da3', 900),
      unsplash('1724882207681-9e7e8c3dd45c', 900),
    ],
    summary: 'A candlelit stone cellar hosting guided tastings of rare volcanic-soil wines from Santorini\'s vineyards.',
    description:
      'Carved into the volcanic rock beneath the resort, Olive & Vine Cellar is home to our reserve wine collection and hosts intimate guided tastings most evenings. Our sommelier walks guests through the distinctive mineral character that Santorini\'s volcanic soil gives its Assyrtiko wines, paired with small tapas plates designed to complement each pour.',
    menuHighlights: [
      'Guided six-wine Assyrtiko tasting flight',
      'Cured meats & aged Greek cheeses',
      'Marinated olives from our own groves',
      'Private cellar dinners for up to 10 guests',
    ],
  },
];

export function getVenueById(id) {
  return venues.find((venue) => venue.id === id);
}
