import React, { useState, useCallback, useMemo } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, Outlet } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Reviews from './components/Reviews';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import { LikedContext } from './context/LikedContext';
import { CartContext } from './context/CartContext';
import { parsePrice } from './utils/price';
import { slugify } from './utils/slug';
import Footer from './components/Footer';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/reviews', label: 'Reviews' },
  { path: '/faqs', label: 'FAQs' },
  { path: '/contact', label: 'Contact' },
];

function Layout() {
  const [likedIds, setLikedIds] = useState(new Set());
  const [items, setItems] = useState([]);

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

  const addToCart = useCallback((cake, quantity) => {
    const id = slugify(cake.title);
    setItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id,
          title: cake.title,
          price: cake.price,
          unitPrice: parsePrice(cake.price),
          image: cake.image,
          color: cake.color,
          quantity,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity < 1) {
      setItems(prev => prev.filter(item => item.id !== id));
      return;
    }
    setItems(prev => prev.map(item => (item.id === id ? { ...item, quantity } : item)));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items]
  );

  return (
    <LikedContext.Provider value={{ likedIds, toggleLiked, isLiked, clearAll }}>
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}>
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

            {/* Saved counter + basket */}
            <div className="shrink-0 flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-stone-600 bg-stone-50 border border-stone-200 px-3 py-2 rounded-lg">
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

              <Link
                to="/cart"
                className="relative flex items-center gap-2 text-xs text-stone-600 bg-stone-50 border border-stone-200 px-3 py-2 rounded-lg hover:border-amber-400 hover:text-amber-700 transition-colors"
              >
                <span>🧺</span>
                <span className="font-medium">Basket</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-amber-700 text-white text-[10px] font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

          </div>
        </header>

        {/* Page content */}
        <main>
          <Outlet />
        </main>

        <Footer />

      </div>
    </CartContext.Provider>
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
          <Route path="cake/:slug" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
