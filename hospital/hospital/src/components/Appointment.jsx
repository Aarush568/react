import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ClipboardList,
  PhoneCall,
  CalendarCheck,
  Loader2,
} from 'lucide-react';
import { departments } from '../data/departments.js';
import './Appointment.css';

const timeSlots = [
  'Morning (8:00 AM – 12:00 PM)',
  'Afternoon (12:00 PM – 4:00 PM)',
  'Evening (4:00 PM – 7:00 PM)',
];

const nextSteps = [
  {
    icon: ClipboardList,
    title: 'Submit your request',
    description: 'Tell us a bit about you and the care you need.',
  },
  {
    icon: PhoneCall,
    title: "We'll reach out",
    description: 'Our patient coordination team calls or emails within one business day.',
  },
  {
    icon: CalendarCheck,
    title: 'Confirm your visit',
    description: "We'll confirm a specific date and time that works for you.",
  },
];

const initialForm = {
  visitType: 'New Patient',
  fullName: '',
  dob: '',
  email: '',
  phone: '',
  department: '',
  physician: '',
  preferredDate: '',
  preferredTime: timeSlots[0],
  insurance: '',
  reason: '',
  consent: false,
};

function Appointment() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
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
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Book an Appointment</span>
          <h1>Schedule your visit to Lindenpark</h1>
          <p>
            Fill out the form below and our patient coordination team will confirm your
            appointment by phone or email.
          </p>
        </div>
      </section>

      <section className="section appointment-section">
        <div className="container appointment-grid">
          <div className="appointment-form-wrap">
            {submitted ? (
              <div className="appointment-success card">
                <span className="success-icon">
                  <CheckCircle2 size={32} />
                </span>
                <h2>Request received</h2>
                <p>
                  Thank you, {form.fullName.split(' ')[0] || 'there'}. Our patient coordination
                  team will contact you within one business day to confirm your appointment
                  {form.department
                    ? ` with ${departments.find((d) => d.id === form.department)?.name ?? 'our team'}`
                    : ''}
                  .
                </p>
                <dl className="success-summary">
                  <div>
                    <dt>Preferred date</dt>
                    <dd>{form.preferredDate || 'Not specified'}</dd>
                  </div>
                  <div>
                    <dt>Preferred time</dt>
                    <dd>{form.preferredTime}</dd>
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
              <form className="appointment-form card" onSubmit={handleSubmit} noValidate>
                <div className="form-segment">
                  <span className="form-label">Visit type</span>
                  <div className="segmented">
                    {['New Patient', 'Returning Patient'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        className={`segmented-option ${form.visitType === type ? 'active' : ''}`}
                        onClick={() => setForm((f) => ({ ...f, visitType: type }))}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

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
                    <span>Date of birth</span>
                    <input type="date" required value={form.dob} onChange={update('dob')} />
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
                    <span>Medical field</span>
                    <select required value={form.department} onChange={update('department')}>
                      <option value="" disabled>
                        Select a department
                      </option>
                      {departments.map((d) => (
                        <option value={d.id} key={d.id}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="field">
                    <span>Preferred physician (optional)</span>
                    <input
                      type="text"
                      value={form.physician}
                      onChange={update('physician')}
                      placeholder="No preference"
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label className="field">
                    <span>Preferred date</span>
                    <input
                      type="date"
                      required
                      value={form.preferredDate}
                      onChange={update('preferredDate')}
                    />
                  </label>
                  <label className="field">
                    <span>Preferred time</span>
                    <select value={form.preferredTime} onChange={update('preferredTime')}>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="field">
                  <span>Insurance provider (optional)</span>
                  <input
                    type="text"
                    value={form.insurance}
                    onChange={update('insurance')}
                    placeholder="e.g. BlueCross BlueShield"
                  />
                </label>

                <label className="field">
                  <span>Reason for visit</span>
                  <textarea
                    required
                    rows={4}
                    value={form.reason}
                    onChange={update('reason')}
                    placeholder="Briefly describe your symptoms or reason for the visit"
                  />
                </label>

                <label className="consent">
                  <input type="checkbox" required checked={form.consent} onChange={update('consent')} />
                  <span>
                    I understand this is an appointment request, not a confirmed booking, and that
                    Lindenpark General Hospital will contact me to finalize the date and time.
                  </span>
                </label>

                <button type="submit" className="btn btn-primary submit-btn" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="spin" /> Submitting...
                    </>
                  ) : (
                    'Request Appointment'
                  )}
                </button>
              </form>
            )}
          </div>

          <aside className="appointment-sidebar">
            <div className="emergency-notice">
              <AlertTriangle size={22} />
              <div>
                <strong>Medical emergency?</strong>
                <p>Do not use this form. Call 911 or go directly to our emergency department.</p>
                <a href="tel:+11234567000" className="btn btn-emergency">
                  <Phone size={16} /> Emergency: +1 (123) 456-7000
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Contact us directly</h3>
              <ul className="sidebar-contact">
                <li>
                  <Phone size={17} />
                  <span>+1 (123) 456-7000</span>
                </li>
                <li>
                  <Mail size={17} />
                  <span>appointments@lindenpark-hospital.example</span>
                </li>
                <li>
                  <Clock size={17} />
                  <span>Reception: Mon–Fri, 7:00 AM – 7:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>What happens next</h3>
              <ul className="steps-list">
                {nextSteps.map(({ icon: Icon, title, description }) => (
                  <li key={title}>
                    <span className="icon-badge">
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

export default Appointment;