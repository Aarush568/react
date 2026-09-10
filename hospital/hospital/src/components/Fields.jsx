import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { departments } from '../data/departments.js';
import './Fields.css';

function Fields() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Medical Fields</span>
          <h1>Twelve specialties, one coordinated team</h1>
          <p>
            Our physicians work across every major medical field, collaborating closely to
            deliver a complete, coordinated care plan for every patient.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="fields-grid">
            {departments.map(({ id, icon: Icon, name, summary, treatments, chief }) => (
              <article className="field-card card" id={id} key={id}>
                <span className="icon-badge">
                  <Icon size={24} />
                </span>
                <h3>{name}</h3>
                <p>{summary}</p>
                <ul className="field-treatments">
                  {treatments.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="field-chief">
                  <span>Chief Physician</span>
                  <strong>{chief}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Not sure which specialist you need?</h2>
            <p>Our patient coordination team can guide you to the right department.</p>
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

export default Fields;
