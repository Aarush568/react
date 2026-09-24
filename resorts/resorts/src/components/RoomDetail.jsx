import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Users2, BedDouble, Maximize2, Eye, Phone } from 'lucide-react';
import { rooms, getRoomById } from '../data/rooms.js';
import NotFound from './NotFound.jsx';
import './Detail.css';
import './Listing.css';

function RoomDetail() {
  const { id } = useParams();
  const room = getRoomById(id);

  if (!room) return <NotFound />;

  const otherRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <>
      <section className="page-hero" style={{ '--hero-img': `url('${room.image}')` }}>
        <div className="container">
          <Link to="/rooms" className="detail-back">
            <ArrowLeft size={16} /> Back to Rooms &amp; Suites
          </Link>
          <span className="eyebrow">{room.view}</span>
          <h1>{room.name}</h1>
          <p>{room.tagline}</p>
          <div className="detail-hero-meta">
            <span><Maximize2 size={16} /> {room.size}</span>
            <span><Users2 size={16} /> {room.occupancy}</span>
            <span><BedDouble size={16} /> {room.bedType}</span>
            <span><Eye size={16} /> {room.view}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <h2>About this room</h2>
            <p>{room.description}</p>

            <div className="detail-gallery">
              {room.gallery.map((src) => (
                <img key={src} src={src} alt={room.name} />
              ))}
            </div>

            <h2>Room amenities</h2>
            <ul className="detail-list">
              {room.amenities.map((amenity) => (
                <li key={amenity}>
                  <CheckCircle2 size={17} /> {amenity}
                </li>
              ))}
            </ul>
          </div>

          <aside className="detail-sidebar">
            <div className="detail-sidebar-card card">
              <div className="detail-sidebar-price">
                <strong>€{room.price}</strong>
                <span>/ night, before taxes</span>
              </div>
              <p className="detail-sidebar-note">Free cancellation available on most rate plans.</p>

              <ul className="detail-sidebar-facts">
                <li><span>Room size</span><span>{room.size}</span></li>
                <li><span>Occupancy</span><span>{room.occupancy}</span></li>
                <li><span>Bed type</span><span>{room.bedType}</span></li>
                <li><span>View</span><span>{room.view}</span></li>
              </ul>

              <Link to="/contact" className="btn btn-primary">
                Check Availability <ArrowRight size={17} />
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
            <h2>Other rooms &amp; suites</h2>
          </div>
          <div className="listing-grid">
            {otherRooms.map((r) => (
              <Link to={`/rooms/${r.id}`} key={r.id} className="listing-card card">
                <div className="listing-card-image">
                  <img src={r.image} alt={r.name} />
                  <span className="listing-card-price">from €{r.price}/night</span>
                </div>
                <div className="listing-card-body">
                  <h3>{r.name}</h3>
                  <p>{r.summary}</p>
                  <span className="link-arrow">
                    View room details <ArrowRight size={15} />
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

export default RoomDetail;
