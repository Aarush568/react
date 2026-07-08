import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { slugify } from '../utils/slug';
import { useScrollToHash } from '../utils/useScrollToHash';

export const faqs = [
  { title: 'Safe Delivery?', badge: 'Logistics', price: 'Chilled Truck', color: '#e0f2fe', mainText: 'We dispatch orders via climate-regulated transport vehicles across a 25-mile local radius.' },
  { title: 'Order Deadlines?', badge: 'Timelines', price: '48h Notice', color: '#fef9c3', mainText: 'Standard items need 48 hours notice. Custom tiered wedding commissions need a 2-week window.' },
  { title: 'Allergen Controls?', badge: 'Dietary', price: 'Nut/Gluten Free', color: '#d1fae5', mainText: 'We produce vegan, dairy-free, and nut-free styles. Advise our desk about extreme allergy profiles.' },
  { title: 'Serving Methods?', badge: 'Handling', price: 'Room Temp', color: '#fff7ed', mainText: 'Bring the cake to room temperature exactly 1 hour before cutting to soften the butter fats.' },
  { title: 'Private Tastings?', badge: 'Sessions', price: 'By Booking', color: '#fce7f3', mainText: 'Private pastry flights and design brainstorming sessions can be booked via our concierge.' },
  { title: 'Refund Policies?', badge: 'Cancellations', price: '5 Days Notice', color: '#ede9fe', mainText: 'A full deposit return is issued for any order cancelled at least 5 business days beforehand.' },
];

export default function FAQs() {
  const [openIndexes, setOpenIndexes] = useState(new Set());
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const slug = location.hash.slice(1);
    const idx = faqs.findIndex(f => slugify(f.title) === slug);
    if (idx !== -1) {
      setOpenIndexes(prev => new Set(prev).add(idx));
    }
  }, [location.hash]);

  useScrollToHash();

  const toggle = (i) => {
    setOpenIndexes(prev => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <div>
      {/* Page hero */}
      <div className="bg-stone-800 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-4 block">Support</span>
          <h2
            className="text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto text-base">
            Everything you need to know about ordering, delivery, and our baking standards.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="divide-y divide-stone-200">
          {faqs.map((faq, i) => (
            <div key={i} id={slugify(faq.title)} className="scroll-mt-24">
              <button
                onClick={() => toggle(i)}
                className="w-full py-6 flex items-center justify-between text-left gap-4 group"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 shrink-0">
                    {faq.badge}
                  </span>
                  <span className="font-semibold text-stone-900 text-base group-hover:text-amber-700 transition-colors">
                    {faq.title}
                  </span>
                </div>
                <span className="text-stone-400 text-2xl font-light shrink-0 leading-none">
                  {openIndexes.has(i) ? '−' : '+'}
                </span>
              </button>

              {openIndexes.has(i) && (
                <div className="pb-7 pl-0">
                  <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 inline-block mb-3">
                    {faq.price}
                  </span>
                  <p className="text-stone-600 leading-relaxed">{faq.mainText}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
