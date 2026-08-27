import './Information.css'

const FEATURES = [
  {
    title: 'Academic Excellence',
    text: 'A rigorous, standards-driven curriculum that consistently places our graduates in top-tier universities worldwide.',
    icon: (
      <path d="M12 3 2 8l10 5 10-5-10-5Z M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
    ),
  },
  {
    title: 'Experienced Faculty',
    text: 'Our teachers hold advanced degrees in their fields and average over a decade of classroom experience.',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5 20c0-3.6 3.1-6.4 7-6.4s7 2.8 7 6.4" />
      </>
    ),
  },
  {
    title: 'Modern Facilities',
    text: 'State-of-the-art science labs, a robotics workshop, and a newly renovated performing arts auditorium.',
    icon: <path d="M4 21V9l8-6 8 6v12M9 21v-7h6v7M4 21h16" />,
  },
  {
    title: 'Holistic Development',
    text: 'Over 40 clubs, competitive athletics, and service-learning programs that build character alongside intellect.',
    icon: <path d="M12 21s-7-4.35-9.5-9A5.4 5.4 0 0 1 12 6a5.4 5.4 0 0 1 9.5 6c-2.5 4.65-9.5 9-9.5 9Z" />,
  },
  {
    title: 'Safe & Inclusive',
    text: 'A secure, welcoming campus culture where every student is known, supported, and encouraged to thrive.',
    icon: <path d="M12 3 4 6v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V6l-8-3Z" />,
  },
  {
    title: 'Strong Community',
    text: 'An engaged network of families and alumni that actively partners with the school in every student’s journey.',
    icon: <path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-3A3.5 3.5 0 0 0 7 18.5V20M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM3 20v-1a3 3 0 0 1 2.4-2.94M21 20v-1a3 3 0 0 0-2.4-2.94M7.5 8.5A2.5 2.5 0 1 1 5 6a2.5 2.5 0 0 1 2.5 2.5ZM19 8.5A2.5 2.5 0 1 0 16.5 6 2.5 2.5 0 0 0 19 8.5Z" />,
  },
]

const FACILITIES = [
  'Science & Computer Labs',
  'Library & Media Center',
  'Indoor Sports Complex',
  'Performing Arts Auditorium',
  'Health & Wellness Center',
  'Robotics & Innovation Workshop',
]

function Information() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">About Northbridge</span>
          <h2>Where Character Meets Achievement</h2>
          <p className="section-lede">
            For over three decades, Northbridge Academy has combined a
            rigorous academic core with a warm, close-knit community &mdash;
            preparing students not just for exams, but for life.
          </p>
        </div>

        <div className="about__mission">
          <div className="about__mission-card">
            <h3>Our Mission</h3>
            <p>
              To cultivate confident, curious, and compassionate learners by
              delivering a challenging academic program alongside strong
              moral and civic values, equipping every student to lead a
              purposeful life.
            </p>
          </div>
          <div className="about__mission-card">
            <h3>Our Vision</h3>
            <p>
              To be recognized as a leading center of educational excellence
              &mdash; a place where curiosity is celebrated, individuality is
              respected, and every student is empowered to reach their full
              potential.
            </p>
          </div>
        </div>

        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <span className="feature-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {feature.icon}
                </svg>
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="facilities">
          <h3 className="facilities__title">Campus Facilities</h3>
          <ul className="facilities__list">
            {FACILITIES.map((facility) => (
              <li key={facility}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 7" />
                </svg>
                {facility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Information
