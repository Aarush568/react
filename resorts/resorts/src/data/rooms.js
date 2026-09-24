import { unsplash } from '../lib/images.js';

export const rooms = [
  {
    id: 'garden-view-room',
    name: 'Garden View Room',
    tagline: 'A calm, sunlit retreat framed by bougainvillea',
    size: '32 m²',
    occupancy: '2 Guests',
    bedType: '1 King or 2 Twin Beds',
    view: 'Garden View',
    price: 240,
    image: unsplash('1718939044687-fb1a2381687a'),
    gallery: [
      unsplash('1641122631087-365d361a0f12', 900),
      unsplash('1736618625883-901da9c66c1d', 900),
    ],
    summary: 'A serene entry-level room overlooking our terraced gardens, ideal for guests who want quiet comfort close to the pool and restaurants.',
    description:
      'Tucked among olive trees and bougainvillea, the Garden View Room offers a peaceful escape just steps from the main pool and Ouzo Terrace restaurant. Interiors combine whitewashed walls, natural linen and hand-carved wooden furniture for a look that is unmistakably Cycladic. A private balcony invites slow mornings with coffee before the island wakes.',
    amenities: [
      'Private furnished balcony',
      'Rain shower with Aegean sea-salt toiletries',
      'Nespresso machine & minibar',
      'Egyptian cotton linens',
      'Smart TV & high-speed Wi-Fi',
      'Air conditioning & ceiling fan',
    ],
  },
  {
    id: 'deluxe-sea-view-room',
    name: 'Deluxe Sea View Room',
    tagline: 'Wake up to uninterrupted views of the caldera',
    size: '38 m²',
    occupancy: '2 Guests',
    bedType: '1 King Bed',
    view: 'Caldera & Sea View',
    price: 380,
    image: unsplash('1631049552057-403cdb8f0658'),
    gallery: [
      unsplash('1685592437742-3b56edb46b15', 900),
      unsplash('1758448755969-8791367cf5c5', 900),
    ],
    summary: 'A cliffside room with a private veranda facing the volcanic caldera, built for sunset watching and long, unhurried evenings.',
    description:
      'Carved into the cliffside, the Deluxe Sea View Room places you directly above the caldera with nothing between you and the horizon but a glass balustrade. The interior is quietly luxurious — plaster walls, brushed brass fixtures and a soaking tub positioned to catch the evening light. This is the room our returning guests request by name.',
    amenities: [
      'Private veranda with caldera view',
      'Soaking tub facing the sea',
      'Outdoor rain shower',
      'Premium minibar with local wines',
      'Turndown service',
      'Complimentary sunset cocktail on arrival',
    ],
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite with Plunge Pool',
    tagline: 'Your own private plunge pool above the Aegean',
    size: '55 m²',
    occupancy: '2–3 Guests',
    bedType: '1 King Bed + Daybed',
    view: 'Caldera & Sea View',
    price: 560,
    image: unsplash('1713843841925-6af6ed0df472'),
    gallery: [
      unsplash('1596746698204-d69844da956d', 900),
      unsplash('1562407132-e23789f81bb7', 900),
    ],
    summary: 'A spacious suite with a separate lounge area and a private plunge pool cut into the terrace, for guests who want to never leave the view.',
    description:
      'The Junior Suite adds a private plunge pool and a shaded lounge terrace to everything guests love about our sea view rooms. Inside, a separate sitting area with a writing desk and record player makes this suite equally suited to a romantic escape or a few quiet days of remote work with a view no office could match.',
    amenities: [
      'Private 3×2 m plunge pool',
      'Shaded outdoor lounge & dining area',
      'Separate sitting room',
      'Bose sound system',
      'Walk-in rain shower & soaking tub',
      'Daily fruit & local pastry basket',
    ],
  },
  {
    id: 'honeymoon-pool-suite',
    name: 'Honeymoon Infinity Pool Suite',
    tagline: 'A private infinity pool that spills toward the caldera',
    size: '70 m²',
    occupancy: '2 Guests',
    bedType: '1 King Bed',
    view: 'Panoramic Caldera View',
    price: 780,
    image: unsplash('1562407184-c5428fdf2cd1'),
    gallery: [
      unsplash('1557750505-e7b4d1c40410', 900),
      unsplash('1668276490368-409a6002756d', 900),
    ],
    summary: 'Our most romantic suite, with a private infinity-edge pool, an open-air lounge, and uninterrupted views of the caldera at every hour.',
    description:
      'Designed for celebrations, the Honeymoon Infinity Pool Suite features a cantilevered infinity pool that appears to merge with the sea below. The bedroom opens fully onto the terrace, blurring the line between indoors and out. Special touches — rose petal turndown, private candlelit dinners, in-suite spa treatments — can be arranged for anniversaries, proposals and honeymoons.',
    amenities: [
      'Private infinity-edge pool',
      'Open-plan bedroom with retractable glass walls',
      'Outdoor rain shower & freestanding tub',
      'Dedicated suite host',
      'Complimentary bottle of local sparkling wine',
      'Priority spa & dining reservations',
    ],
  },
  {
    id: 'presidential-villa',
    name: 'Presidential Cliffside Villa',
    tagline: 'A three-bedroom villa with a private chef and infinity pool',
    size: '180 m²',
    occupancy: '6 Guests',
    bedType: '3 King Bedrooms',
    view: '270° Caldera View',
    price: 1650,
    image: unsplash('1588504633950-9dc518941e93'),
    gallery: [
      unsplash('1715158230572-f571ba4952da', 900),
      unsplash('1536625737227-92a1fc042e7e', 900),
    ],
    summary: 'A standalone three-bedroom villa with a 270° caldera view, a large infinity pool, a private chef and dedicated butler service.',
    description:
      'Set apart from the main resort on its own promontory, the Presidential Cliffside Villa is Azzurra Bay at its most exclusive. Three ensuite bedrooms surround a central living pavilion and a 12-metre infinity pool with 270° views across the caldera. A private chef, butler and dedicated concierge are included, making the villa a favourite for family celebrations, milestone birthdays and small destination weddings.',
    amenities: [
      '12-metre private infinity pool',
      'Private chef & daily breakfast included',
      'Dedicated butler & concierge',
      'Outdoor dining pavilion & wine cellar',
      'In-villa spa treatment room',
      'Private car transfer from the airport or port',
    ],
  },
];

export function getRoomById(id) {
  return rooms.find((room) => room.id === id);
}
