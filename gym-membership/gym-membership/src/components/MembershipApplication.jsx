import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppData } from '../context/appDataStore'
import Modal from './Modal'
import { CheckIcon } from './Icons'
import './Wizard.css'

const STEPS = ['Your details', 'Start & billing', 'Payment', 'Review']

function tomorrow() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().slice(0, 10)
}

function formatDate(value) {
  if (!value) return '—'
  return new Date(`${value}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function MembershipApplication({ plan, onClose }) {
  const { submitMembership } = useAppData()
  const [step, setStep] = useState(0)
  const [billing, setBilling] = useState('monthly')
  const [submitting, setSubmitting] = useState(false)
  const [memberId, setMemberId] = useState(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    startDate: tomorrow(),
    emergencyName: '',
    emergencyPhone: '',
    accountHolder: '',
    iban: '',
    agreed: false,
  })

  function update(field) {
    return (e) => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
      setForm((f) => ({ ...f, [field]: value }))
    }
  }

  const price = billing === 'annual' ? Math.round(plan.price * 12 * 0.85) : plan.price

  function canContinue() {
    if (step === 0) return form.firstName.trim() && form.lastName.trim() && form.email.includes('@') && form.phone.trim()
    if (step === 1) return Boolean(form.startDate)
    if (step === 2) return form.accountHolder.trim() && form.iban.replace(/\s/g, '').length >= 15
    return form.agreed
  }

  function handleStepSubmit(e) {
    e.preventDefault()
    if (!canContinue()) return
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1)
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      const id = submitMembership({
        plan: plan.name,
        price,
        billing,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        dob: form.dob,
        startDate: form.startDate,
        emergencyName: form.emergencyName,
        emergencyPhone: form.emergencyPhone,
        ibanLast4: form.iban.replace(/\s/g, '').slice(-4),
      })
      setMemberId(id)
      setSubmitting(false)
    }, 900)
  }

  if (memberId) {
    return (
      <Modal onClose={onClose} labelledBy="application-success-title">
        <div className="application-success">
          <div className="application-success__icon">
            <CheckIcon width={30} height={30} />
          </div>
          <h2 id="application-success-title">You're in, {form.firstName}.</h2>
          <p>
            Your {plan.name} membership starts {formatDate(form.startDate)}. We've sent a confirmation to {form.email}.
          </p>
          <div className="application-success__id">
            <span>Membership ID</span>
            <strong>{memberId}</strong>
          </div>
          <div className="application-success__actions">
            <button type="button" className="btn btn-outline" onClick={onClose}>Done</button>
            <Link to="/profile" className="btn btn-primary" onClick={onClose}>Go to my dashboard</Link>
          </div>
        </div>
      </Modal>
    )
  }

  return (
    <Modal onClose={onClose} labelledBy="application-title">
      <div className="application">
        <div className="application__header">
          <span className="eyebrow">Membership application</span>
          <h2 id="application-title">{plan.name} plan</h2>
          <p>
            ${price}{billing === 'annual' ? '/yr' : '/mo'} · {billing === 'annual' ? 'billed annually' : 'billed monthly'}
          </p>
        </div>

        <ol className="application__steps">
          {STEPS.map((label, i) => (
            <li key={label} className={i === step ? 'is-active' : i < step ? 'is-done' : ''}>
              <span>{i < step ? <CheckIcon width={12} height={12} /> : i + 1}</span>
              {label}
            </li>
          ))}
        </ol>

        <form onSubmit={handleStepSubmit} className="application__form">
          {step === 0 && (
            <div className="application__fields">
              <div className="field">
                <label htmlFor="firstName">First name</label>
                <input id="firstName" type="text" required value={form.firstName} onChange={update('firstName')} placeholder="Jordan" />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <input id="lastName" type="text" required value={form.lastName} onChange={update('lastName')} placeholder="Blake" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="you@email.com" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" required value={form.phone} onChange={update('phone')} placeholder="(555) 123-4567" />
              </div>
              <div className="field">
                <label htmlFor="dob">Date of birth</label>
                <input id="dob" type="date" value={form.dob} onChange={update('dob')} />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="application__fields">
              <div className="billing-toggle">
                <button type="button" className={billing === 'monthly' ? 'is-active' : ''} onClick={() => setBilling('monthly')}>
                  Monthly
                </button>
                <button type="button" className={billing === 'annual' ? 'is-active' : ''} onClick={() => setBilling('annual')}>
                  Annual <span className="save-tag">Save 15%</span>
                </button>
              </div>
              <div className="field">
                <label htmlFor="startDate">Start date</label>
                <input id="startDate" type="date" required min={tomorrow()} value={form.startDate} onChange={update('startDate')} />
              </div>
              <div className="field">
                <label htmlFor="emergencyName">Emergency contact</label>
                <input id="emergencyName" type="text" value={form.emergencyName} onChange={update('emergencyName')} placeholder="Full name" />
              </div>
              <div className="field">
                <label htmlFor="emergencyPhone">Emergency contact phone</label>
                <input id="emergencyPhone" type="tel" value={form.emergencyPhone} onChange={update('emergencyPhone')} placeholder="(555) 987-6543" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="application__fields">
              <div className="field full">
                <label htmlFor="accountHolder">Account holder name</label>
                <input id="accountHolder" type="text" required value={form.accountHolder} onChange={update('accountHolder')} placeholder="Name on the account" />
              </div>
              <div className="field full">
                <label htmlFor="iban">IBAN</label>
                <input id="iban" type="text" required value={form.iban} onChange={update('iban')} placeholder="DE89 3704 0044 0532 0130 00" />
              </div>
              <p className="field-hint">
                Dues are collected by direct debit each billing cycle. You can cancel anytime from your dashboard.
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="application__fields">
              <div className="review-list">
                <div className="review-row">
                  <span>Plan</span>
                  <strong>{plan.name} · ${price}{billing === 'annual' ? '/yr' : '/mo'}</strong>
                </div>
                <div className="review-row">
                  <span>Name</span>
                  <strong>{form.firstName} {form.lastName}</strong>
                </div>
                <div className="review-row">
                  <span>Contact</span>
                  <strong>{form.email} · {form.phone}</strong>
                </div>
                <div className="review-row">
                  <span>Start date</span>
                  <strong>{formatDate(form.startDate)}</strong>
                </div>
                <div className="review-row">
                  <span>Payment</span>
                  <strong>IBAN ending •••• {form.iban.replace(/\s/g, '').slice(-4) || '----'}</strong>
                </div>
              </div>
              <label className="terms">
                <input type="checkbox" required checked={form.agreed} onChange={update('agreed')} />
                I agree to the membership terms and the studio's cancellation policy.
              </label>
            </div>
          )}

          <div className="application__actions">
            {step > 0 && (
              <button type="button" className="btn btn-outline" onClick={() => setStep((s) => s - 1)}>
                Back
              </button>
            )}
            <button type="submit" className="btn btn-primary" disabled={!canContinue() || submitting}>
              {step === STEPS.length - 1 ? (submitting ? 'Submitting…' : 'Submit application') : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default MembershipApplication
