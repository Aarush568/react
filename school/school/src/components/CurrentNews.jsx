import { Link } from 'react-router-dom'
import { NEWS, EVENTS, slugify } from '../data/news'
import './CurrentNews.css'

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
                <Link className="news-card__link" to={`/news/${slugify(item.title)}`}>
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
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
            <Link className="btn btn-secondary btn-block" to="/calendar">
              View Full Calendar
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default CurrentNews
