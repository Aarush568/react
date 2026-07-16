import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { cakes } from './Home';
import { useCart } from '../context/CartContext';
import { useLiked } from '../context/LikedContext';
import { slugify } from '../utils/slug';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleLiked, isLiked } = useLiked();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const cake = cakes.find(c => slugify(c.title) === slug);

  if (!cake) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-stone-600 mb-4">We couldn't find that cake.</p>
        <Link to="/" className="text-amber-700 font-bold underline">Back to shop</Link>
      </div>
    );
  }

  const liked = isLiked(cake.title);

  const handleAddToCart = () => {
    addToCart(cake, quantity);
    setAdded(true);
  };

  const handleBuyNow = () => {
    navigate('/checkout', { state: { buyNow: { cake, quantity } } });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <Link to="/" className="text-xs text-stone-500 hover:text-amber-700 transition-colors">
        ← Back to all cakes
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div
          className="w-full h-80 rounded-xl overflow-hidden relative"
          style={{ backgroundColor: cake.color || '#f5e6d3' }}
        >
          <img src={cake.image} alt={cake.title} className="w-full h-full object-cover" />
          <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-white/90 rounded text-amber-900 border border-stone-200">
            {cake.badge}
          </span>
          <button
            onClick={() => toggleLiked(cake.title)}
            className="absolute top-3 right-3 text-2xl leading-none"
            aria-label={liked ? 'Unlike' : 'Like'}
          >
            {liked ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-5">
          <div>
            <h1
              className="text-3xl font-bold text-stone-900 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {cake.title}
            </h1>
            <p className="text-stone-600 leading-relaxed">{cake.mainText}</p>
          </div>

          <div className="font-mono text-2xl font-bold text-amber-800">
            {cake.price}
          </div>

          {/* Quantity selector */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-bold text-stone-500">Quantity</span>
            <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-9 h-9 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center text-sm font-bold text-stone-900">{quantity}</span>
              <button
                onClick={() => setQuantity(q => Math.min(20, q + 1))}
                className="w-9 h-9 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 px-6 py-3 rounded-lg border-2 border-amber-800 text-amber-800 font-bold text-sm uppercase tracking-wide hover:bg-amber-50 transition-colors"
            >
              Add to Basket
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 px-6 py-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Order Now
            </button>
          </div>

          {added && (
            <div className="flex items-center justify-between bg-teal-50 border border-teal-200 rounded-lg px-4 py-3 text-sm text-teal-800">
              <span>Added {quantity} to your basket.</span>
              <Link to="/cart" className="font-bold underline shrink-0 ml-3">View basket →</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
