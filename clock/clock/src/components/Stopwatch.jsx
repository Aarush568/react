import { useEffect, useRef, useState } from 'react'
import './Stopwatch.css'

function formatElapsed(ms) {
  const totalCs = Math.floor(ms / 10)
  const cs = totalCs % 100
  const totalSeconds = Math.floor(totalCs / 100)
  const seconds = totalSeconds % 60
  const totalMinutes = Math.floor(totalSeconds / 60)
  const minutes = totalMinutes % 60
  const hours = Math.floor(totalMinutes / 60)

  const pad = (n, len = 2) => String(n).padStart(len, '0')
  const base = hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`
  return { main: base, centis: pad(cs) }
}

export default function Stopwatch() {
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const [laps, setLaps] = useState([])
  const startRef = useRef(0)
  const accumulatedRef = useRef(0)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setElapsed(accumulatedRef.current + (Date.now() - startRef.current))
    }, 10)
    return () => clearInterval(id)
  }, [running])

  function start() {
    startRef.current = Date.now()
    setRunning(true)
  }

  function stop() {
    accumulatedRef.current = elapsed
    setRunning(false)
  }

  function reset() {
    setElapsed(0)
    accumulatedRef.current = 0
    setLaps([])
  }

  function lap() {
    setLaps((prev) => [{ total: elapsed, split: elapsed - (prev[0]?.total ?? 0) }, ...prev])
  }

  const { main, centis } = formatElapsed(elapsed)

  let fastestIdx = -1
  let slowestIdx = -1
  if (laps.length > 1) {
    const splits = laps.map((l) => l.split)
    fastestIdx = splits.indexOf(Math.min(...splits))
    slowestIdx = splits.indexOf(Math.max(...splits))
  }

  return (
    <div className="stopwatch">
      <div className="stopwatch-display">
        <span className="stopwatch-main">{main}</span>
        <span className="stopwatch-centis">.{centis}</span>
      </div>

      <div className="stopwatch-controls">
        <button
          type="button"
          className="lap-reset"
          onClick={running ? lap : reset}
          disabled={!running && elapsed === 0}
        >
          {running ? 'Lap' : 'Reset'}
        </button>
        <button
          type="button"
          className={running ? 'stop' : 'start'}
          onClick={running ? stop : start}
        >
          {running ? 'Stop' : 'Start'}
        </button>
      </div>

      {laps.length > 0 && (
        <ul className="lap-list">
          {laps.map((l, i) => {
            const lapNumber = laps.length - i
            const cls =
              laps.length > 1 && i === fastestIdx
                ? 'fastest'
                : laps.length > 1 && i === slowestIdx
                  ? 'slowest'
                  : ''
            const lapTime = formatElapsed(l.split)
            return (
              <li key={lapNumber} className={cls}>
                <span>Lap {lapNumber}</span>
                <span>{lapTime.main}.{lapTime.centis}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
