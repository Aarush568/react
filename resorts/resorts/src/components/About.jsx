import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users2, Award, Phone, HeartHandshake, Compass } from 'lucide-react';
import './About.css';

const milestones = [
  { year: '2009', title: 'The land is acquired', text: 'A single-storey plot on the caldera rim is purchased with a view no wider building could match.' },
  { year: '2012', title: 'Azzurra Bay opens', text: 'The resort opens with 14 rooms and one restaurant, built by local Santorini craftsmen.' },
  { year: '2017', title: 'Spa & infinity pool added', text: 'A dedicated wellness wing and cliffside infinity pool are added, doubling guest capacity.' },
  { year: '2023', title: 'Presidential Villa completed', text: 'Our three-bedroom cliffside villa opens, becoming the resort\'s most requested address.' },
  { year: '2026', title: 'Rated #1 in Santorini', text: 'Azzurra Bay is named the island\'s top-rated resort by our guests for the third year running.' },
];

const values = [
  {
    icon: Leaf,
    title: 'Rooted in the Island',
    text: 'Local stone, olive wood and Cycladic plasterwork throughout — built by the same families who have shaped Oia for generations.',
  },
  {
    icon: Users2,
    title: 'Genuinely Personal Service',
    text: 'With one staff member for every two guests, our team learns your preferences by your second day, not your second stay.',
  },
  {
    icon: HeartHandshake,
    title: 'Community First',
    text: 'We source produce from island farms and partner with local boat operators, guides and winemakers for every excursion we offer.',
  },
  {
    icon: Compass,
    title: 'Quietly Adventurous',
    text: 'Beyond the pool, our concierge team can arrange anything from a private dive to a helicopter transfer between islands.',
  },
];

function About() {
  return (
    <>
      <section className="page-hero" style={{ '--hero-img': "url('https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1920&auto=format&fit=crop')" }}>
        <div className="container">
          <span className="eyebrow">Our Story</span>
          <h1>Built for the view, shaped by the island</h1>
          <p>
            Azzurra Bay began as a single idea in 2009 — a resort where every room would frame
            the caldera, and every detail would reflect Santorini itself.
          </p>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container about-intro-grid">
          <div className="about-intro-visual">
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=900&auto=format&fit=crop"
              alt=""
            />
          </div>
          <div>
            <span className="eyebrow">Welcome</span>
            <h2>A family-run resort, built by island hands</h2>
            <p>
              Azzurra Bay is owned and operated by the Papadakis family, who have lived on
              Santorini for four generations. What began as fourteen rooms carved into the
              cliffside in 2012 has grown into a 38-key resort — but the goal has never changed:
              to give every guest a view, a welcome and a meal they remember long after they've
              left the island.
            </p>
            <p>
              Every member of our team, from the front desk to the dive instructors, either
              grew up on Santorini or has made it home. That local knowledge shapes everything
              from our wine list to the excursions we recommend.
            </p>
            <Link to="/contact" className="link-arrow">
              Plan your stay with us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt values-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">What We Stand For</span>
            <h2>The values behind every stay</h2>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <div className="value-card" key={title}>
                <span className="icon-badge icon-badge--accent">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our Journey</span>
            <h2>Milestones since 2009</h2>
          </div>
          <ol className="timeline">
            {milestones.map((m) => (
              <li key={m.year} className="timeline-item">
                <span className="timeline-year">{m.year}</span>
                <div className="timeline-content">
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt awards-section">
        <div className="container awards-inner">
          <span className="icon-badge icon-badge--accent">
            <Award size={26} />
          </span>
          <div>
            <span className="eyebrow">Recognition</span>
            <h2>Trusted by travellers and critics alike</h2>
            <p>
              Azzurra Bay has been named a top-25 hotel in Greece by international travel press
              for four consecutive years, and holds a 4.9/5 average across independent guest
              review platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Come see the caldera for yourself</h2>
            <p>Our reservations team is on hand to help you plan the right stay.</p>
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

export default About;
