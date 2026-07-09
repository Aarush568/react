import React from 'react';
import { Link } from 'react-router-dom';
import { useLiked } from '../context/LikedContext';
import { slugify } from '../utils/slug';

export default function CakeCard({ id, title, badge, mainText, price, color, image, actionLabel }) {
  const { toggleLiked, isLiked } = useLiked();
  const liked = isLiked(title);

  return (
    <div
      id={id}
      className={`rounded-xl border-2 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden h-full scroll-mt-24 ${
        liked ? 'border-teal-400 bg-teal-50' : 'border-stone-200 bg-white'
      }`}
    >
      {/* Image placeholder with badge */}
      <div
        className="w-full h-36 relative shrink-0 flex items-center justify-center"
        style={{ backgroundColor: color || '#f5e6d3' }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 bg-white/90 rounded text-amber-900 border border-stone-200">
          {badge}
        </span>
        <button
          onClick={() => toggleLiked(title)}
          className="absolute top-2 right-2 text-lg leading-none"
          aria-label={liked ? 'Unlike' : 'Like'}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Text body */}
      <div className="p-4 flex flex-col justify-between flex-1 gap-3">
        <div>
          <h3 className="font-serif text-sm font-bold text-stone-900 mb-1 tracking-wide uppercase">
            {title}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            {mainText}
          </p>
        </div>

        {/* Price + action row */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
            {price}
          </span>
          <Link
            to={`/cake/${slugify(title)}`}
            className="text-[9px] uppercase tracking-wider font-extrabold text-stone-500 hover:text-amber-800 transition-colors"
          >
            {actionLabel || 'Select'} →
          </Link>
        </div>
      </div>
    </div>
  );
}
