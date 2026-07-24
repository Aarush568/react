import { ClockIcon } from './Icons'
import './Courses.css'

const COURSES = [
  {
    title: 'HIIT Blast',
    level: 'Intermediate',
    duration: '45 min',
    text: 'High-intensity intervals mixing bodyweight, kettlebell and sprint work.',
  },
  {
    title: 'Power Yoga',
    level: 'Beginner',
    duration: '60 min',
    text: 'A flowing, strength-focused practice that builds mobility and control.',
  },
  {
    title: 'Spin Cycle',
    level: 'All levels',
    duration: '45 min',
    text: 'Rhythm-based indoor cycling with climbs, sprints and a coach-led playlist.',
  },
  {
    title: 'Zumba Dance',
    level: 'Beginner',
    duration: '50 min',
    text: 'Latin-inspired dance cardio, no experience needed — just show up and move.',
  },
  {
    title: 'Boxing Fundamentals',
    level: 'Intermediate',
    duration: '50 min',
    text: 'Pad work and technique drills covering stance, footwork and combinations.',
  },
  {
    title: 'Pilates Core',
    level: 'All levels',
    duration: '40 min',
    text: 'Controlled, mat-based movement to build core strength and posture.',
  },
]

function Courses() {
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
                <button type="button" className="btn btn-outline btn-sm">Book a spot</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
