import { useEffect, useRef, useState } from 'react'
import { usePersistentState } from './Store'
import { startRinging } from '../utils/sound'
import './Alarm.css'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function formatTime(time) {
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`
}

function repeatSummary(days) {
  if (days.length === 0) return 'Never'
  if (days.length === 7) return 'Every day'
  return days
    .slice()
    .sort((a, b) => a - b)
    .map((d) => WEEKDAYS[d])
    .join(' ')
}

function newAlarm() {
  return { id: crypto.randomUUID(), time: '07:00', label: 'Alarm', repeat: [], enabled: true }
}

export default function Alarm() {
  const [alarms, setAlarms] = usePersistentState('alarms', [])
  const [editing, setEditing] = useState(null)
  const [ringing, setRinging] = useState(null)
  const stopRingRef = useRef(null)
  const firedRef = useRef(new Set())

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date()
      const hhmm = `${String(now.getHours()).padStart(2, '0')}:${String(
        now.getMinutes(),
      ).padStart(2, '0')}`
      const today = now.getDay()
      const dateKey = now.toDateString()

      alarms.forEach((alarm) => {
        if (!alarm.enabled || alarm.time !== hhmm) return
        if (alarm.repeat.length > 0 && !alarm.repeat.includes(today)) return
        const fireKey = `${alarm.id}-${dateKey}`
        if (firedRef.current.has(fireKey)) return
        firedRef.current.add(fireKey)
        setRinging(alarm)
        if (alarm.repeat.length === 0) {
          setAlarms((prev) =>
            prev.map((a) => (a.id === alarm.id ? { ...a, enabled: false } : a)),
          )
        }
      })
    }, 1000)
    return () => clearInterval(id)
  }, [alarms, setAlarms])

  useEffect(() => {
    if (ringing) {
      stopRingRef.current = startRinging()
    } else if (stopRingRef.current) {
      stopRingRef.current()
      stopRingRef.current = null
    }
  }, [ringing])

  function toggleAlarm(id) {
    setAlarms(alarms.map((a) => (a.id === id ? { ...a, enabled: !a.enabled } : a)))
  }

  function deleteAlarm(id) {
    setAlarms(alarms.filter((a) => a.id !== id))
  }

  function startNew() {
    setEditing(newAlarm())
  }

  function startEdit(alarm) {
    setEditing({ ...alarm, repeat: [...alarm.repeat] })
  }

  function saveEditing() {
    setAlarms((prev) => {
      const exists = prev.some((a) => a.id === editing.id)
      return exists ? prev.map((a) => (a.id === editing.id ? editing : a)) : [...prev, editing]
    })
    setEditing(null)
  }

  function toggleEditingDay(day) {
    setEditing((prev) => ({
      ...prev,
      repeat: prev.repeat.includes(day)
        ? prev.repeat.filter((d) => d !== day)
        : [...prev.repeat, day],
    }))
  }

  const sortedAlarms = [...alarms].sort((a, b) => a.time.localeCompare(b.time))

  return (
    <div className="alarm">
      <div className="alarm-toolbar">
        <button type="button" onClick={startNew}>
          + Add Alarm
        </button>
      </div>

      {sortedAlarms.length === 0 && <p className="empty-hint">No alarms set.</p>}

      <ul className="alarm-list">
        {sortedAlarms.map((alarm) => (
          <li key={alarm.id} className={alarm.enabled ? '' : 'disabled'}>
            <button type="button" className="alarm-info" onClick={() => startEdit(alarm)}>
              <span className="alarm-time">{formatTime(alarm.time)}</span>
              <span className="alarm-details">
                {alarm.label} &middot; {repeatSummary(alarm.repeat)}
              </span>
            </button>
            <label className="switch">
              <input
                type="checkbox"
                checked={alarm.enabled}
                onChange={() => toggleAlarm(alarm.id)}
              />
              <span className="slider" />
            </label>
            <button
              type="button"
              className="remove"
              onClick={() => deleteAlarm(alarm.id)}
              aria-label="Delete alarm"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>

      {editing && (
        <div className="modal-backdrop" onClick={() => setEditing(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Alarm</h3>
            <input
              type="time"
              value={editing.time}
              onChange={(e) => setEditing({ ...editing, time: e.target.value })}
              className="time-input"
            />
            <input
              type="text"
              value={editing.label}
              onChange={(e) => setEditing({ ...editing, label: e.target.value })}
              placeholder="Label"
              className="label-input"
            />
            <div className="day-toggles">
              {WEEKDAYS.map((day, idx) => (
                <button
                  type="button"
                  key={day}
                  className={editing.repeat.includes(idx) ? 'day active' : 'day'}
                  onClick={() => toggleEditingDay(idx)}
                >
                  {day[0]}
                </button>
              ))}
            </div>
            <div className="modal-actions">
              <button type="button" className="ghost" onClick={() => setEditing(null)}>
                Cancel
              </button>
              <button type="button" onClick={saveEditing}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {ringing && (
        <div className="modal-backdrop">
          <div className="modal ringing">
            <h3>{ringing.label}</h3>
            <p className="ringing-time">{formatTime(ringing.time)}</p>
            <button type="button" onClick={() => setRinging(null)}>
              Stop
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
