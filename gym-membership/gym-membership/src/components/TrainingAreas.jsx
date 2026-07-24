import {
  DumbbellIcon,
  HeartPulseIcon,
  FlameIcon,
  UsersIcon,
  StretchIcon,
  ShieldCheckIcon,
} from './Icons'
import './TrainingAreas.css'

const AREAS = [
  {
    icon: DumbbellIcon,
    title: 'Free Weights Zone',
    text: 'Full rack of barbells, dumbbells up to 60kg and dedicated platforms for squats, deadlifts and presses.',
  },
  {
    icon: HeartPulseIcon,
    title: 'Cardio Deck',
    text: 'Treadmills, bikes, rowers and stair climbers with individual screens, overlooking the main floor.',
  },
  {
    icon: FlameIcon,
    title: 'Functional Training',
    text: 'Sleds, battle ropes, kettlebells and rig stations for conditioning and athletic work.',
  },
  {
    icon: UsersIcon,
    title: 'Group Fitness Studio',
    text: 'A sprung floor studio for spin, HIIT and dance classes, fitted with full sound and lighting.',
  },
  {
    icon: StretchIcon,
    title: 'Recovery & Stretch Zone',
    text: 'Foam rollers, stretch benches and a quiet corner to cool down and reset after a session.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Personal Training Suite',
    text: 'A private space for 1-on-1 coaching sessions, assessments and program reviews.',
  },
]

function TrainingAreas() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Studio</span>
          <h1>Training Areas</h1>
          <p>Six dedicated zones, one membership. Move between them however your session calls for it.</p>
        </div>

        <div className="area-grid">
          {AREAS.map(({ icon: Icon, title, text }) => (
            <div className="area-card" key={title}>
              <div className="area-card__icon">
                <Icon width={24} height={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingAreas
