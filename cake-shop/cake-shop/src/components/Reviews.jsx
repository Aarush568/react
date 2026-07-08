import React, { useState } from 'react';

const reviews = [
  { title: 'Sarah M.', badge: '★★★★★', price: 'Wedding', color: '#fef3c7', mainText: 'The custom 4-tier cake was a breathtaking structural marvel. Guests were completely amazed.' },
  { title: 'James L.', badge: '★★★★★', price: 'Birthday', color: '#fce4e4', mainText: 'The dark chocolate displays magnificent depth without aggressive sugar weight. Exceptional.' },
  { title: 'Elena R.', badge: '★★★★★', price: 'Allergy Safe', color: '#d1fae5', mainText: 'They managed my severe gluten allergy with absolute cross-contamination protection. Deliciously safe.' },
  { title: 'David K.', badge: '★★★★★', price: 'Express', color: '#ede9fe', mainText: 'Pulled off an intricate customized order inside a tight 24-hour notice window. Incredible.' },
  { title: 'Chloe T.', badge: '★★★★★', price: 'Catering', color: '#fce7f3', mainText: 'The micro-piping frosting lines and presentation looked beautifully elegant. Highly recommended.' },
  { title: 'Marcus P.', badge: '★★★★★', price: 'Regular', color: '#f0fdf4', mainText: 'Consistent moisture and balance month after month. Our absolute benchmark bakery.' },
];

export default function Reviews() {
  const [sortByPrice, setSortByPrice] = useState(false);
  const shown = sortByPrice ? [...reviews].sort((a, b) => a.price.localeCompare(b.price)) : reviews;

  return (
    <div>
      {/* Page hero */}
      <div className="bg-amber-50 border-b border-amber-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-700 mb-4 block">Testimonials</span>
          <h2
            className="text-4xl font-bold text-stone-900 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base">
            Real stories from customers who trusted us with their most special moments.
          </p>
        </div>
      </div>

      {/* Sort + review rows */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-stone-100">
          <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">Sort:</span>
          <button
            onClick={() => setSortByPrice(!sortByPrice)}
            className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg border-2 transition-all ${
              sortByPrice
                ? 'bg-amber-800 text-white border-amber-900'
                : 'bg-white text-stone-600 border-stone-200 hover:border-amber-400'
            }`}
          >
            {sortByPrice ? 'Original Order' : 'A–Z by Occasion'}
          </button>
        </div>

        <div className="divide-y divide-stone-100">
          {shown.map((review, i) => (
            <div key={i} className="py-8 flex gap-6 items-start">
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-stone-800 text-lg"
                style={{ backgroundColor: review.color }}
              >
                {review.title[0]}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-semibold text-stone-900">{review.title}</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-stone-100 text-stone-600 rounded">
                    {review.price}
                  </span>
                </div>
                <div className="text-amber-500 text-sm mb-3">{review.badge}</div>
                <p className="text-stone-600 leading-relaxed italic">"{review.mainText}"</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
