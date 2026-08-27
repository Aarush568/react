import { useState } from 'react'
import './Registration.css'

const STEPS = [
  { title: 'Submit Inquiry', text: 'Share your contact details and the grade you are applying for.' },
  { title: 'Tour & Assessment', text: 'Visit our campus and complete an age-appropriate placement assessment.' },
  { title: 'Submit Application', text: 'Provide transcripts, recommendation letters, and required documents.' },
  { title: 'Enrollment Decision', text: 'Receive your admission decision and complete enrollment paperwork.' },
]

const GRADES = [
  'Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
]

const INITIAL_FORM = {
  studentName: '',
  dob: '',
  grade: '',
  parentName: '',
  email: '',
  phone: '',
  message: '',
}

function Registration() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="admissions" className="section admissions section--soft">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Admissions</span>
          <h2>Begin Your Journey at Northbridge</h2>
          <p className="section-lede">
            We admit students on a rolling basis for Kindergarten through
            Grade 12. Our admissions team is here to guide your family
            through every step of the process.
          </p>
        </div>

        <ol className="steps">
          {STEPS.map((step, index) => (
            <li className="steps__item" key={step.title}>
              <span className="steps__number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="admissions__layout">
          <div className="admissions__form-card">
            {submitted ? (
              <div className="form-success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m8 12.5 2.5 2.5 5.5-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3>Inquiry Received</h3>
                <p>
                  Thank you, {form.parentName || 'there'}. Our admissions team
                  will reach out within two business days to schedule a
                  campus tour and discuss next steps.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setForm(INITIAL_FORM)
                    setSubmitted(false)
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="admissions__form-title">Request Admissions Information</h3>
                <div className="form-grid">
                  <label className="form-field">
                    <span>Student Full Name</span>
                    <input
                      type="text"
                      name="studentName"
                      value={form.studentName}
                      onChange={handleChange}
                      placeholder="e.g. Emma Carter"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Date of Birth</span>
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Grade Applying For</span>
                    <select name="grade" value={form.grade} onChange={handleChange} required>
                      <option value="" disabled>
                        Select a grade
                      </option>
                      {GRADES.map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="form-field">
                    <span>Parent / Guardian Name</span>
                    <input
                      type="text"
                      name="parentName"
                      value={form.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Daniel Carter"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </label>
                  <label className="form-field form-field--full">
                    <span>Message (Optional)</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us a bit about your child or any questions you have..."
                    />
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          <aside className="admissions__info">
            <div className="admissions__info-card">
              <h3>Admissions Office</h3>
              <ul>
                <li>
                  <strong>Address</strong>
                  <span>482 Cedarwood Lane, Hartford, CT 06105</span>
                </li>
                <li>
                  <strong>Phone</strong>
                  <span>(860) 555-0148</span>
                </li>
                <li>
                  <strong>Email</strong>
                  <span>admissions@northbridgeacademy.edu</span>
                </li>
                <li>
                  <strong>Office Hours</strong>
                  <span>Mon&ndash;Fri, 8:00 AM&ndash;4:30 PM</span>
                </li>
              </ul>
            </div>
            <div className="admissions__deadline-card">
              <span className="eyebrow">Application Deadline</span>
              <p className="admissions__deadline">January 15, 2027</p>
              <p>for the 2027&ndash;2028 academic year. Rolling admission continues as space allows.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Registration
