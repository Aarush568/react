import { useState } from 'react'
import WorldClock from './components/WorldClock'
import Alarm from './components/Alarm'
import Stopwatch from './components/Stopwatch'
import Timer from './components/Timer'
import './App.css'

const TABS = [
  { key: 'world', label: 'World Clock', icon: '🌐', Component: WorldClock },
  { key: 'alarm', label: 'Alarm', icon: '⏰', Component: Alarm },
  { key: 'stopwatch', label: 'Stopwatch', icon: '⏱️', Component: Stopwatch },
  { key: 'timer', label: 'Timer', icon: '⏳', Component: Timer },
]

function App() {
  const [active, setActive] = useState('world')
  const ActiveComponent = TABS.find((t) => t.key === active).Component

  return (
    <div className="app-shell">
      <nav className="sidebar">
        <h1 className="sidebar-title">Clock</h1>
        <ul>
          {TABS.map((tab) => (
            <li key={tab.key}>
              <button
                type="button"
                className={tab.key === active ? 'active' : ''}
                onClick={() => setActive(tab.key)}
              >
                <span className="icon" aria-hidden="true">
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="content">
        <h2 className="content-title">{TABS.find((t) => t.key === active).label}</h2>
        <div className="content-body">
          <ActiveComponent />
        </div>
      </main>
    </div>
  )
}

export default App
