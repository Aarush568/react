import { useState } from 'react'
import { ClockIcon } from './Icons'
import BookingModal from './BookingModal'
import './Courses.css'

const COURSES = [
  {
    title: 'HIIT Blast',
    level: 'Intermediate',
    duration: '45 min',
    text: 'High-intensity intervals mixing bodyweight, kettlebell and sprint work.',
    coach: 'Coach Reyes',
    slots: [
      { day: 'Mon', time: '06:00' },
      { day: 'Wed', time: '06:00' },
      { day: 'Fri', time: '17:30' },
    ],
  },
  {
    title: 'Power Yoga',
    level: 'Beginner',
    duration: '60 min',
    text: 'A flowing, strength-focused practice that builds mobility and control.',
    coach: 'Coach Lin',
    slots: [
      { day: 'Tue', time: '18:30' },
      { day: 'Thu', time: '18:30' },
      { day: 'Sun', time: '09:00' },
    ],
  },
  {
    title: 'Spin Cycle',
    level: 'All levels',
    duration: '45 min',
    text: 'Rhythm-based indoor cycling with climbs, sprints and a coach-led playlist.',
    coach: 'Coach Torres',
    slots: [
      { day: 'Mon', time: '07:15' },
      { day: 'Wed', time: '17:00' },
      { day: 'Sat', time: '09:00' },
    ],
  },
  {
    title: 'Zumba Dance',
    level: 'Beginner',
    duration: '50 min',
    text: 'Latin-inspired dance cardio, no experience needed — just show up and move.',
    coach: 'Coach Delgado',
    slots: [
      { day: 'Tue', time: '19:15' },
      { day: 'Fri', time: '19:15' },
      { day: 'Sat', time: '10:30' },
    ],
  },
  {
    title: 'Boxing Fundamentals',
    level: 'Intermediate',
    duration: '50 min',
    text: 'Pad work and technique drills covering stance, footwork and combinations.',
    coach: 'Coach Amara',
    slots: [
      { day: 'Mon', time: '18:00' },
      { day: 'Thu', time: '07:00' },
      { day: 'Sat', time: '11:00' },
    ],
  },
  {
    title: 'Pilates Core',
    level: 'All levels',
    duration: '40 min',
    text: 'Controlled, mat-based movement to build core strength and posture.',
    coach: 'Coach Osei',
    slots: [
      { day: 'Wed', time: '07:00' },
      { day: 'Fri', time: '12:15' },
      { day: 'Sun', time: '10:00' },
    ],
  },
]

function Courses() {
  const [bookingCourse, setBookingCourse] = useState(null)

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Class Schedule</span>
          <h1>Courses</h1>
          <p>Six classes running through the week, led by our in-house coaching team.</p>
        </div>

        <div className="course-grid">
          {COURSES.map((course) => (
            <div className="course-card" key={course.title}>
              <div className="course-card__top">
                <h3>{course.title}</h3>
                <span className="tag">{course.level}</span>
              </div>
              <p>{course.text}</p>
              <div className="course-card__bottom">
                <span className="course-card__duration">
                  <ClockIcon width={16} height={16} /> {course.duration}
                </span>
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setBookingCourse(course)}>
                  Book a spot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {bookingCourse && (
        <BookingModal course={bookingCourse} onClose={() => setBookingCourse(null)} />
      )}
    </section>
  )
}

export default Courses
