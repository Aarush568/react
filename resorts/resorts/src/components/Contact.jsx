import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  CalendarCheck,
  Loader2,
} from 'lucide-react';
import { rooms } from '../data/rooms.js';
import './Contact.css';

const nextSteps = [
  {
    icon: ClipboardList,
    title: 'Send your request',
    description: 'Tell us your dates, party size and preferred room category.',
  },
  {
    icon: MessageCircle,
    title: "We'll be in touch",
    description: 'Our reservations team confirms availability and rate within one business day.',
  },
  {
    icon: CalendarCheck,
    title: 'Your stay is confirmed',
    description: "We'll send a confirmation and start planning your arrival details.",
  },
];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  roomType: '',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-img': "url('https://images.unsplash.com/photo-1716573120993-8f3719fcd486?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="container">
          <span className="eyebrow">Book Now</span>
          <h1>Check availability at Azzurra Bay</h1>
          <p>
            Share your dates and preferences below, and our reservations team will confirm
            availability and the best rate for your stay.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success card">
                <span className="success-icon">
                  <CheckCircle2 size={32} />
                </span>
                <h2>Request received</h2>
                <p>
                  Thank you, {form.fullName.split(' ')[0] || 'there'}. Our reservations team will
                  contact you within one business day to confirm availability
                  {form.roomType
                    ? ` for the ${rooms.find((r) => r.id === form.roomType)?.name ?? 'room you selected'}`
                    : ''}
                  .
                </p>
                <dl className="success-summary">
                  <div>
                    <dt>Check-in</dt>
                    <dd>{form.checkIn || 'Not specified'}</dd>
                  </div>
                  <div>
                    <dt>Check-out</dt>
                    <dd>{form.checkOut || 'Not specified'}</dd>
                  </div>
                  <div>
                    <dt>Contact</dt>
                    <dd>{form.phone || form.email}</dd>
                  </div>
                </dl>
                <div className="success-actions">
                  <button type="button" className="btn btn-primary-alt" onClick={resetForm}>
                    Submit another request
                  </button>
                  <Link to="/" className="btn btn-ghost">
                    Return to homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <label className="field">
                    <span>Full name</span>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={update('fullName')}
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label className="field">
                    <span>Number of guests</span>
                    <select value={form.guests} onChange={update('guests')}>
                      {['1', '2', '3', '4', '5', '6+'].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === '1' ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="form-row">
                  <label className="field">
                    <span>Email address</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jane@example.com"
                    />
                  </label>
                  <label className="field">
                    <span>Phone number</span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+1 (123) 456-7890"
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label className="field">
                    <span>Check-in date</span>
                    <input type="date" required value={form.checkIn} onChange={update('checkIn')} />
                  </label>
                  <label className="field">
                    <span>Check-out date</span>
                    <input type="date" required value={form.checkOut} onChange={update('checkOut')} />
                  </label>
                </div>

                <label className="field">
                  <span>Preferred room or suite</span>
                  <select value={form.roomType} onChange={update('roomType')}>
                    <option value="">No preference / please advise</option>
                    {rooms.map((room) => (
                      <option value={room.id} key={room.id}>
                        {room.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field">
                  <span>Anything else we should know?</span>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Special occasions, dietary needs, requested excursions..."
                  />
                </label>

                <button type="submit" className="btn btn-primary submit-btn" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="spin" /> Sending...
                    </>
                  ) : (
                    'Check Availability'
                  )}
                </button>
              </form>
            )}
          </div>

          <aside className="contact-sidebar">
            <div className="sidebar-card">
              <h3>Contact us directly</h3>
              <ul className="sidebar-contact">
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

            <div className="sidebar-card">
              <h3>What happens next</h3>
              <ul className="steps-list">
                {nextSteps.map(({ icon: Icon, title, description }) => (
                  <li key={title}>
                    <span className="icon-badge icon-badge--accent">
                      <Icon size={18} />
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Contact;
