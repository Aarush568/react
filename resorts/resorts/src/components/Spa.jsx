import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Phone } from 'lucide-react';
import { treatments } from '../data/spa.js';
import './Listing.css';

function Spa() {
  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-img': "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="container">
          <span className="eyebrow">Spa &amp; Wellness</span>
          <h1>A wellness wing built into the cliffside</h1>
          <p>
            Massage, ritual and fitness experiences designed around the caldera view, led by our
            resident therapists and trainers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="listing-intro">
            <div className="section-head">
              <span className="eyebrow">Treatments &amp; Facilities</span>
              <h2>Choose your treatment</h2>
            </div>
          </div>

          <div className="listing-grid">
            {treatments.map((treatment) => (
              <Link to={`/spa/${treatment.id}`} key={treatment.id} className="listing-card card">
                <div className="listing-card-image">
                  <img src={treatment.image} alt={treatment.name} />
                  <span className="listing-card-price">from €{treatment.price}</span>
                </div>
                <div className="listing-card-body">
                  <h3>{treatment.name}</h3>
                  <div className="listing-card-meta">
                    <span className="tag">{treatment.category}</span>
                    <span><Clock size={14} /> {treatment.duration}</span>
                  </div>
                  <p>{treatment.summary}</p>
                  <span className="link-arrow">
                    View treatment <ArrowRight size={15} />
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
            <h2>Reserve your spa treatment</h2>
            <p>Appointments are available for hotel guests and can be booked in advance.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+302286000000" className="btn btn-outline">
              <Phone size={18} /> Call +30 2286 000 000
            </a>
            <Link to="/contact" className="btn btn-primary">
              Book a Treatment <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Spa;
