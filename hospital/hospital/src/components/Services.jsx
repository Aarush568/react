import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Siren, FileCheck2, Scale } from 'lucide-react';
import { clinicalServices, patientAmenities, visitingInfo } from '../data/services.js';
import './Services.css';

const insurancePoints = [
  'We accept all major private and public health insurance providers.',
  'Direct billing is available for most insured inpatient and outpatient treatments.',
  'Our billing office offers free consultations to explain estimated costs before treatment.',
  'Flexible payment plans are available for uninsured or self-pay patients.',
];

const patientRights = [
  'The right to respectful, non-discriminatory care regardless of background.',
  'The right to clear information about your diagnosis, treatment and options.',
  'The right to participate in decisions about your own care.',
  'The right to privacy and confidentiality of your medical information.',
  'The right to request a second opinion at any point in your treatment.',
];

function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>Everything you need, under one roof</h1>
          <p>
            From emergency care to rehabilitation, our services are designed around your
            comfort, safety and recovery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Clinical Services</span>
            <h2>Medical services we provide</h2>
          </div>
          <div className="service-grid">
            {clinicalServices.map(({ icon: Icon, name, description }) => (
              <div className="service-card card" key={name}>
                <span className="icon-badge">
                  <Icon size={22} />
                </span>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Patient Amenities</span>
            <h2>Comfort during your stay</h2>
          </div>
          <div className="amenity-grid">
            {patientAmenities.map(({ icon: Icon, name, description }) => (
              <div className="amenity-card" key={name}>
                <span className="icon-badge icon-badge--accent">
                  <Icon size={20} />
                </span>
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section visiting" id="visiting-hours">
        <div className="container visiting-grid">
          <div>
            <span className="eyebrow">Plan Your Visit</span>
            <h2>Visiting hours</h2>
            <p>
              We welcome family and friends as part of the healing process. Hours vary slightly
              by department to protect patient rest and safety.
            </p>
          </div>
          <ul className="visiting-list">
            {visitingInfo.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt emergency-section" id="emergency">
        <div className="container emergency-inner">
          <span className="icon-badge icon-badge--emergency">
            <Siren size={26} />
          </span>
          <div>
            <span className="eyebrow eyebrow--emergency">Emergency Department</span>
            <h2>Open 24 hours a day, every day</h2>
            <p>
              If you or someone with you is experiencing a medical emergency, come directly to
              our emergency entrance or call emergency services immediately. Our trauma-ready
              team is on-site around the clock.
            </p>
            <a href="tel:+11234567000" className="btn btn-emergency">
              <Phone size={18} /> Emergency Line: +1 (123) 456-7000
            </a>
          </div>
        </div>
      </section>

      <section className="section policy-section" id="insurance">
        <div className="container policy-grid">
          <span className="icon-badge">
            <FileCheck2 size={24} />
          </span>
          <div>
            <span className="eyebrow">Billing</span>
            <h2>Insurance & billing</h2>
            <ul className="policy-list">
              {insurancePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt policy-section" id="patient-rights">
        <div className="container policy-grid">
          <span className="icon-badge icon-badge--accent">
            <Scale size={24} />
          </span>
          <div>
            <span className="eyebrow">Patient Rights</span>
            <h2>Your rights as a patient</h2>
            <ul className="policy-list">
              {patientRights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Questions about a specific service?</h2>
            <p>Our patient coordination team is happy to help you find the right care.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+11234567000" className="btn btn-primary">
              <Phone size={18} /> Call +1 (123) 456-7000
            </a>
            <Link to="/appointment" className="btn btn-outline">
              Book an Appointment <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
