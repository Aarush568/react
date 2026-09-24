import { unsplash } from '../lib/images.js';

export const offers = [
  {
    id: 'early-bird-2027',
    title: 'Early Bird Escape',
    discount: 'Save 25%',
    validity: 'Book by 31 Dec 2026 for stays through Oct 2027',
    image: unsplash('1719391083606-da1dd6454a68'),
    summary: 'Reserve your 2027 getaway early and save 25% on any room category, with fully flexible cancellation.',
    description:
      'Plan ahead and save. Book any room or suite category before the end of the year for stays throughout the 2027 season and receive 25% off the best available rate, plus complimentary cancellation up to 14 days before arrival.',
    includes: ['25% off the best available rate', 'Free cancellation up to 14 days before arrival', 'Applies to all room categories', 'Complimentary breakfast for two'],
    minStay: '3 nights',
  },
  {
    id: 'romance-package',
    title: 'Romance in the Caldera',
    discount: 'Includes €400 in credits',
    validity: 'Available year-round, subject to availability',
    image: unsplash('1639162906614-0603b0ae95fd'),
    summary: 'A curated package for couples featuring a private sunset cruise, a spa ritual, and a candlelit dinner at Sunset Lounge.',
    description:
      'Designed for anniversaries, proposals and honeymoons, this package bundles our most-loved romantic experiences into one seamless booking: a private sunset catamaran cruise, the Couples Sunset Retreat spa ritual, and a reserved candlelit table at Sunset Lounge.',
    includes: ['Private sunset catamaran cruise for two', 'Couples Sunset Retreat spa treatment', 'Candlelit dinner at Sunset Lounge', 'Rose petal & sparkling wine turndown'],
    minStay: '4 nights',
  },
  {
    id: 'extended-stay-retreat',
    title: 'Extended Stay Retreat',
    discount: '5th & 6th nights free',
    validity: 'Available year-round, subject to availability',
    image: unsplash('1594048069339-42ae0e89376a'),
    summary: 'Stay six nights and pay for four, with a complimentary wine tasting tour included for longer stays.',
    description:
      'Slow down and settle in. Book six consecutive nights in any suite category and the fifth and sixth nights are on us, along with a complimentary spot on our Volcanic Vineyard Wine Tour to make the most of your extended stay.',
    includes: ['5th and 6th nights free', 'Complimentary Volcanic Vineyard Wine Tour', 'Daily breakfast included', 'Late checkout, subject to availability'],
    minStay: '6 nights',
  },
];

export function getOfferById(id) {
  return offers.find((offer) => offer.id === id);
}
