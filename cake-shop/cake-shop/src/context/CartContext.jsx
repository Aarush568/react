import { createContext, useContext } from 'react';

export const CartContext = createContext({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const useCart = () => useContext(CartContext);
