import React from 'react';
import { slugify } from '../utils/slug';
import { useScrollToHash } from '../utils/useScrollToHash';

export const contacts = [
  { title: '(555) 839-2001', badge: 'Phone', price: 'Hotline', color: '#dbeafe', icon: '📞', mainText: 'Call our concierge desk for real-time order tracking, menu adjustments, and walk-in availability.' },
  { title: 'bake@maisonsucre.com', badge: 'Email', price: 'Inquiries', color: '#fce7f3', icon: '✉️', mainText: 'Submit image boards, guest sizes, or venue guidelines for custom catering quotes.' },
  { title: '742 Baker Avenue', badge: 'Boutique', price: 'Sweetwater', color: '#fef9c3', icon: '📍', mainText: 'Visit our storefront to view custom showpieces and select daily individual pastry bakes.' },
  { title: 'Mon–Sat: 7AM–8PM', badge: 'Hours', price: 'Closed Sunday', color: '#d1fae5', icon: '🕐', mainText: 'Sunday operations are exclusively preserved for off-site wedding logistics and transport.' },
  { title: '@MaisonDuSucre', badge: 'Instagram', price: 'Social', color: '#ede9fe', icon: '📸', mainText: 'Browse behind-the-scenes reels and message our design managers for informal quotes.' },
  { title: 'Catering Registry', badge: 'Corporate', price: 'Event Intake', color: '#fff7ed', icon: '📋', mainText: 'Fill out our commercial intake registry to set up repeating event supply accounts.' },
  { title: 'Press & Media', badge: 'Publicity', price: 'Media Kit', color: '#dbeafe', icon: '📰', mainText: 'Request high-resolution photography and press kits for editorial features and interviews.' },
  { title: 'Wholesale Orders', badge: 'Bulk Supply', price: 'Retail Partners', color: '#fce7f3', icon: '🏪', mainText: 'Contact our wholesale desk for bulk supply inquiries and retail partnership opportunities.' },
  { title: 'maison-du-sucre.com', badge: 'Website', price: 'Online Portal', color: '#fef9c3', icon: '💻', mainText: 'Access our online portal for order tracking, menu updates, and digital event planning tools.' },
  { title: 'maisondusucre.com/faq', badge: 'Support', price: 'Help Center', color: '#d1fae5', icon: '❓', mainText: 'Visit our FAQ page for answers to common questions about ordering, delivery, and our baking standards.' },
  { title: 'maisondusucre', badge: 'TikTok', price: 'Video Content', color: '#ede9fe', icon: '🎥', mainText: 'Follow our TikTok for short-form videos showcasing our baking process, cake designs, and behind-the-scenes content.' },
  { title: 'maisondusucre', badge: 'LinkedIn', price: 'Professional Network', color: '#fff7ed', icon: '💼', mainText: 'Connect with our team on LinkedIn for professional updates, company news, and industry insights.' },
];

export default function Contact() {
  useScrollToHash();

  return (
    <div>
      {/* Page hero */}
      <div className="bg-amber-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-200 mb-4 block">Get In Touch</span>
          <h2
            className="text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Maison du Sucre
          </h2>
          <p className="text-amber-100 max-w-xl mx-auto leading-relaxed text-base">
            Reach out for custom orders, event catering, or any enquiries about our artisanal offerings.
          </p>
        </div>
      </div>

      {/* Contact details grid */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {contacts.map((c, i) => (
            <div key={i} id={slugify(c.title)} className="flex gap-5 scroll-mt-24">
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: c.color }}
              >
                {c.icon}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-amber-700 block mb-1">
                  {c.badge}
                </span>
                <p className="font-semibold text-stone-900 mb-1">{c.title}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{c.mainText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
