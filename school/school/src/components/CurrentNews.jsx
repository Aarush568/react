import './CurrentNews.css'

const NEWS = [
  {
    date: 'August 18, 2026',
    category: 'Achievement',
    title: 'Robotics Team Wins Regional Championship',
    text: 'The Northbridge Robotics Club took first place at the Connecticut State Robotics Invitational, advancing to nationals in October.',
  },
  {
    date: 'August 10, 2026',
    category: 'Campus',
    title: 'New STEM Wing Opens for the Fall Semester',
    text: 'Our newly built STEM wing features three research-grade laboratories and a dedicated robotics and engineering workshop.',
  },
  {
    date: 'July 29, 2026',
    category: 'Community',
    title: 'Annual Charity Drive Raises Record Funds',
    text: 'Students and families came together to raise over $42,000 for local children’s charities during this year’s spring drive.',
  },
  {
    date: 'July 15, 2026',
    category: 'Athletics',
    title: 'Varsity Soccer Advances to State Finals',
    text: 'The varsity soccer team closed out an undefeated regular season and will compete for the state title this September.',
  },
]

const EVENTS = [
  { date: 'SEP 12', title: 'Fall Open House', time: '9:00 AM – 12:00 PM' },
  { date: 'SEP 26', title: 'Parent-Teacher Conferences', time: '1:00 PM – 6:00 PM' },
  { date: 'OCT 08', title: 'College Fair for Juniors & Seniors', time: '4:00 PM – 7:00 PM' },
  { date: 'OCT 24', title: 'Homecoming & Alumni Weekend', time: 'All Day' },
]

function CurrentNews() {
  return (
    <section id="news" className="section news">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">News &amp; Events</span>
          <h2>What&rsquo;s Happening at Northbridge</h2>
          <p className="section-lede">
            Stay up to date with the latest achievements, announcements, and
            upcoming events from around our campus community.
          </p>
        </div>

        <div className="news__layout">
          <div className="news__list">
            {NEWS.map((item) => (
              <article className="news-card" key={item.title}>
                <div className="news-card__meta">
                  <span className="news-card__category">{item.category}</span>
                  <span className="news-card__date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="news-card__link" href="#news">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </article>
            ))}
          </div>

          <aside className="events-panel">
            <h3>Upcoming Events</h3>
            <ul>
              {EVENTS.map((event) => (
                <li key={event.title}>
                  <span className="events-panel__date">{event.date}</span>
                  <span className="events-panel__info">
                    <strong>{event.title}</strong>
                    <em>{event.time}</em>
                  </span>
                </li>
              ))}
            </ul>
            <a className="btn btn-secondary btn-block" href="#admissions">
              View Full Calendar
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default CurrentNews
