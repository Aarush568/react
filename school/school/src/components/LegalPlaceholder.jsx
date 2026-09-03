import { Link } from 'react-router-dom'

function LegalPlaceholder({ title }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <h2>{title}</h2>
          <p className="section-lede">
            Content coming soon. Please contact the admissions office if you
            have questions in the meantime.
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link className="btn btn-secondary" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LegalPlaceholder
