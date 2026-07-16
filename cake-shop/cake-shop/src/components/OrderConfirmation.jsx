import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function OrderConfirmation() {
  const location = useLocation();
  const order = location.state;

  if (!order) {
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

  const { orderNumber, estimatedDelivery, items, total, address, paymentMethod } = order;

  const paymentLabel =
    paymentMethod === 'card'
      ? 'Credit / Debit Card'
      : paymentMethod === 'upi'
      ? 'UPI'
      : 'Cash on Delivery';

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <span className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-3xl flex items-center justify-center mx-auto mb-4">
          ✓
        </span>
        <h1
          className="text-2xl font-bold text-stone-900 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Order placed, thank you!
        </h1>
        <p className="text-stone-600">
          A confirmation has been sent to your inbox. We'll let you know when it's on its way.
        </p>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl p-6 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Order Number</p>
          <p className="text-sm font-bold text-stone-900 font-mono">{orderNumber}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Estimated Delivery</p>
          <p className="text-sm font-bold text-stone-900">{estimatedDelivery}</p>
        </div>
        {address && (
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Delivering To</p>
            <p className="text-sm text-stone-700">{address.fullName}</p>
            <p className="text-sm text-stone-600">{address.addressLine}, {address.city} {address.zip}</p>
          </div>
        )}
        {paymentMethod && (
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Payment Method</p>
            <p className="text-sm text-stone-700">{paymentLabel}</p>
          </div>
        )}
      </div>

      {items && (
        <div className="bg-white border border-stone-200 rounded-xl p-6 mb-6">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-stone-500 mb-4">
            Items Ordered
          </h2>
          <div className="flex flex-col gap-4">
            {items.map(item => (
              <div key={item.id} className="flex gap-4 items-center">
                <div
                  className="w-14 h-14 rounded-lg overflow-hidden shrink-0"
                  style={{ backgroundColor: item.color || '#f5e6d3' }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-stone-900 truncate">{item.title}</p>
                  <p className="text-xs text-stone-500">Qty {item.quantity}</p>
                </div>
                <div className="font-mono text-sm font-bold text-stone-900 shrink-0">
                  ${(item.unitPrice * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          {typeof total === 'number' && (
            <div className="flex items-center justify-between text-base font-bold text-stone-900 border-t border-stone-100 pt-4 mt-4">
              <span>Total charged</span>
              <span className="font-mono">${total.toFixed(2)}</span>
            </div>
          )}
        </div>
      )}

      <div className="text-center">
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wide transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
