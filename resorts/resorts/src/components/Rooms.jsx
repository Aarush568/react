import { Link } from 'react-router-dom';
import { ArrowRight, Users2, BedDouble, Maximize2, Phone } from 'lucide-react';
import { rooms } from '../data/rooms.js';
import './Listing.css';

function Rooms() {
  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-img': "url('https://images.unsplash.com/photo-1600760380065-2fcdc9e73007?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="container">
          <span className="eyebrow">Rooms &amp; Suites</span>
          <h1>Every category, one uninterrupted view</h1>
          <p>
            From garden-view rooms to a three-bedroom cliffside villa, each of our 38 keys is
            built into the caldera with the view as the starting point.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="listing-intro">
            <div className="section-head">
              <span className="eyebrow">Choose Your Stay</span>
              <h2>5 room &amp; suite categories</h2>
            </div>
          </div>

          <div className="listing-grid">
            {rooms.map((room) => (
              <Link to={`/rooms/${room.id}`} key={room.id} className="listing-card card">
                <div className="listing-card-image">
                  <img src={room.image} alt={room.name} />
                  <span className="listing-card-price">from €{room.price}/night</span>
                </div>
                <div className="listing-card-body">
                  <h3>{room.name}</h3>
                  <div className="listing-card-meta">
                    <span><Maximize2 size={14} /> {room.size}</span>
                    <span><Users2 size={14} /> {room.occupancy}</span>
                    <span><BedDouble size={14} /> {room.bedType}</span>
                  </div>
                  <p>{room.summary}</p>
                  <span className="link-arrow">
                    View room details <ArrowRight size={15} />
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
            <h2>Not sure which room is right for you?</h2>
            <p>Our reservations team can recommend the best category for your dates and group.</p>
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

export default Rooms;
