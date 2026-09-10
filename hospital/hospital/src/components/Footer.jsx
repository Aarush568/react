import { Link } from 'react-router-dom';
import { Cross, MapPin, Phone, Mail, Clock } from 'lucide-react';
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

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.2 8.98h3.56V20.5H3.2V8.98Zm6.35 0h3.41v1.58h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.31h-3.56V14.9c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69H9.55V8.98Z" />
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
              <Cross size={20} strokeWidth={2.5} />
            </span>
            <span className="brand-text">
              <strong>Lindenpark</strong>
              <small>General Hospital</small>
            </span>
          </div>
          <p>
            A full-service acute care hospital providing compassionate, evidence-based medicine
            to our community for over 60 years.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/fields">Medical Fields</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/career">Career & Studies</Link></li>
            <li><Link to="/appointment">Book an Appointment</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Patients & Visitors</h4>
          <ul>
            <li><a href="/services#visiting-hours">Visiting Hours</a></li>
            <li><a href="/services#emergency">Emergency Department</a></li>
            <li><a href="/services#insurance">Insurance & Billing</a></li>
            <li><a href="/services#patient-rights">Patient Rights</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={17} />
              <span>128 Lindenpark Avenue, Springfield, ST 10115</span>
            </li>
            <li>
              <Phone size={17} />
              <span>+1 (123) 456-7000</span>
            </li>
            <li>
              <Mail size={17} />
              <span>info@lindenpark-hospital.example</span>
            </li>
            <li>
              <Clock size={17} />
              <span>Reception: Mon–Fri, 7:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Lindenpark General Hospital. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#imprint">Imprint</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
