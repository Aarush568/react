import { Link } from 'react-router-dom';
import { ArrowRight, CalendarClock, Phone } from 'lucide-react';
import { offers } from '../data/offers.js';
import './Listing.css';

function Offers() {
  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-img': "url('https://images.unsplash.com/photo-1580247331145-82d32dbbdcac?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="container">
          <span className="eyebrow">Special Offers</span>
          <h1>Seasonal packages, crafted for every kind of stay</h1>
          <p>
            From early-booking savings to romance packages, our current offers are designed to
            make your stay easier to plan.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="listing-intro">
            <div className="section-head">
              <span className="eyebrow">Current Packages</span>
              <h2>Available offers</h2>
            </div>
          </div>

          <div className="listing-grid listing-grid--2">
            {offers.map((offer) => (
              <Link to={`/offers/${offer.id}`} key={offer.id} className="listing-card card">
                <div className="listing-card-image">
                  <img src={offer.image} alt={offer.title} />
                  <span className="tag listing-card-tag">{offer.discount}</span>
                </div>
                <div className="listing-card-body">
                  <h3>{offer.title}</h3>
                  <div className="listing-card-meta">
                    <span><CalendarClock size={14} /> {offer.validity}</span>
                  </div>
                  <p>{offer.summary}</p>
                  <span className="link-arrow">
                    View offer details <ArrowRight size={15} />
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
            <h2>Ready to lock in a rate?</h2>
            <p>Our reservations team can apply any current offer to your booking.</p>
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

export default Offers;
