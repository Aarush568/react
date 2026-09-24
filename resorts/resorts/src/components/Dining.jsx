import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shirt, Phone } from 'lucide-react';
import { venues } from '../data/dining.js';
import './Listing.css';

function Dining() {
  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-img': "url('https://images.unsplash.com/photo-1528447374240-3af10805243d?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="container">
          <span className="eyebrow">Dining</span>
          <h1>Four venues, led by one culinary team</h1>
          <p>
            From cliffside fine dining to poolside flatbreads, every plate at Azzurra Bay draws
            on Santorini's produce, wine and coastline.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="listing-intro">
            <div className="section-head">
              <span className="eyebrow">Restaurants &amp; Bars</span>
              <h2>Where to eat &amp; drink</h2>
            </div>
          </div>

          <div className="listing-grid listing-grid--2">
            {venues.map((venue) => (
              <Link to={`/dining/${venue.id}`} key={venue.id} className="listing-card card">
                <div className="listing-card-image">
                  <img src={venue.image} alt={venue.name} />
                  <span className="tag listing-card-tag">{venue.cuisine}</span>
                </div>
                <div className="listing-card-body">
                  <h3>{venue.name}</h3>
                  <div className="listing-card-meta">
                    <span><Clock size={14} /> {venue.hours}</span>
                    <span><Shirt size={14} /> {venue.dressCode}</span>
                  </div>
                  <p>{venue.summary}</p>
                  <span className="link-arrow">
                    View menu &amp; details <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Reserve your table</h2>
            <p>Sunset seating fills quickly — we recommend booking dinner in advance.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+302286000000" className="btn btn-outline">
              <Phone size={18} /> Call +30 2286 000 000
            </a>
            <Link to="/contact" className="btn btn-primary">
              Request a Reservation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dining;
