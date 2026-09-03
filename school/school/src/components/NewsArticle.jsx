import { Link, useParams } from 'react-router-dom'
import { NEWS, slugify } from '../data/news'
import './CurrentNews.css'

function NewsArticle() {
  const { slug } = useParams()
  const item = NEWS.find((news) => slugify(news.title) === slug)

  if (!item) {
    return (
      <section className="section news">
        <div className="container">
          <h2>Article not found</h2>
          <p>We couldn&rsquo;t find that news story.</p>
          <Link className="btn btn-secondary" to="/news">
            Back to News
          </Link>
        </div>
      </section>
    )
  }

  const otherNews = NEWS.filter((news) => news !== item)

  return (
    <section className="section news">
      <div className="container">
        <div className="news__layout">
          <article className="news-card">
            <div className="news-card__meta">
              <span className="news-card__category">{item.category}</span>
              <span className="news-card__date">{item.date}</span>
            </div>
            <h2>{item.title}</h2>
            {item.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <Link className="news-card__link" to="/news">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              Back to News
            </Link>
          </article>

          <aside className="events-panel">
            <h3>More News</h3>
            <ul>
              {otherNews.map((news) => (
                <li key={news.title}>
                  <span className="events-panel__info">
                    <strong>
                      <Link to={`/news/${slugify(news.title)}`} style={{ color: 'inherit' }}>
                        {news.title}
                      </Link>
                    </strong>
                    <em>{news.date}</em>
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

export default NewsArticle
