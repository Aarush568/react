import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Reviews from './components/Reviews';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import { LikedContext } from './context/LikedContext';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/reviews', label: 'Reviews' },
  { path: '/faqs', label: 'FAQs' },
  { path: '/contact', label: 'Contact' },
];

function Layout() {
  const [likedIds, setLikedIds] = useState(new Set());

  const toggleLiked = useCallback((id) => {
    setLikedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const isLiked = useCallback((id) => likedIds.has(id), [likedIds]);
  const clearAll = useCallback(() => setLikedIds(new Set()), []);
  const likedCount = likedIds.size;

  return (
    <LikedContext.Provider value={{ likedIds, toggleLiked, isLiked, clearAll }}>
      <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* Top navbar */}
        <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

            {/* Logo */}
            <div className="shrink-0">
              <h1
                className="text-2xl font-bold tracking-wide leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: 'linear-gradient(to right, #92400e, #b45309, #d97706)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Maison du Sucre
              </h1>
              <p className="text-[9px] tracking-widest uppercase text-stone-400 mt-0.5">
                Artisanal Cake Shop
              </p>
            </div>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors pb-0.5 ${
                      isActive
                        ? 'text-amber-700 border-b-2 border-amber-600'
                        : 'text-stone-600 hover:text-amber-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Saved counter */}
            <div className="shrink-0 flex items-center gap-2 text-xs text-stone-600 bg-stone-50 border border-stone-200 px-3 py-2 rounded-lg">
              <span>❤️</span>
              <span className="font-bold text-amber-700">{likedCount}</span>
              <span className="text-stone-500">saved</span>
              {likedCount > 0 && (
                <button
                  onClick={clearAll}
                  className="ml-1 text-[9px] uppercase text-stone-400 hover:text-red-400 transition-colors"
                >
                  clear
                </button>
              )}
            </div>

          </div>
        </header>

        {/* Page content */}
        <main>
          <Outlet />
        </main>

      </div>
    </LikedContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
