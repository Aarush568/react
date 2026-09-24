import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, UtensilsCrossed, Clock, Shirt, CalendarDays, Phone } from 'lucide-react';
import { venues, getVenueById } from '../data/dining.js';
import NotFound from './NotFound.jsx';
import './Detail.css';
import './Listing.css';

function DiningDetail() {
  const { id } = useParams();
  const venue = getVenueById(id);

  if (!venue) return <NotFound />;

  const otherVenues = venues.filter((v) => v.id !== venue.id).slice(0, 3);

  return (
    <>
      <section className="page-hero" style={{ '--hero-img': `url('${venue.image}')` }}>
        <div className="container">
          <Link to="/dining" className="detail-back">
            <ArrowLeft size={16} /> Back to Dining
          </Link>
          <span className="eyebrow">{venue.cuisine}</span>
          <h1>{venue.name}</h1>
          <p>{venue.summary}</p>
          <div className="detail-hero-meta">
            <span><Clock size={16} /> {venue.hours}</span>
            <span><Shirt size={16} /> {venue.dressCode}</span>
            <span><CalendarDays size={16} /> {venue.mealPeriods}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <h2>About {venue.name}</h2>
            <p>{venue.description}</p>

            <div className="detail-gallery">
              {venue.gallery.map((src) => (
                <img key={src} src={src} alt={venue.name} />
              ))}
            </div>

            <h2>Menu highlights</h2>
            <ul className="detail-list">
              {venue.menuHighlights.map((item) => (
                <li key={item}>
                  <UtensilsCrossed size={17} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="detail-sidebar">
            <div className="detail-sidebar-card card">
              <h3>Plan your visit</h3>
              <ul className="detail-sidebar-facts">
                <li><span>Cuisine</span><span>{venue.cuisine}</span></li>
                <li><span>Hours</span><span>{venue.hours}</span></li>
                <li><span>Serving</span><span>{venue.mealPeriods}</span></li>
                <li><span>Dress code</span><span>{venue.dressCode}</span></li>
              </ul>

              <Link to="/contact" className="btn btn-primary">
                Request a Reservation <ArrowRight size={17} />
              </Link>
              <div className="detail-sidebar-phone">
                <Phone size={15} /> +30 2286 000 000
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--alt related-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Continue Exploring</span>
            <h2>More dining at Azzurra Bay</h2>
          </div>
          <div className="listing-grid listing-grid--2">
            {otherVenues.map((v) => (
              <Link to={`/dining/${v.id}`} key={v.id} className="listing-card card">
                <div className="listing-card-image">
                  <img src={v.image} alt={v.name} />
                  <span className="tag listing-card-tag">{v.cuisine}</span>
                </div>
                <div className="listing-card-body">
                  <h3>{v.name}</h3>
                  <p>{v.summary}</p>
                  <span className="link-arrow">
                    View menu &amp; details <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DiningDetail;
