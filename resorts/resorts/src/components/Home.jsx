import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarCheck,
  Phone,
  Sparkles,
  UtensilsCrossed,
  Waves,
  MapPinned,
  Star,
  Sailboat,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { rooms } from '../data/rooms.js';
import { venues } from '../data/dining.js';
import { activities } from '../data/activities.js';
import './Home.css';

const stats = [
  { icon: Award, value: '#1', label: 'Rated Resort in Santorini, 2026' },
  { icon: Waves, value: '38', label: 'Rooms, suites & private villas' },
  { icon: UtensilsCrossed, value: '4', label: 'Signature restaurants & bars' },
  { icon: Star, value: '4.9/5', label: 'Average guest rating' },
];

const features = [
  {
    icon: ShieldCheck,
    title: 'Cliffside Privacy',
    description: 'Every room and suite is built into the caldera cliffside, with no view interrupted by a neighbouring balcony.',
  },
  {
    icon: Sparkles,
    title: 'Full-Service Spa',
    description: 'A dedicated wellness team offers massage, hammam rituals and private fitness sessions with a sea view.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Chef-Driven Dining',
    description: 'Four distinct venues led by Executive Chef Nikos Vlachos, from beachside bites to candlelit tasting menus.',
  },
  {
    icon: Sailboat,
    title: 'Curated Excursions',
    description: 'Private catamaran cruises, vineyard tours and guided hikes, arranged by our in-house concierge team.',
  },
];

const testimonials = [
  {
    quote: 'The view from our suite\'s plunge pool was something out of a dream. Every member of staff knew our names by day two.',
    author: 'Helena & Marcus R.',
    detail: 'Junior Suite, 5-night stay',
  },
  {
    quote: 'We booked the Romance Package for our anniversary and it exceeded every expectation — the sunset cruise alone was worth the trip.',
    author: 'Priya S.',
    detail: 'Honeymoon Pool Suite',
  },
  {
    quote: 'Ouzo Terrace is one of the best meals we\'ve had anywhere, not just in Greece. Ask for the sunset seating.',
    author: 'Daniel K.',
    detail: 'Deluxe Sea View Room',
  },
];

const featuredRooms = rooms.slice(1, 4);
const featuredVenues = venues.slice(0, 3);
const featuredActivities = activities.slice(0, 3);

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Santorini, Greece</span>
          <h1>A cliffside escape above the Aegean caldera</h1>
          <p className="hero-lead">
            Azzurra Bay pairs private cliffside suites, chef-driven dining and a full-service spa
            with some of the most photographed views in the Mediterranean.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              <CalendarCheck size={18} /> Check Availability
            </Link>
            <a href="tel:+302286000000" className="btn btn-outline">
              <Phone size={18} /> +30 2286 000 000
            </a>
          </div>
          <div className="hero-stats">
            {stats.map(({ icon: Icon, value, label }) => (
              <div className="hero-stat" key={label}>
                <Icon size={22} />
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="container intro-grid">
          <div className="intro-visual" aria-hidden="true">
            <img
              className="intro-image"
              src="https://images.unsplash.com/photo-1580502304784-8985b7eb7260?q=80&w=900&auto=format&fit=crop"
              alt=""
            />
          </div>
          <div className="intro-copy">
            <span className="eyebrow">Welcome to Azzurra Bay</span>
            <h2>Built into the cliffside, designed around the view</h2>
            <p>
              Since opening above Oia's caldera, Azzurra Bay has been shaped by one simple idea:
              nothing should stand between our guests and the Aegean. Every suite, restaurant
              terrace and treatment room was positioned first for its view, then built around it
              with Cycladic architecture, local materials and warm, attentive service.
            </p>
            <p>
              Whether you're planning a honeymoon, a family celebration or a quiet week of rest,
              our team curates the stay around you — from private excursions to in-suite dining.
            </p>
            <Link to="/about" className="link-arrow">
              Discover our story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt rooms-teaser">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Rooms &amp; Suites</span>
            <h2>Every room frames the caldera</h2>
            <p>From garden-view rooms to a three-bedroom cliffside villa with a private chef.</p>
          </div>
          <div className="room-grid">
            {featuredRooms.map((room) => (
              <Link to={`/rooms/${room.id}`} key={room.id} className="room-card card">
                <div className="room-card-image">
                  <img src={room.image} alt={room.name} />
                  <span className="room-card-price">from €{room.price}/night</span>
                </div>
                <div className="room-card-body">
                  <h3>{room.name}</h3>
                  <p>{room.summary}</p>
                  <span className="link-arrow">
                    View room <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="teaser-cta">
            <Link to="/rooms" className="btn btn-primary-alt">
              View All Rooms &amp; Suites <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Why Azzurra Bay</span>
            <h2>The details our guests remember</h2>
          </div>
          <div className="features-grid">
            {features.map(({ icon: Icon, title, description }) => (
              <div className="feature-card" key={title}>
                <span className="icon-badge icon-badge--accent">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt dining-teaser">
        <div className="container dining-teaser-grid">
          <div className="section-head">
            <span className="eyebrow">Dining</span>
            <h2>Four venues, one view</h2>
            <p>
              From cliffside fine dining to poolside flatbreads, every venue is led by our
              in-house culinary team.
            </p>
            <Link to="/dining" className="btn btn-primary-alt">
              Explore Dining <ArrowRight size={17} />
            </Link>
          </div>
          <div className="dining-teaser-list">
            {featuredVenues.map((venue) => (
              <Link to={`/dining/${venue.id}`} key={venue.id} className="dining-teaser-card">
                <img src={venue.image} alt={venue.name} />
                <div>
                  <h3>{venue.name}</h3>
                  <p>{venue.cuisine}</p>
                </div>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section activities-teaser">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Activities &amp; Excursions</span>
            <h2>Curated experiences beyond the resort</h2>
          </div>
          <div className="activity-grid">
            {featuredActivities.map((activity) => (
              <Link to={`/activities/${activity.id}`} key={activity.id} className="activity-card card">
                <div className="activity-card-image">
                  <img src={activity.image} alt={activity.name} />
                  <span className="tag activity-tag">{activity.category}</span>
                </div>
                <div className="activity-card-body">
                  <h3>{activity.name}</h3>
                  <p>{activity.summary}</p>
                  <span className="link-arrow">
                    Learn more <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="teaser-cta">
            <Link to="/activities" className="btn btn-primary-alt">
              View All Activities <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt testimonials">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Guest Stories</span>
            <h2>What guests say about Azzurra Bay</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card card" key={t.author}>
                <div className="testimonial-stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <strong>{t.author}</strong>
                  <span>{t.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section offers-teaser">
        <div className="container offers-teaser-inner">
          <span className="icon-badge icon-badge--accent">
            <MapPinned size={24} />
          </span>
          <div>
            <span className="eyebrow">Special Offers</span>
            <h2>Save on your next stay</h2>
            <p>Seasonal packages for early bookings, romantic getaways and extended stays.</p>
          </div>
          <Link to="/offers" className="btn btn-primary-alt">
            View Offers <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Ready to see the caldera for yourself?</h2>
            <p>Our reservations team can help you choose the right room and build your itinerary.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+302286000000" className="btn btn-outline">
              <Phone size={18} /> Call +30 2286 000 000
            </a>
            <Link to="/contact" className="btn btn-primary">
              Check Availability <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
