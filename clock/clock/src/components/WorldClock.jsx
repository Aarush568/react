import { useEffect, useMemo, useState } from 'react'
import cities from '../data/cities'
import { usePersistentState } from './Store'
import './WorldClock.css'

const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
const localCityName = localTimeZone.split('/').pop().replace(/_/g, ' ')

function isoDate(date, timeZone) {
  return new Intl.DateTimeFormat('en-CA', { timeZone }).format(date)
}

function cardInfo(date, timeZone) {
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date)

  const offsetPart = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'shortOffset',
  })
    .formatToParts(date)
    .find((p) => p.type === 'timeZoneName')
  const offset = offsetPart ? offsetPart.value.replace('GMT', 'UTC') : ''

  const here = isoDate(date, localTimeZone)
  const there = isoDate(date, timeZone)
  let day = 'Today'
  if (there > here) day = 'Tomorrow'
  else if (there < here) day = 'Yesterday'

  return { time, offset, day }
}

export default function WorldClock() {
  const [now, setNow] = useState(new Date())
  const [savedZones, setSavedZones] = usePersistentState('worldclock-zones', [
    'Asia/Kolkata',
    'Europe/London',
    'America/New_York',
    'Asia/Tokyo',
  ])
  const [pickerValue, setPickerValue] = useState('')

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const availableCities = useMemo(
    () => cities.filter((c) => !savedZones.includes(c.timeZone)),
    [savedZones],
  )

  function addCity() {
    if (!pickerValue || savedZones.includes(pickerValue)) return
    setSavedZones([...savedZones, pickerValue])
    setPickerValue('')
  }

  function removeCity(timeZone) {
    setSavedZones(savedZones.filter((z) => z !== timeZone))
  }

  return (
    <div className="worldclock">
      <div className="worldclock-toolbar">
        <select
          value={pickerValue}
          onChange={(e) => setPickerValue(e.target.value)}
          aria-label="Add a city"
        >
          <option value="">Add a city&hellip;</option>
          {availableCities.map((c) => (
            <option key={c.timeZone + c.name} value={c.timeZone}>
              {c.name}, {c.country}
            </option>
          ))}
        </select>
        <button type="button" onClick={addCity} disabled={!pickerValue}>
          Add
        </button>
      </div>

      <div className="worldclock-grid">
        <div className="clock-card local">
          <div className="clock-card-head">
            <h3>{localCityName}</h3>
            <span className="badge">Local</span>
          </div>
          <div className="clock-card-time">
            {new Intl.DateTimeFormat('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true,
            }).format(now)}
          </div>
          <div className="clock-card-meta">Today</div>
        </div>

        {savedZones.map((timeZone) => {
          const city = cities.find((c) => c.timeZone === timeZone)
          const info = cardInfo(now, timeZone)
          return (
            <div className="clock-card" key={timeZone}>
              <div className="clock-card-head">
                <h3>{city ? city.name : timeZone.split('/').pop().replace(/_/g, ' ')}</h3>
                <button
                  type="button"
                  className="remove"
                  onClick={() => removeCity(timeZone)}
                  aria-label={`Remove ${city ? city.name : timeZone}`}
                >
                  &times;
                </button>
              </div>
              <div className="clock-card-time">{info.time}</div>
              <div className="clock-card-meta">
                {info.day} &middot; {info.offset}
              </div>
            </div>
          )
        })}

        {savedZones.length === 0 && (
          <p className="empty-hint">Add a city to see the time there.</p>
        )}
      </div>
    </div>
  )
}
