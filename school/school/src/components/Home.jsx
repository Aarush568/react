import { Link } from 'react-router-dom'
import './Home.css'

const STATS = [
  {
    value: '1,200+',
    label: 'Students Enrolled',
    icon: 'https://img.icons8.com/ios-filled/100/123869/graduation-cap.png',
  },
  {
    value: '12:1',
    label: 'Student–Teacher Ratio',
    icon: 'https://img.icons8.com/ios-filled/100/123869/student-male.png',
  },
  {
    value: '35+',
    label: 'Years of Excellence',
    icon: 'https://img.icons8.com/ios-filled/100/123869/prize.png',
  },
  {
    value: '98%',
    label: 'University Acceptance',
    icon: 'https://img.icons8.com/ios-filled/100/123869/university.png',
  },
]

const GALLERY_IMAGES = [
  {
    src: 'https://t4.ftcdn.net/jpg/15/12/04/11/360_F_1512041110_c0NFJDcHLmUJiwfDowzcKUgsPALmbjdD.jpg',
    alt: 'Students collaborating at Northbridge Academy',
  },
  {
    src: 'https://felton.net.au/wp-content/uploads/2025/09/Blog_1000x664px-1.jpg',
    alt: 'Northbridge Academy campus life',
  },
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww',
    alt: 'A Northbridge Academy classroom',
  },
  {
    src: 'https://evolveltd.eu/wp-content/uploads/2020/01/255376950_439497967739323_1355680417886447892_n-1.jpg',
    alt: 'Northbridge Academy students at work',
  },
]

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__gallery">
        {GALLERY_IMAGES.map((image, index) => (
          <div className="hero__gallery-item" key={image.src}>
            <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Est. 1987 · Grades K-12</span>
          <h1>Empowering Minds, Building Futures</h1>
          <p className="hero__lede">
            Northbridge Academy is a nationally recognized K&ndash;12 institution
            dedicated to academic excellence, character development, and
            lifelong learning &mdash; nurtured within a supportive, inclusive
            community that prepares every student for what comes next.
          </p>
          <div className="hero__actions">
            <Link className="btn btn-primary" to="/admissions">
              Apply for Admission
            </Link>
            <Link className="btn btn-secondary" to="/academics">
              Explore Academics
            </Link>
          </div>

          <dl className="hero__stats">
            {STATS.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <img className="hero__stat-icon" src={stat.icon} alt="" aria-hidden="true" />
                <div>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__panel">
            <svg viewBox="0 0 120 120" fill="none">
              <path
                d="M60 22 108 44 60 66 12 44Z"
                fill="rgba(255,255,255,0.14)"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M32 54v22c0 6 12 14 28 14s28-8 28-14V54"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M108 44v28" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="108" cy="76" r="2.5" fill="#c9a24b" />
            </svg>
            <p className="hero__panel-caption">Excellence in Education Since 1987</p>
          </div>

          <div className="hero__float hero__float--top">
            <img src="https://img.icons8.com/ios-filled/100/c9a24b/trophy.png" alt="" aria-hidden="true" />
            <div>
              <strong>#1</strong>
              <span>Ranked Regional Academy</span>
            </div>
          </div>
          <div className="hero__float hero__float--bottom">
            <img src="https://img.icons8.com/ios-filled/100/123869/collaboration.png" alt="" aria-hidden="true" />
            <div>
              <strong>40+</strong>
              <span>Clubs &amp; Activities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
