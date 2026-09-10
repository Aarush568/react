import { HeartHandshake, ShieldCheck, Sparkles, Users, MapPin, Phone, Mail, Clock, Award } from 'lucide-react';
import './About.css';

const values = [
  {
    icon: HeartHandshake,
    title: 'Compassion',
    description: 'We treat every patient with empathy, dignity and respect, from admission to discharge.',
  },
  {
    icon: ShieldCheck,
    title: 'Excellence',
    description: 'We hold ourselves to rigorous clinical standards, backed by continuous training and audits.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We invest in modern technology and evidence-based practice to improve patient outcomes.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We are proud to serve the Springfield region and give back through outreach programs.',
  },
];

const timeline = [
  { year: '1963', text: 'Lindenpark General Hospital opens its doors with 90 beds and four founding departments.' },
  { year: '1988', text: 'A dedicated maternity ward and Level II NICU open, doubling regional birth capacity.' },
  { year: '2004', text: 'The hospital becomes a certified stroke center and opens its first intensive care unit.' },
  { year: '2016', text: 'A new surgical wing and hybrid operating rooms bring advanced minimally invasive care.' },
  { year: '2026', text: 'Lindenpark now serves over 45,000 patients a year across twelve medical fields.' },
];

const leadership = [
  { name: 'Dr. med. Katharina Voss', role: 'Chief Medical Officer', initials: 'KV' },
  { name: 'Michael Ferber', role: 'Chief Executive Officer', initials: 'MF' },
  { name: 'Dr. med. Anette Grunwald', role: 'Head of Internal Medicine', initials: 'AG' },
  { name: 'Sabine Wittkopp', role: 'Director of Nursing', initials: 'SW' },
];

const certifications = [
  'Joint Commission Accredited Hospital',
  'Certified Stroke Center',
  'ISO 9001 Quality Management',
  'Baby-Friendly Maternity Care Certification',
];

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Six decades of care, one community</h1>
          <p>
            Lindenpark General Hospital is a full-service, not-for-profit hospital dedicated to
            providing exceptional, accessible healthcare to the Springfield region.
          </p>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our Mission & Values</span>
            <h2>What guides everything we do</h2>
            <p>
              Our mission is to improve the health and wellbeing of every person who walks
              through our doors, through skilled medicine and genuine human care.
            </p>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, description }) => (
              <div className="value-card card" key={title}>
                <span className="icon-badge">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt history">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our History</span>
            <h2>A legacy of growth and trust</h2>
          </div>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.year} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section leadership">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Leadership</span>
            <h2>Meet our leadership team</h2>
          </div>
          <div className="leadership-grid">
            {leadership.map((person) => (
              <div className="leader-card" key={person.name}>
                <div className="leader-avatar">{person.initials}</div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt certifications">
        <div className="container certifications-inner">
          <div className="section-head">
            <span className="eyebrow">Quality & Recognition</span>
            <h2>Independently certified quality of care</h2>
            <p>
              Our departments undergo regular independent review to ensure we meet the highest
              standards of clinical safety and patient care.
            </p>
          </div>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert}>
                <Award size={20} />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section location">
        <div className="container location-grid">
          <div className="location-map" aria-hidden="true">
            <MapPin size={32} />
          </div>
          <div className="location-info">
            <span className="eyebrow">Find Us</span>
            <h2>Visit our campus</h2>
            <ul className="location-details">
              <li>
                <MapPin size={18} />
                <span>128 Lindenpark Avenue, Springfield, ST 10115</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+1 (123) 456-7000</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@lindenpark-hospital.example</span>
              </li>
              <li>
                <Clock size={18} />
                <span>Reception open Mon–Fri, 7:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
