import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, CalendarClock, Phone } from 'lucide-react';
import { offers, getOfferById } from '../data/offers.js';
import NotFound from './NotFound.jsx';
import './Detail.css';
import './Listing.css';

function OfferDetail() {
  const { id } = useParams();
  const offer = getOfferById(id);

  if (!offer) return <NotFound />;

  const otherOffers = offers.filter((o) => o.id !== offer.id).slice(0, 3);

  return (
    <>
      <section className="page-hero" style={{ '--hero-img': `url('${offer.image}')` }}>
        <div className="container">
          <Link to="/offers" className="detail-back">
            <ArrowLeft size={16} /> Back to Offers
          </Link>
          <span className="eyebrow">{offer.discount}</span>
          <h1>{offer.title}</h1>
          <p>{offer.summary}</p>
          <div className="detail-hero-meta">
            <span><CalendarClock size={16} /> {offer.validity}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <h2>About this offer</h2>
            <p>{offer.description}</p>

            <h2>What's included</h2>
            <ul className="detail-list">
              {offer.includes.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="detail-sidebar">
            <div className="detail-sidebar-card card">
              <div className="detail-sidebar-price">
                <strong>{offer.discount}</strong>
              </div>
              <p className="detail-sidebar-note">{offer.validity}</p>

              <ul className="detail-sidebar-facts">
                <li><span>Minimum stay</span><span>{offer.minStay}</span></li>
                <li><span>Validity</span><span>{offer.validity}</span></li>
              </ul>

              <Link to="/contact" className="btn btn-primary">
                Request This Offer <ArrowRight size={17} />
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
            <h2>More offers</h2>
          </div>
          <div className="listing-grid listing-grid--2">
            {otherOffers.map((o) => (
              <Link to={`/offers/${o.id}`} key={o.id} className="listing-card card">
                <div className="listing-card-image">
                  <img src={o.image} alt={o.title} />
                  <span className="tag listing-card-tag">{o.discount}</span>
                </div>
                <div className="listing-card-body">
                  <h3>{o.title}</h3>
                  <p>{o.summary}</p>
                  <span className="link-arrow">
                    View offer details <ArrowRight size={15} />
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

export default OfferDetail;
