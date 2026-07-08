import React, { useState } from 'react';
import CakeCard from './CakeCard';

const cakes = [
  { title: 'Crimson Velvet', badge: 'Signature', price: '$48.00', color: '#fce4e4', mainText: 'Three premium cocoa sponge layers coated in luxury Madagascar bean cream cheese frosting.' },
  { title: 'Dark Ganache', badge: 'Rich Cocoa', price: '$52.00', color: '#e8d5c4', mainText: 'Decadent Belgian single-origin dark chocolate crumb glazed in house-infused hot ganache.' },
  { title: 'Strawberry Chiffon', badge: 'Seasonal', price: '$46.00', color: '#fce4ee', mainText: 'Light Japanese biscuit layers stacked with organic sliced farm strawberries and fresh chantilly cream.' },
  { title: 'Citron Tart Pool', badge: 'Zesty Citrus', price: '$44.00', color: '#fef9c3', mainText: 'Tangy slow-simmered lemon curd pool sitting inside sweet shortcrust pastry crusts.' },
  { title: 'Pecan Praline', badge: 'Classic Nut', price: '$55.00', color: '#f5e6d3', mainText: 'Buttery brown sugar crumb drizzled in warm copper salted caramel and roasted Georgia pecans.' },
  { title: 'Vanilla Caviar', badge: 'Plant-Based', price: '$49.00', color: '#f0fdf4', mainText: 'A moist, dairy-free recipe packed with natural vanilla pods for absolute fluffiness.' },
];

export default function Home() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'Signature', 'Seasonal', 'Plant-Based'];
  const shown = filter === 'All' ? cakes : cakes.filter(c => c.badge === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border-2 transition-all ${
                filter === tag
                  ? 'bg-amber-800 text-white border-amber-900'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-amber-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((c, i) => (
            <CakeCard
              key={i}
              title={c.title}
              badge={c.badge}
              price={c.price}
              color={c.color}
              mainText={c.mainText}
              actionLabel="Order"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
