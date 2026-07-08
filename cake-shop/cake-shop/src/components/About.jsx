import React from 'react';
import { slugify } from '../utils/slug';
import { useScrollToHash } from '../utils/useScrollToHash';

export const aboutItems = [
  { title: 'Our Origins', badge: 'Timeline', price: 'Est. 2015', color: '#fef3c7', mainText: 'Started as an intimate family kitchen and blossomed into the region\'s premium custom dessert house.' },
  { title: 'Organic Harvest', badge: 'Sourcing', price: '100% Pure', color: '#d1fae5', mainText: 'We gather whole flours, sweet creams, and seasonal fruit sets from direct partner farmers.' },
  { title: 'The Pastry Team', badge: 'Artisans', price: '25+ Years', color: '#ede9fe', mainText: 'Our baking leaders bring over twenty-five combined years of classical European pastry decoration.' },
  { title: 'Zero Food Waste', badge: 'Ecology', price: 'Daily Care', color: '#dcfce7', mainText: 'All unreserved morning inventory gets sent directly to urban shelters every evening.' },
  { title: 'Bespoke Builds', badge: 'Artistry', price: 'Custom Lab', color: '#fce7f3', mainText: 'We transform abstract concepts into structural, edible cake art for high-profile events.' },
  { title: 'Baked For Your Day', badge: 'Freshness', price: 'Strict Standard', color: '#fff7ed', mainText: 'We oppose flash-freezing. Your build occurs exclusively on your collection day.' },
];

export default function About() {
  useScrollToHash();

  return (
    <div>
      {/* Page hero */}
      <div className="bg-stone-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-4 block">Who We Are</span>
          <h2
            className="text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Maison du Sucre
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed text-base">
            From a family kitchen to the region's most celebrated custom dessert house — our story is built on passion, precision, and the finest ingredients.
          </p>
        </div>
      </div>

      {/* Content rows */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="divide-y divide-stone-100">
          {aboutItems.map((item, i) => (
            <div key={i} id={slugify(item.title)} className="py-10 flex gap-8 items-start scroll-mt-24">
              <div
                className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: item.color }}
              >
                🎂
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                    {item.badge}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-400">
                    {item.price}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-stone-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.mainText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
