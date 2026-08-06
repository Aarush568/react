import { Link } from 'react-router-dom'
import { useAppData } from '../context/appDataStore'
import { CalendarIcon, FlameIcon, ClockIcon } from './Icons'
import './Profile.css'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function daysUntil(dayAbbr) {
  const target = WEEKDAYS.indexOf(dayAbbr)
  if (target === -1) return 99
  const today = new Date().getDay()
  const diff = target - today
  return diff < 0 ? diff + 7 : diff
}

function sortedBookings(bookings) {
  return [...bookings].sort((a, b) => {
    const diff = daysUntil(a.day) - daysUntil(b.day)
    if (diff !== 0) return diff
    return a.time.localeCompare(b.time)
  })
}

function formatMemberSince(value) {
  if (!value) return null
  return new Date(value).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function Profile() {
  const { membership, bookings, cancelBooking } = useAppData()
  const upcoming = sortedBookings(bookings)
  const nextClass = upcoming[0]
  const initials = membership
    ? `${membership.firstName?.[0] ?? ''}${membership.lastName?.[0] ?? ''}`.toUpperCase()
    : '?'

  return (
    <section className="section">
      <div className="container">
        <div className="profile-card">
          <div className="profile-card__avatar">{initials}</div>
          <div className="profile-card__info">
            <h1>{membership ? `Welcome back, ${membership.firstName}` : 'Welcome to PulseFit'}</h1>
            <p>
              {membership
                ? `Member since ${formatMemberSince(membership.appliedAt)} · ID ${membership.memberId}`
                : "You don't have an active membership yet."}
            </p>
          </div>
          <span className="tag profile-card__tier">
            {membership ? `${membership.plan} plan` : 'No plan'}
          </span>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <FlameIcon width={20} height={20} />
            <div>
              <strong>{membership ? 12 : 0}</strong>
              <span>Day streak</span>
            </div>
          </div>
          <div className="profile-stat">
            <CalendarIcon width={20} height={20} />
            <div>
              <strong>{membership ? 47 : 0}</strong>
              <span>Classes attended</span>
            </div>
          </div>
          <div className="profile-stat">
            <ClockIcon width={20} height={20} />
            <div>
              <strong>{nextClass ? `${nextClass.day}, ${nextClass.time}` : 'None booked'}</strong>
              <span>Next class</span>
            </div>
          </div>
        </div>

        <div className="profile-schedule">
          <div className="section-head">
            <h2>Upcoming classes</h2>
          </div>

          {upcoming.length > 0 ? (
            <div className="schedule-list">
              {upcoming.map((item) => (
                <div className="schedule-row" key={item.id}>
                  <div>
                    <h3>{item.course}</h3>
                    <p>{item.coach}</p>
                  </div>
                  <div className="schedule-row__time">
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </div>
                  <button
                    type="button"
                    className="schedule-row__cancel"
                    onClick={() => cancelBooking(item.id)}
                    aria-label={`Cancel ${item.course}`}
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="schedule-empty">
              <p>You haven't booked any classes yet.</p>
              <Link to="/courses" className="btn btn-outline btn-sm">Browse courses</Link>
            </div>
          )}
        </div>

        <div className="profile-actions">
          <Link to="/courses" className="btn btn-outline">Book another class</Link>
          <Link to="/membership" className="btn btn-primary">
            {membership ? 'Manage membership' : 'Become a member'}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Profile
