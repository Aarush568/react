import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarClock,
  Phone,
  ShieldCheck,
  Users2,
  Award,
  Clock3,
  Stethoscope,
  BedDouble,
  Building2,
} from 'lucide-react';
import { departments } from '../data/departments.js';
import { news } from '../data/news.js';
import './Home.css';

const stats = [
  { icon: Building2, value: '60+', label: 'Years serving our community' },
  { icon: BedDouble, value: '420', label: 'Inpatient beds' },
  { icon: Users2, value: '180+', label: 'Specialist physicians' },
  { icon: Clock3, value: '24/7', label: 'Emergency care' },
];

const features = [
  {
    icon: ShieldCheck,
    title: 'Accredited Quality of Care',
    description: 'Independently certified across every major department, meeting the highest clinical safety standards.',
  },
  {
    icon: Stethoscope,
    title: 'Specialist-Led Treatment',
    description: 'Every patient is treated directly by experienced consultants, not just supervised by them.',
  },
  {
    icon: Award,
    title: 'Modern Medical Technology',
    description: 'From hybrid operating rooms to advanced imaging, we invest continuously in leading-edge equipment.',
  },
  {
    icon: Users2,
    title: 'Patient-Centered Approach',
    description: 'Compassionate, individualized care that keeps you and your family informed at every step.',
  },
];

const featuredDepartments = departments.slice(0, 6);

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Trusted Community Hospital</span>
            <h1>Expert care, close to home — whenever you need it.</h1>
            <p className="hero-lead">
              Lindenpark General Hospital brings together specialist physicians, modern
              technology and compassionate staff to care for you and your family, from
              routine checkups to complex emergencies.
            </p>
            <div className="hero-actions">
              <Link to="/appointment" className="btn btn-primary">
                <CalendarClock size={18} /> Book an Appointment
              </Link>
              <a href="tel:+11234567000" className="btn btn-outline">
                <Phone size={18} /> Emergency: +1 (123) 456-7000
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-card card-1">
              <ShieldCheck size={22} />
              <div>
                <strong>Certified Care</strong>
                <span>Nationally accredited quality</span>
              </div>
            </div>
            <div className="hero-visual-card card-2">
              <Clock3 size={22} />
              <div>
                <strong>24/7 Emergency</strong>
                <span>Always open, always ready</span>
              </div>
            </div>
            <div className="hero-graphic">
              <img class="hero-image" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Hospital-de-Bellvitge.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="Lindenpark Hospital exterior view" />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map(({ icon: Icon, value, label }) => (
            <div className="stat" key={label}>
              <Icon size={26} />
              <div>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section intro">
        <div className="container intro-grid">
          <div className="intro-visual" aria-hidden="true">
            <div className="intro-visual-block">
              <img class="intro-image" src="https://cdn.ca.emap.com/wp-content/uploads/sites/8/2026/01/Reds10-NHP-Prototype-credit-Steph-Simmons-Photos.webp" alt="Lindenpark Hospital interior view"/>
            </div>
          </div>
          <div className="intro-copy">
            <span className="eyebrow">Welcome to Lindenpark</span>
            <h2>A full-service hospital built around you</h2>
            <p>
              For over six decades, Lindenpark General Hospital has provided the Springfield
              region with comprehensive medical care — from routine outpatient visits to
              advanced surgical and intensive care services. Our multidisciplinary teams work
              together across twelve medical fields to deliver coordinated, evidence-based
              treatment for every stage of life.
            </p>
            <p>
              Whether you're planning ahead, considering a career in medicine, or facing an
              urgent health concern, we're here with the expertise and compassion you deserve.
            </p>
            <Link to="/about" className="link-arrow">
              Learn more about our hospital <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt departments-teaser">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Medical Fields</span>
            <h2>Specialist care across every discipline</h2>
            <p>Our physicians cover twelve medical fields under one roof, working together on your care plan.</p>
          </div>
          <div className="dept-grid">
            {featuredDepartments.map(({ id, icon: Icon, name, summary }) => (
              <Link to="/fields" key={id} className="dept-card card">
                <span className="icon-badge">
                  <Icon size={22} />
                </span>
                <h3>{name}</h3>
                <p>{summary}</p>
              </Link>
            ))}
          </div>
          <div className="teaser-cta">
            <Link to="/fields" className="btn btn-primary-alt">
              View All Medical Fields <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Why Choose Lindenpark</span>
            <h2>Care you can trust, every step of the way</h2>
          </div>
          <div className="features-grid">
            {features.map(({ icon: Icon, title, description }) => (
              <div className="feature-card" key={title}>
                <span className="icon-badge icon-badge--accent">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt news-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Latest Updates</span>
            <h2>News from our hospital</h2>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card card" key={item.title}>
                <div className="news-meta">
                  <span className="tag">{item.category}</span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Ready to schedule your visit?</h2>
            <p>
              Our patient coordination team can help you find the right specialist and the
              earliest available appointment.
            </p>
          </div>
          <div className="cta-actions">
            <a href="tel:+11234567000" className="btn btn-primary">
              <Phone size={18} /> Call +1 (123) 456-7000
            </a>
            <Link to="/appointment" className="btn btn-outline">
              Book Online <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
