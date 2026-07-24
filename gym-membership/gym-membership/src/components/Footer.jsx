import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="logo">
            PULSE<span>FIT</span>
          </span>
          <p>
            A no-nonsense training space built around free weights, group energy and
            coaching that actually pays attention.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/training-areas">Training Areas</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/membership">Membership</Link></li>
          </ul>
        </div>

        <div>
          <h3>Studio</h3>
          <ul>
            <li>128 Ironside Avenue</li>
            <li>Open 24/7, every day</li>
            <li>Front desk: 06:00 – 22:00</li>
            <li>hello@pulsefit.example</li>
          </ul>
        </div>

        <div>
          <h3>Membership</h3>
          <ul>
            <li><Link to="/membership">View plans</Link></li>
            <li><Link to="/profile">My account</Link></li>
            <li><Link to="/courses">Book a class</Link></li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {year} PulseFit. All rights reserved.</span>
        <span>Built for people who show up.</span>
      </div>
    </footer>
  )
}

export default Footer
