import { CheckIcon } from './Icons'
import './Membership.css'

const PLANS = [
  {
    name: 'Basic',
    price: 29,
    tagline: 'For solo training on your own schedule.',
    features: ['24/7 studio access', 'Free weights & cardio deck', 'Locker room access', 'Cancel anytime'],
  },
  {
    name: 'Premium',
    price: 49,
    tagline: 'Our most popular plan for regulars.',
    featured: true,
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      'Monthly progress check-in',
      'Guest pass, 1 per month',
    ],
  },
  {
    name: 'Elite',
    price: 79,
    tagline: 'Full access with hands-on coaching.',
    features: [
      'Everything in Premium',
      '2 personal training sessions / month',
      'Custom training program',
      'Priority class booking',
    ],
  },
]

function Membership() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Membership</span>
          <h1>Plans that fit your training</h1>
          <p>No contracts, no hidden fees. Upgrade, downgrade or cancel whenever you need to.</p>
        </div>

        <div className="plan-grid">
          {PLANS.map((plan) => (
            <div className={`plan-card ${plan.featured ? 'is-featured' : ''}`} key={plan.name}>
              {plan.featured && <span className="plan-card__ribbon">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="plan-card__tagline">{plan.tagline}</p>
              <div className="plan-card__price">
                <span className="plan-card__currency">$</span>
                <span>{plan.price}</span>
                <span className="plan-card__period">/mo</span>
              </div>
              <ul className="plan-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon width={16} height={16} /> {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`btn btn-block ${plan.featured ? 'btn-primary' : 'btn-dark'}`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <p className="plan-note">
          All plans include a free fitness assessment for new members. No joining fee, no minimum term.
        </p>
      </div>
    </section>
  )
}

export default Membership
