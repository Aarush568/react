import { useEffect, useRef, useState } from 'react'
import { startRinging } from '../utils/sound'
import './Timer.css'

function pad(n) {
  return String(n).padStart(2, '0')
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000))
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`
}

function PickerColumn({ label, max, value, onChange }) {
  const options = Array.from({ length: max + 1 }, (_, i) => i)
  return (
    <div className="picker-col">
      <select value={value} onChange={(e) => onChange(Number(e.target.value))} aria-label={label}>
        {options.map((n) => (
          <option key={n} value={n}>
            {pad(n)}
          </option>
        ))}
      </select>
      <span className="picker-label">{label}</span>
    </div>
  )
}

export default function Timer() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState(0)
  const [status, setStatus] = useState('idle')
  const [remaining, setRemaining] = useState(0)
  const [totalMs, setTotalMs] = useState(0)
  const endTimeRef = useRef(0)
  const stopRingRef = useRef(null)

  useEffect(() => {
    if (status !== 'running') return
    const id = setInterval(() => {
      const left = endTimeRef.current - Date.now()
      if (left <= 0) {
        setRemaining(0)
        setStatus('done')
      } else {
        setRemaining(left)
      }
    }, 200)
    return () => clearInterval(id)
  }, [status])

  useEffect(() => {
    if (status === 'done') {
      stopRingRef.current = startRinging()
    } else if (stopRingRef.current) {
      stopRingRef.current()
      stopRingRef.current = null
    }
  }, [status])

  function start() {
    const ms = (hours * 3600 + minutes * 60 + seconds) * 1000
    if (ms <= 0) return
    setTotalMs(ms)
    setRemaining(ms)
    endTimeRef.current = Date.now() + ms
    setStatus('running')
  }

  function pause() {
    setStatus('paused')
  }

  function resume() {
    endTimeRef.current = Date.now() + remaining
    setStatus('running')
  }

  function reset() {
    setStatus('idle')
    setRemaining(0)
    setTotalMs(0)
  }

  const progress = totalMs > 0 ? Math.min(1, Math.max(0, 1 - remaining / totalMs)) : 0

  if (status === 'idle') {
    return (
      <div className="timer">
        <div className="timer-picker">
          <PickerColumn label="hours" max={23} value={hours} onChange={setHours} />
          <span className="picker-sep">:</span>
          <PickerColumn label="min" max={59} value={minutes} onChange={setMinutes} />
          <span className="picker-sep">:</span>
          <PickerColumn label="sec" max={59} value={seconds} onChange={setSeconds} />
        </div>
        <button
          type="button"
          className="timer-start"
          onClick={start}
          disabled={hours === 0 && minutes === 0 && seconds === 0}
        >
          Start
        </button>
      </div>
    )
  }

  return (
    <div className="timer">
      <div className="timer-ring" style={{ '--progress': progress }}>
        <span className="timer-remaining">{formatDuration(remaining)}</span>
      </div>
      <div className="timer-controls">
        {status === 'running' && (
          <button type="button" onClick={pause}>
            Pause
          </button>
        )}
        {status === 'paused' && (
          <button type="button" onClick={resume}>
            Resume
          </button>
        )}
        <button type="button" className="ghost" onClick={reset}>
          Cancel
        </button>
      </div>

      {status === 'done' && (
        <div className="timer-modal-backdrop">
          <div className="timer-modal">
            <h3>Time&rsquo;s Up</h3>
            <button type="button" onClick={reset}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
