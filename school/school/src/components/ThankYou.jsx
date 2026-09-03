import { Link, Navigate, useLocation } from 'react-router-dom'
import './Registration.css'

function ThankYou() {
  const location = useLocation()

  if (!location.state) {
    return <Navigate to="/admissions" replace />
  }

  const { parentName } = location.state

  return (
    <section className="section admissions section--soft">
      <div className="container">
        <div className="admissions__form-card">
          <div className="form-success">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="10" />
              <path d="m8 12.5 2.5 2.5 5.5-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>Inquiry Received</h3>
            <p>
              Thank you, {parentName || 'there'}. Our admissions team will
              reach out within two business days to schedule a campus tour
              and discuss next steps.
            </p>
            <Link className="btn btn-secondary" to="/admissions">
              Submit Another Inquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThankYou
