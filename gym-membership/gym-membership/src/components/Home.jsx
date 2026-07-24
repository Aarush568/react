import { Link } from 'react-router-dom'
import {
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
  DumbbellIcon,
  HeartPulseIcon,
  FlameIcon,
} from './Icons'
import './Home.css'

const STATS = [
  { value: '500+', label: 'Active members' },
  { value: '20+', label: 'Weekly classes' },
  { value: '24/7', label: 'Studio access' },
  { value: '15', label: 'Certified coaches' },
]

const FEATURES = [
  {
    icon: ClockIcon,
    title: '24/7 Access',
    text: 'Train on your schedule. Tap in with your member key any hour, any day.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Certified Coaches',
    text: 'Every trainer on the floor is certified and genuinely invested in your form.',
  },
  {
    icon: DumbbellIcon,
    title: 'Modern Equipment',
    text: 'Fresh free-weight racks, machines and turf, maintained and upgraded yearly.',
  },
  {
    icon: UsersIcon,
    title: 'Group Energy',
    text: 'Classes built to push you further than you would go training alone.',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow">
            <FlameIcon width={16} height={16} /> PulseFit Training Studio
          </span>
          <h1>Train harder. Live stronger.</h1>
          <p className="hero__lead">
            One studio, every tool you need — free weights, functional training,
            group classes and coaching that keeps you accountable.
          </p>
          <div className="hero__actions">
            <Link to="/membership" className="btn btn-primary">Join Now</Link>
            <Link to="/courses" className="btn btn-outline hero__outline">Explore Courses</Link>
          </div>
        </div>

        <div className="container hero__stats">
          {STATS.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Why PulseFit</span>
            <h2>Everything you need to keep showing up</h2>
          </div>

          <div className="feature-grid">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div className="feature-card" key={title}>
                <div className="feature-card__icon">
                  <Icon width={22} height={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section preview">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Get to know the studio</span>
            <h2>Two ways to get started</h2>
          </div>

          <div className="preview-grid">
            <Link to="/training-areas" className="preview-card">
              <DumbbellIcon width={26} height={26} />
              <h3>Training Areas</h3>
              <p>
                Free weights, cardio deck, functional zone and a dedicated recovery
                space — see where you'll spend your time.
              </p>
              <span className="preview-card__link">See training areas →</span>
            </Link>

            <Link to="/courses" className="preview-card">
              <HeartPulseIcon width={26} height={26} />
              <h3>Courses</h3>
              <p>
                HIIT, spin, yoga, boxing and more, taught by coaches who know how
                to run a room. Find a class that fits your week.
              </p>
              <span className="preview-card__link">Browse courses →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready to start your journey?</h2>
            <p>No contracts, no lock-in fees. Cancel any time.</p>
          </div>
          <Link to="/membership" className="btn btn-primary">See membership plans</Link>
        </div>
      </section>
    </>
  )
}

export default Home
