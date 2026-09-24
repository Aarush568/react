import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Phone } from 'lucide-react';
import { treatments, getTreatmentById } from '../data/spa.js';
import NotFound from './NotFound.jsx';
import './Detail.css';
import './Listing.css';

function SpaDetail() {
  const { id } = useParams();
  const treatment = getTreatmentById(id);

  if (!treatment) return <NotFound />;

  const otherTreatments = treatments.filter((t) => t.id !== treatment.id).slice(0, 3);

  return (
    <>
      <section className="page-hero" style={{ '--hero-img': `url('${treatment.image}')` }}>
        <div className="container">
          <Link to="/spa" className="detail-back">
            <ArrowLeft size={16} /> Back to Spa &amp; Wellness
          </Link>
          <span className="eyebrow">{treatment.category}</span>
          <h1>{treatment.name}</h1>
          <p>{treatment.summary}</p>
          <div className="detail-hero-meta">
            <span><Clock size={16} /> {treatment.duration}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <h2>About this treatment</h2>
            <p>{treatment.description}</p>

            <h2>Benefits</h2>
            <ul className="detail-list">
              {treatment.benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 size={17} /> {benefit}
                </li>
              ))}
            </ul>
          </div>

          <aside className="detail-sidebar">
            <div className="detail-sidebar-card card">
              <div className="detail-sidebar-price">
                <strong>€{treatment.price}</strong>
                <span>per session</span>
              </div>
              <p className="detail-sidebar-note">Available for resort guests, by advance reservation.</p>

              <ul className="detail-sidebar-facts">
                <li><span>Category</span><span>{treatment.category}</span></li>
                <li><span>Duration</span><span>{treatment.duration}</span></li>
              </ul>

              <Link to="/contact" className="btn btn-primary">
                Book This Treatment <ArrowRight size={17} />
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
            <h2>More spa &amp; wellness treatments</h2>
          </div>
          <div className="listing-grid">
            {otherTreatments.map((t) => (
              <Link to={`/spa/${t.id}`} key={t.id} className="listing-card card">
                <div className="listing-card-image">
                  <img src={t.image} alt={t.name} />
                  <span className="listing-card-price">from €{t.price}</span>
                </div>
                <div className="listing-card-body">
                  <h3>{t.name}</h3>
                  <p>{t.summary}</p>
                  <span className="link-arrow">
                    View treatment <ArrowRight size={15} />
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

export default SpaDetail;
