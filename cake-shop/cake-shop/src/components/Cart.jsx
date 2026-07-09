import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <span className="text-5xl block mb-4">🎂</span>
        <h1
          className="text-2xl font-bold text-stone-900 mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Thank you for your order!
        </h1>
        <p className="text-stone-600 mb-8">
          Your cakes are being prepared with love. A confirmation has been sent to your inbox.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wide transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <span className="text-5xl block mb-4">🧺</span>
        <h1
          className="text-2xl font-bold text-stone-900 mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your basket is empty
        </h1>
        <p className="text-stone-600 mb-8">Browse our cakes and add a few to your basket.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wide transition-colors"
        >
          Browse Cakes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1
        className="text-2xl font-bold text-stone-900 mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Your Basket
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items list */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {items.map(item => (
            <div
              key={item.id}
              className="flex gap-4 items-center bg-white border border-stone-200 rounded-xl p-4"
            >
              <div
                className="w-20 h-20 rounded-lg overflow-hidden shrink-0"
                style={{ backgroundColor: item.color || '#f5e6d3' }}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wide truncate">
                  {item.title}
                </h3>
                <p className="font-mono text-xs font-bold text-amber-800 mt-1">{item.price}</p>

                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-stone-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[10px] uppercase tracking-widest font-bold text-stone-400 hover:text-red-500 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="font-mono text-sm font-bold text-stone-900 shrink-0">
                ${(item.unitPrice * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="self-start text-[10px] uppercase tracking-widest font-bold text-stone-400 hover:text-red-500 transition-colors mt-2"
          >
            Clear basket
          </button>
        </div>

        {/* Summary */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 h-fit">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-stone-500 mb-4">
            Order Summary
          </h2>
          <div className="flex items-center justify-between text-sm text-stone-600 mb-2">
            <span>Subtotal</span>
            <span className="font-mono">${cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-stone-600 mb-4">
            <span>Delivery</span>
            <span className="font-mono">Free</span>
          </div>
          <div className="flex items-center justify-between text-base font-bold text-stone-900 border-t border-stone-100 pt-4 mb-6">
            <span>Total</span>
            <span className="font-mono">${cartTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={() => {
              clearCart();
              setPlaced(true);
            }}
            className="w-full px-6 py-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wide transition-colors"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
