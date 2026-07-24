import { Link } from 'react-router-dom'
import { CalendarIcon, FlameIcon, ClockIcon } from './Icons'
import './Profile.css'

const UPCOMING = [
  { title: 'HIIT Blast', day: 'Tomorrow', time: '07:00', coach: 'Coach Reyes' },
  { title: 'Power Yoga', day: 'Thursday', time: '18:30', coach: 'Coach Lin' },
  { title: 'Boxing Fundamentals', day: 'Saturday', time: '10:00', coach: 'Coach Amara' },
]

function Profile() {
  return (
    <section className="section">
      <div className="container">
        <div className="profile-card">
          <div className="profile-card__avatar">JD</div>
          <div className="profile-card__info">
            <h1>Welcome back, Jordan</h1>
            <p>Member since March 2024</p>
          </div>
          <span className="tag profile-card__tier">Premium plan</span>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <FlameIcon width={20} height={20} />
            <div>
              <strong>12</strong>
              <span>Day streak</span>
            </div>
          </div>
          <div className="profile-stat">
            <CalendarIcon width={20} height={20} />
            <div>
              <strong>47</strong>
              <span>Classes attended</span>
            </div>
          </div>
          <div className="profile-stat">
            <ClockIcon width={20} height={20} />
            <div>
              <strong>Sat, 10:00</strong>
              <span>Next class</span>
            </div>
          </div>
        </div>

        <div className="profile-schedule">
          <div className="section-head">
            <h2>Upcoming classes</h2>
          </div>

          <div className="schedule-list">
            {UPCOMING.map((item) => (
              <div className="schedule-row" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.coach}</p>
                </div>
                <div className="schedule-row__time">
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-actions">
          <Link to="/courses" className="btn btn-outline">Book another class</Link>
          <Link to="/membership" className="btn btn-primary">Manage membership</Link>
        </div>
      </div>
    </section>
  )
}

export default Profile
