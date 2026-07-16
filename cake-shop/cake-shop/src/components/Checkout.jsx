import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { parsePrice } from '../utils/price';
import { slugify } from '../utils/slug';

const STEPS = [
  { key: 'address', label: 'Delivery Address' },
  { key: 'payment', label: 'Payment' },
  { key: 'review', label: 'Review Order' },
];

function Stepper({ stepIndex }) {
  return (
    <div className="flex items-center mb-8">
      {STEPS.map((step, i) => (
        <React.Fragment key={step.key}>
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                i < stepIndex
                  ? 'bg-amber-800 text-white'
                  : i === stepIndex
                  ? 'bg-amber-100 text-amber-800 border-2 border-amber-800'
                  : 'bg-stone-100 text-stone-400 border border-stone-300'
              }`}
            >
              {i < stepIndex ? '✓' : i + 1}
            </div>
            <span
              className={`text-xs font-bold uppercase tracking-wide hidden sm:inline ${
                i <= stepIndex ? 'text-stone-900' : 'text-stone-400'
              }`}
            >
              {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`flex-1 h-px mx-3 ${i < stepIndex ? 'bg-amber-800' : 'bg-stone-200'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function CancelOrderModal({ onConfirm, onDismiss }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-6">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-xl">
        <h3
          className="text-lg font-bold text-stone-900 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Cancel this order?
        </h3>
        <p className="text-sm text-stone-600 mb-6">
          Are you sure that you want to cancel this order?
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onDismiss}
            className="flex-1 px-4 py-3 rounded-lg border border-stone-300 text-stone-700 font-bold text-sm uppercase tracking-wide hover:bg-stone-50 transition-colors"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold text-sm uppercase tracking-wide transition-colors"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

function OrderSummarySidebar({ items, subtotal, delivery, tax, total }) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-6 h-fit lg:sticky lg:top-24">
      <h2 className="text-xs font-extrabold uppercase tracking-widest text-stone-500 mb-4">
        Order Summary
      </h2>

      <div className="flex flex-col gap-3 mb-4 max-h-64 overflow-y-auto pr-1">
        {items.map(item => (
          <div key={item.id} className="flex gap-3 items-center">
            <div
              className="w-12 h-12 rounded-lg overflow-hidden shrink-0"
              style={{ backgroundColor: item.color || '#f5e6d3' }}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-stone-900 truncate">{item.title}</p>
              <p className="text-[11px] text-stone-500">Qty {item.quantity}</p>
            </div>
            <div className="font-mono text-xs font-bold text-stone-900 shrink-0">
              ${(item.unitPrice * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-100 pt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm text-stone-600">
          <span>Subtotal</span>
          <span className="font-mono">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-stone-600">
          <span>Delivery</span>
          <span className="font-mono">{delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-stone-600">
          <span>Estimated tax</span>
          <span className="font-mono">${tax.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-base font-bold text-stone-900 border-t border-stone-100 pt-3 mt-1">
          <span>Order total</span>
          <span className="font-mono">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items: cartItems, cartTotal: cartSubtotal, clearCart, addToCart } = useCart();
  const buyNow = location.state?.buyNow;

  const [stepIndex, setStepIndex] = useState(0);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [address, setAddress] = useState({
    fullName: '',
    addressLine: '',
    city: '',
    zip: '',
    phone: '',
  });
  const [payment, setPayment] = useState({
    method: 'card',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const items = useMemo(() => {
    if (buyNow) {
      const { cake, quantity } = buyNow;
      return [
        {
          id: slugify(cake.title),
          title: cake.title,
          price: cake.price,
          unitPrice: parsePrice(cake.price),
          image: cake.image,
          color: cake.color,
          quantity,
        },
      ];
    }
    return cartItems;
  }, [buyNow, cartItems]);

  const subtotal = buyNow
    ? items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
    : cartSubtotal;
  const delivery = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + delivery + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <span className="text-5xl block mb-4">🧺</span>
        <h1 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Your basket is empty
        </h1>
        <p className="text-stone-600 mb-8">Add a few cakes before heading to checkout.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wide transition-colors"
        >
          Browse Cakes
        </Link>
      </div>
    );
  }

  const isAddressValid =
    address.fullName.trim() &&
    address.addressLine.trim() &&
    address.city.trim() &&
    address.zip.trim() &&
    address.phone.trim();

  const isPaymentValid =
    payment.method !== 'card' ||
    (payment.cardNumber.replace(/\s/g, '').length >= 12 &&
      payment.cardName.trim() &&
      payment.cardExpiry.trim() &&
      payment.cardCvv.trim().length >= 3);

  const goNext = () => setStepIndex(i => Math.min(i + 1, STEPS.length - 1));
  const goBack = () => setStepIndex(i => Math.max(i - 1, 0));

  const confirmCancelOrder = () => {
    if (buyNow) {
      addToCart(buyNow.cake, buyNow.quantity);
    }
    navigate('/cart');
  };

  const handlePlaceOrder = () => {
    const orderNumber = `CK-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3 + Math.floor(Math.random() * 3));
    const estimatedDelivery = deliveryDate.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

    if (!buyNow) {
      clearCart();
    }

    navigate('/order-confirmation', {
      state: {
        orderNumber,
        estimatedDelivery,
        items,
        total,
        address,
        paymentMethod: payment.method,
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-stone-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        Checkout
      </h1>
      <p className="text-sm text-stone-500 mb-8">
        {buyNow ? 'Fast checkout for your selected item.' : 'Review your basket, confirm delivery, and place your order.'}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Stepper stepIndex={stepIndex} />

          <div className="bg-white border border-stone-200 rounded-xl p-6">
            {stepIndex === 0 && (
              <div className="flex flex-col gap-4">
                <h2 className="text-sm font-extrabold uppercase tracking-widest text-stone-500 mb-1">
                  Where should we deliver your order?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1 text-xs font-bold text-stone-600 sm:col-span-2">
                    Full name
                    <input
                      type="text"
                      value={address.fullName}
                      onChange={e => setAddress(a => ({ ...a, fullName: e.target.value }))}
                      className="border border-stone-300 rounded-lg px-3 py-2 text-sm font-normal text-stone-900 focus:outline-none focus:border-amber-600"
                      placeholder="Jane Appleseed"
                    />
                  </label>

                  <label className="flex flex-col gap-1 text-xs font-bold text-stone-600 sm:col-span-2">
                    Address
                    <input
                      type="text"
                      value={address.addressLine}
                      onChange={e => setAddress(a => ({ ...a, addressLine: e.target.value }))}
                      className="border border-stone-300 rounded-lg px-3 py-2 text-sm font-normal text-stone-900 focus:outline-none focus:border-amber-600"
                      placeholder="123 Baker Street"
                    />
                  </label>

                  <label className="flex flex-col gap-1 text-xs font-bold text-stone-600">
                    City
                    <input
                      type="text"
                      value={address.city}
                      onChange={e => setAddress(a => ({ ...a, city: e.target.value }))}
                      className="border border-stone-300 rounded-lg px-3 py-2 text-sm font-normal text-stone-900 focus:outline-none focus:border-amber-600"
                      placeholder="Springfield"
                    />
                  </label>

                  <label className="flex flex-col gap-1 text-xs font-bold text-stone-600">
                    ZIP / Postal code
                    <input
                      type="text"
                      value={address.zip}
                      onChange={e => setAddress(a => ({ ...a, zip: e.target.value }))}
                      className="border border-stone-300 rounded-lg px-3 py-2 text-sm font-normal text-stone-900 focus:outline-none focus:border-amber-600"
                      placeholder="94103"
                    />
                  </label>

                  <label className="flex flex-col gap-1 text-xs font-bold text-stone-600 sm:col-span-2">
                    Phone number
                    <input
                      type="tel"
                      value={address.phone}
                      onChange={e => setAddress(a => ({ ...a, phone: e.target.value }))}
                      className="border border-stone-300 rounded-lg px-3 py-2 text-sm font-normal text-stone-900 focus:outline-none focus:border-amber-600"
                      placeholder="(555) 123-4567"
                    />
                  </label>
                </div>

                <div className="flex justify-end mt-2">
                  <button
                    onClick={goNext}
                    disabled={!isAddressValid}
                    className="px-6 py-3 rounded-lg bg-amber-800 hover:bg-amber-900 disabled:bg-stone-200 disabled:text-stone-400 text-white font-bold text-sm uppercase tracking-wide transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {stepIndex === 1 && (
              <div className="flex flex-col gap-4">
                <h2 className="text-sm font-extrabold uppercase tracking-widest text-stone-500 mb-1">
                  How would you like to pay?
                </h2>

                <div className="flex flex-col gap-3">
                  {[
                    { key: 'card', label: 'Credit or Debit Card' },
                    { key: 'upi', label: 'UPI' },
                    { key: 'cod', label: 'Cash on Delivery' },
                  ].map(option => (
                    <label
                      key={option.key}
                      className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
                        payment.method === option.key
                          ? 'border-amber-600 bg-amber-50'
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment-method"
                        checked={payment.method === option.key}
                        onChange={() => setPayment(p => ({ ...p, method: option.key }))}
                        className="accent-amber-700"
                      />
                      <span className="text-sm font-bold text-stone-800">{option.label}</span>
                    </label>
                  ))}
                </div>

                {payment.method === 'card' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <label className="flex flex-col gap-1 text-xs font-bold text-stone-600 sm:col-span-2">
                      Card number
                      <input
                        type="text"
                        value={payment.cardNumber}
                        onChange={e => setPayment(p => ({ ...p, cardNumber: e.target.value }))}
                        className="border border-stone-300 rounded-lg px-3 py-2 text-sm font-normal text-stone-900 focus:outline-none focus:border-amber-600"
                        placeholder="1234 5678 9012 3456"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-xs font-bold text-stone-600 sm:col-span-2">
                      Name on card
                      <input
                        type="text"
                        value={payment.cardName}
                        onChange={e => setPayment(p => ({ ...p, cardName: e.target.value }))}
                        className="border border-stone-300 rounded-lg px-3 py-2 text-sm font-normal text-stone-900 focus:outline-none focus:border-amber-600"
                        placeholder="Jane Appleseed"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-xs font-bold text-stone-600">
                      Expiry date
                      <input
                        type="text"
                        value={payment.cardExpiry}
                        onChange={e => setPayment(p => ({ ...p, cardExpiry: e.target.value }))}
                        className="border border-stone-300 rounded-lg px-3 py-2 text-sm font-normal text-stone-900 focus:outline-none focus:border-amber-600"
                        placeholder="MM/YY"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-xs font-bold text-stone-600">
                      CVV
                      <input
                        type="text"
                        value={payment.cardCvv}
                        onChange={e => setPayment(p => ({ ...p, cardCvv: e.target.value }))}
                        className="border border-stone-300 rounded-lg px-3 py-2 text-sm font-normal text-stone-900 focus:outline-none focus:border-amber-600"
                        placeholder="123"
                      />
                    </label>
                  </div>
                )}

                <div className="flex justify-between mt-2">
                  <button
                    onClick={goBack}
                    className="px-6 py-3 rounded-lg border border-stone-300 text-stone-600 font-bold text-sm uppercase tracking-wide hover:bg-stone-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={goNext}
                    disabled={!isPaymentValid}
                    className="px-6 py-3 rounded-lg bg-amber-800 hover:bg-amber-900 disabled:bg-stone-200 disabled:text-stone-400 text-white font-bold text-sm uppercase tracking-wide transition-colors"
                  >
                    Continue to Review
                  </button>
                </div>
              </div>
            )}

            {stepIndex === 2 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-sm font-extrabold uppercase tracking-widest text-stone-500 mb-1">
                  Review your order
                </h2>

                <div className="flex items-start justify-between border-b border-stone-100 pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                      Delivery Address
                    </p>
                    <p className="text-sm text-stone-800 font-bold">{address.fullName}</p>
                    <p className="text-sm text-stone-600">{address.addressLine}</p>
                    <p className="text-sm text-stone-600">{address.city}, {address.zip}</p>
                    <p className="text-sm text-stone-600">{address.phone}</p>
                  </div>
                  <button
                    onClick={() => setStepIndex(0)}
                    className="text-xs font-bold text-amber-700 hover:underline shrink-0"
                  >
                    Edit
                  </button>
                </div>

                <div className="flex items-start justify-between border-b border-stone-100 pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                      Payment Method
                    </p>
                    <p className="text-sm text-stone-800 font-bold">
                      {payment.method === 'card' && `Card ending in ${payment.cardNumber.slice(-4).padStart(4, '•')}`}
                      {payment.method === 'upi' && 'UPI'}
                      {payment.method === 'cod' && 'Cash on Delivery'}
                    </p>
                  </div>
                  <button
                    onClick={() => setStepIndex(1)}
                    className="text-xs font-bold text-amber-700 hover:underline shrink-0"
                  >
                    Edit
                  </button>
                </div>

                <div className="flex justify-between mt-2">
                  <button
                    onClick={goBack}
                    className="px-6 py-3 rounded-lg border border-stone-300 text-stone-600 font-bold text-sm uppercase tracking-wide hover:bg-stone-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="px-8 py-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wide transition-colors"
                  >
                    Place your order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <OrderSummarySidebar items={items} subtotal={subtotal} delivery={delivery} tax={tax} total={total} />
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setShowCancelConfirm(true)}
          className="px-6 py-3 rounded-lg border-2 border-red-200 text-red-500 font-bold text-sm uppercase tracking-wide hover:bg-red-50 hover:border-red-300 transition-colors"
        >
          Cancel Order
        </button>
      </div>

      {showCancelConfirm && (
        <CancelOrderModal
          onConfirm={confirmCancelOrder}
          onDismiss={() => setShowCancelConfirm(false)}
        />
      )}
    </div>
  );
}
