import { CheckCircle2, Mail, Phone } from 'lucide-react';
import { studyPrograms, applicationSteps, careerBenefits } from '../data/courses.js';
import './Career.css';

function Career() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Career & Studies</span>
          <h1>Start your career in medicine at Lindenpark</h1>
          <p>
            Whether you're beginning a dual-study nursing degree, training for a clinical
            vocation, or pursuing a medical specialization, Lindenpark offers a clear path from
            classroom to career.
          </p>
        </div>
      </section>

      <section className="section benefits">
        <div className="container benefits-grid">
          <div className="benefits-copy">
            <span className="eyebrow">Why Train With Us</span>
            <h2>Learn on the job, from day one</h2>
            <p>
              Every study and training program at Lindenpark pairs academic learning with real
              clinical experience, guided by experienced mentors across our departments.
            </p>
          </div>
          <ul className="benefits-list">
            {careerBenefits.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2 size={20} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt programs">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Study & Training Programs</span>
            <h2>Find the right path for you</h2>
            <p>
              From dual bachelor's degrees to postgraduate specialization, explore every route
              into a career at Lindenpark.
            </p>
          </div>

          {studyPrograms.map(({ level, icon: Icon, programs }) => (
            <div className="program-level" key={level}>
              <div className="program-level-head">
                <span className="icon-badge">
                  <Icon size={22} />
                </span>
                <h3>{level}</h3>
              </div>
              <div className="program-grid">
                {programs.map((program) => (
                  <div className="program-card card" key={program.name}>
                    <div className="program-card-head">
                      <h4>{program.name}</h4>
                      <span className="tag">{program.duration}</span>
                    </div>
                    <p>{program.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section application">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">How to Apply</span>
            <h2>Your application in four steps</h2>
          </div>
          <div className="steps-grid">
            {applicationSteps.map((item) => (
              <div className="step-card" key={item.step}>
                <span className="step-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Ready to apply?</h2>
            <p>Reach out to our student and career office to discuss the program that's right for you.</p>
          </div>
          <div className="cta-actions">
            <a href="mailto:karriere@lindenpark-hospital.example" className="btn btn-primary">
              <Mail size={18} /> karriere@lindenpark-hospital.example
            </a>
            <a href="tel:+11234567000" className="btn btn-outline">
              <Phone size={17} /> Call +1 (123) 456-7000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;
