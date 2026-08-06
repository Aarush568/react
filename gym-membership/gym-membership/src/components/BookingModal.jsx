import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppData } from '../context/appDataStore'
import Modal from './Modal'
import { CheckIcon, ClockIcon } from './Icons'
import './Wizard.css'

function BookingModal({ course, onClose }) {
  const { membership, bookClass } = useAppData()
  const [step, setStep] = useState(0)
  const [slotIndex, setSlotIndex] = useState(null)
  const [name, setName] = useState(membership ? `${membership.firstName} ${membership.lastName}`.trim() : '')
  const [email, setEmail] = useState(membership?.email ?? '')
  const [booked, setBooked] = useState(false)

  const slot = slotIndex !== null ? course.slots[slotIndex] : null

  function goToDetails(e) {
    e.preventDefault()
    if (slotIndex === null) return
    setStep(1)
  }

  function handleConfirm(e) {
    e.preventDefault()
    bookClass({
      course: course.title,
      coach: course.coach,
      day: slot.day,
      time: slot.time,
      name,
      email,
    })
    setBooked(true)
  }

  if (booked) {
    return (
      <Modal onClose={onClose} labelledBy="booking-success-title">
        <div className="application-success">
          <div className="application-success__icon">
            <CheckIcon width={30} height={30} />
          </div>
          <h2 id="booking-success-title">You're booked, {name.split(' ')[0] || 'there'}.</h2>
          <p>
            {course.title} · {slot.day} at {slot.time} with {course.coach}. It's already on your dashboard.
          </p>
          <div className="application-success__actions">
            <button type="button" className="btn btn-outline" onClick={onClose}>Book another class</button>
            <Link to="/profile" className="btn btn-primary" onClick={onClose}>View my dashboard</Link>
          </div>
        </div>
      </Modal>
    )
  }

  return (
    <Modal onClose={onClose} labelledBy="booking-title">
      <div className="application">
        <div className="application__header">
          <span className="eyebrow">Book a class</span>
          <h2 id="booking-title">{course.title}</h2>
          <p>{course.level} · {course.duration} with {course.coach}</p>
        </div>

        <form onSubmit={step === 0 ? goToDetails : handleConfirm} className="application__form">
          {step === 0 && (
            <div className="slot-grid">
              {course.slots.map((s, i) => (
                <label key={`${s.day}-${s.time}`} className={`slot-card ${slotIndex === i ? 'is-selected' : ''}`}>
                  <input type="radio" name="slot" checked={slotIndex === i} onChange={() => setSlotIndex(i)} />
                  <ClockIcon width={16} height={16} />
                  <span>{s.day}</span>
                  <strong>{s.time}</strong>
                </label>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="application__fields">
              <div className="field full">
                <label htmlFor="booking-name">Full name</label>
                <input id="booking-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Blake" />
              </div>
              <div className="field full">
                <label htmlFor="booking-email">Email</label>
                <input id="booking-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" />
              </div>
              <p className="slot-summary">
                <ClockIcon width={15} height={15} /> {slot.day} at {slot.time} with {course.coach}
              </p>
            </div>
          )}

          <div className="application__actions">
            {step === 1 && (
              <button type="button" className="btn btn-outline" onClick={() => setStep(0)}>
                Back
              </button>
            )}
            <button type="submit" className="btn btn-primary" disabled={step === 0 && slotIndex === null}>
              {step === 0 ? 'Continue' : 'Confirm booking'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default BookingModal
