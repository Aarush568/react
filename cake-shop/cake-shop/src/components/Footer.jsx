import React from 'react';
import { Link } from 'react-router-dom';
import { cakes } from './Home';
import { aboutItems } from './About';
import { faqs } from './FAQs';
import { contacts } from './Contact';
import { slugify } from '../utils/slug';

const pages = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/reviews', label: 'Reviews' },
  { path: '/faqs', label: 'FAQs' },
  { path: '/contact', label: 'Contact' },
];

const footerSections = [
  {
    heading: 'Our Bakery',
    links: [
      { label: 'Our Story', to: '/about' },
      ...aboutItems.map(item => ({ label: item.title, to: `/about#${slugify(item.title)}` })),
    ],
  },
  {
    heading: 'Cakes & Orders',
    links: [
      { label: 'Browse All Cakes', to: '/' },
      ...cakes.map(c => ({ label: c.title, to: `/#${slugify(c.title)}` })),
    ],
  },
  {
    heading: 'Customer Care',
    links: [
      { label: 'All FAQs', to: '/faqs' },
      ...faqs.map(f => ({ label: f.title, to: `/faqs#${slugify(f.title)}` })),
      { label: 'Customer Reviews', to: '/reviews' },
    ],
  },
  {
    heading: 'Get In Touch',
    links: [
      { label: 'Contact Page', to: '/contact' },
      ...contacts.map(c => ({ label: c.badge, to: `/contact#${slugify(c.title)}` })),
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-16">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <h2
              className="text-xl font-bold tracking-wide leading-none mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Maison du Sucre
            </h2>
            <p className="text-[9px] tracking-widest uppercase text-stone-500 mb-4">
              Artisanal Cake Shop
            </p>
            <p className="text-xs text-stone-400 leading-relaxed mb-5">
              Handcrafted with passion in small batches. Every cake tells a story — yours begins here.
            </p>
            {/* Social icons (unicode stand-ins) */}
            <div className="flex gap-3">
              {['𝕏', 'f', 'in', '▶'].map((icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-xs text-stone-400 hover:border-amber-500 hover:text-amber-400 transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map(section => (
            <div key={section.heading}>
              <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 mb-4">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs text-stone-400 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-stone-300 mb-1">
              Join our sweet circle
            </p>
            <p className="text-[11px] text-stone-500">
              New flavours, seasonal specials & early access — straight to your inbox.
            </p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-56 px-3 py-2 text-xs bg-stone-800 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
            />
            <button className="px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest bg-amber-700 hover:bg-amber-600 text-white rounded-lg transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between gap-4">
          <p className="text-[10px] text-stone-600">
            © {new Date().getFullYear()} Maison du Sucre. All rights reserved.
          </p>
          <div className="flex gap-4">
            {pages.map(page => (
              <Link
                key={page.path}
                to={page.path}
                className="text-[10px] text-stone-600 hover:text-stone-400 transition-colors"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
