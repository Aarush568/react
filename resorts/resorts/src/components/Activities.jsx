import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users2, Phone } from 'lucide-react';
import { activities } from '../data/activities.js';
import './Listing.css';

function Activities() {
  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-img': "url('https://images.unsplash.com/photo-1599823855655-990696275157?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="container">
          <span className="eyebrow">Activities &amp; Excursions</span>
          <h1>The island, curated by our concierge</h1>
          <p>
            From sunset catamaran cruises to guided caldera hikes, our concierge team arranges
            every excursion so you don't have to.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="listing-intro">
            <div className="section-head">
              <span className="eyebrow">Experiences</span>
              <h2>Choose your excursion</h2>
            </div>
          </div>

          <div className="listing-grid">
            {activities.map((activity) => (
              <Link to={`/activities/${activity.id}`} key={activity.id} className="listing-card card">
                <div className="listing-card-image">
                  <img src={activity.image} alt={activity.name} />
                  <span className="tag listing-card-tag">{activity.category}</span>
                </div>
                <div className="listing-card-body">
                  <h3>{activity.name}</h3>
                  <div className="listing-card-meta">
                    <span><Clock size={14} /> {activity.duration}</span>
                    <span><Users2 size={14} /> {activity.groupSize}</span>
                  </div>
                  <p>{activity.summary}</p>
                  <span className="link-arrow">
                    View details <ArrowRight size={15} />
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
            <h2>Let us build your itinerary</h2>
            <p>Our concierge team can bundle excursions around your stay, at no extra fee.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+302286000000" className="btn btn-outline">
              <Phone size={18} /> Call +30 2286 000 000
            </a>
            <Link to="/contact" className="btn btn-primary">
              Request an Itinerary <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Activities;
