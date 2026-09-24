import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Users2, Phone } from 'lucide-react';
import { activities, getActivityById } from '../data/activities.js';
import NotFound from './NotFound.jsx';
import './Detail.css';
import './Listing.css';

function ActivityDetail() {
  const { id } = useParams();
  const activity = getActivityById(id);

  if (!activity) return <NotFound />;

  const otherActivities = activities.filter((a) => a.id !== activity.id).slice(0, 3);

  return (
    <>
      <section className="page-hero" style={{ '--hero-img': `url('${activity.image}')` }}>
        <div className="container">
          <Link to="/activities" className="detail-back">
            <ArrowLeft size={16} /> Back to Activities
          </Link>
          <span className="eyebrow">{activity.category}</span>
          <h1>{activity.name}</h1>
          <p>{activity.summary}</p>
          <div className="detail-hero-meta">
            <span><Clock size={16} /> {activity.duration}</span>
            <span><Users2 size={16} /> {activity.groupSize}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <h2>About this experience</h2>
            <p>{activity.description}</p>

            <h2>What's included</h2>
            <ul className="detail-list">
              {activity.includes.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="detail-sidebar">
            <div className="detail-sidebar-card card">
              <div className="detail-sidebar-price">
                <strong>€{activity.price}</strong>
                <span>per guest</span>
              </div>
              <p className="detail-sidebar-note">Arranged by our concierge team, subject to availability and weather.</p>

              <ul className="detail-sidebar-facts">
                <li><span>Category</span><span>{activity.category}</span></li>
                <li><span>Duration</span><span>{activity.duration}</span></li>
                <li><span>Group size</span><span>{activity.groupSize}</span></li>
              </ul>

              <Link to="/contact" className="btn btn-primary">
                Request This Activity <ArrowRight size={17} />
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
            <h2>More activities &amp; excursions</h2>
          </div>
          <div className="listing-grid">
            {otherActivities.map((a) => (
              <Link to={`/activities/${a.id}`} key={a.id} className="listing-card card">
                <div className="listing-card-image">
                  <img src={a.image} alt={a.name} />
                  <span className="tag listing-card-tag">{a.category}</span>
                </div>
                <div className="listing-card-body">
                  <h3>{a.name}</h3>
                  <p>{a.summary}</p>
                  <span className="link-arrow">
                    View details <ArrowRight size={15} />
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

export default ActivityDetail;
