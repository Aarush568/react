import { Link } from 'react-router-dom';
import { Waves, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.58 14.2 3.58c-2.4 0-4.05 1.47-4.05 4.16V9.9H7.4V13h2.75v8h3.35Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinterestIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 2.5a9.5 9.5 0 0 0-3.46 18.35c-.05-.78-.09-1.98.02-2.83.1-.77.66-4.94.66-4.94s-.17-.34-.17-.83c0-.78.45-1.36 1.02-1.36.48 0 .71.36.71.79 0 .48-.31 1.2-.46 1.87-.13.56.28 1.02.83 1.02 1 0 1.77-1.05 1.77-2.58 0-1.35-.97-2.29-2.36-2.29-1.6 0-2.55 1.2-2.55 2.45 0 .48.19.99.42 1.27a.17.17 0 0 1 .04.16c-.05.19-.15.6-.17.68-.03.11-.09.13-.2.08-.75-.35-1.22-1.44-1.22-2.32 0-1.89 1.37-3.62 3.96-3.62 2.08 0 3.7 1.48 3.7 3.47 0 2.07-1.3 3.74-3.11 3.74-.61 0-1.18-.32-1.37-.69l-.37 1.42c-.13.52-.5 1.17-.74 1.56.56.17 1.15.27 1.77.27a9.5 9.5 0 0 0 0-19Z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-about">
          <div className="footer-brand">
            <span className="brand-mark">
              <Waves size={20} strokeWidth={2.5} />
            </span>
            <span className="brand-text">
              <strong>Azzurra Bay</strong>
              <small>Resort &amp; Spa</small>
            </span>
          </div>
          <p>
            A cliffside luxury resort above the Santorini caldera, offering private suites,
            award-winning dining and curated island experiences.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest" target="_blank" rel="noreferrer">
              <PinterestIcon />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/rooms">Rooms &amp; Suites</Link></li>
            <li><Link to="/dining">Dining</Link></li>
            <li><Link to="/spa">Spa &amp; Wellness</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/offers">Special Offers</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resort</h4>
          <ul>
            <li><Link to="/about">About Azzurra Bay</Link></li>
            <li><Link to="/contact">Book Now</Link></li>
            <li><a href="#faq">Guest FAQ</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={17} />
              <span>Oia Cliffside Road 12, Santorini 84702, Greece</span>
            </li>
            <li>
              <Phone size={17} />
              <span>+30 2286 000 000</span>
            </li>
            <li>
              <Mail size={17} />
              <span>reservations@azzurrabay.example</span>
            </li>
            <li>
              <Clock size={17} />
              <span>Front Desk: available 24/7</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Azzurra Bay Resort &amp; Spa. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#imprint">Imprint</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Stay</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
