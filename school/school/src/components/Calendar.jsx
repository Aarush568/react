import { Link } from 'react-router-dom'
import { EVENTS } from '../data/news'
import './CurrentNews.css'

function Calendar() {
  return (
    <section className="section news">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Calendar</span>
          <h2>Upcoming Events</h2>
          <p className="section-lede">
            All upcoming events, open houses, and conferences at Northbridge
            Academy.
          </p>
        </div>

        <aside className="events-panel" style={{ maxWidth: 480, margin: '0 auto', position: 'static' }}>
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
          <Link className="btn btn-secondary btn-block" to="/news">
            Back to News
          </Link>
        </aside>
      </div>
    </section>
  )
}

export default Calendar
