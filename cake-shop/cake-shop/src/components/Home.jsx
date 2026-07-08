import React, { useState } from 'react';
import CakeCard from './CakeCard';
import { slugify } from '../utils/slug';
import { useScrollToHash } from '../utils/useScrollToHash';

export const cakes = [
  { title: 'Crimson Velvet', badge: 'Signature', price: '$48.00', color: '#fce4e4', image: 'https://thescranline.com/wp-content/uploads/2023/06/RED-VELVET-CAKE-23-WEB-01.jpg', mainText: 'Three premium cocoa sponge layers coated in luxury Madagascar bean cream cheese frosting.' },
  { title: 'Dark Ganache', badge: 'Rich Cocoa', price: '$52.00', color: '#e8d5c4', image: 'https://laneandgreyfare.com/wp-content/uploads/2025/03/Chocolate-Ganache-Cake-5-1-500x500.jpg', mainText: 'Decadent Belgian single-origin dark chocolate crumb glazed in house-infused hot ganache.' },
  { title: 'Strawberry Chiffon', badge: 'Seasonal', price: '$46.00', color: '#fce4ee', image: 'https://chawjcreations.com/wp-content/uploads/2024/12/89AFBED2-8ADD-4D61-920E-3C8C82090A60.jpg', mainText: 'Light Japanese biscuit layers stacked with organic sliced farm strawberries and fresh chantilly cream.' },
  { title: 'Citron Tart Pool', badge: 'Zesty Citrus', price: '$44.00', color: '#fef9c3', image: 'https://www.whatscookingella.com/uploads/1/9/7/6/19763961/dsc-0641_orig.jpg', mainText: 'Tangy slow-simmered lemon curd pool sitting inside sweet shortcrust pastry crusts.' },
  { title: 'Pecan Praline', badge: 'Classic Nut', price: '$55.00', color: '#f5e6d3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5DgOEbc9z19PLGaUZrtzbzPUjPttqCE_I4BzHBsNIXtA4Vo9QmM1oNfE&s=10', mainText: 'Buttery brown sugar crumb drizzled in warm copper salted caramel and roasted Georgia pecans.' },
  { title: 'Vanilla Caviar', badge: 'Plant-Based', price: '$49.00', color: '#f0fdf4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HJbDclneps7L87_bhwEy00-SvZABBQhhdYE5JR-Vj492-l_LCcUhEn0&s=10', mainText: 'A moist, dairy-free recipe packed with natural vanilla pods for absolute fluffiness.' },
];

export default function Home() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'Signature', 'Seasonal', 'Plant-Based'];
  const shown = filter === 'All' ? cakes : cakes.filter(c => c.badge === filter);

  useScrollToHash();

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

        <div id="cakes" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((c, i) => (
            <CakeCard
              key={i}
              id={slugify(c.title)}
              title={c.title}
              badge={c.badge}
              price={c.price}
              color={c.color}
              image={c.image}
              mainText={c.mainText}
              actionLabel="Order"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
