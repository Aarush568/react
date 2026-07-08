import { createContext, useContext } from 'react';

export const LikedContext = createContext({
  likedIds: new Set(),
  toggleLiked: () => {},
  isLiked: () => false,
  clearAll: () => {},
});

export const useLiked = () => useContext(LikedContext);
