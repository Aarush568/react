import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Events } from './components/Events';
import { EventDetail } from './components/EventDetail';

export default function App() {
  // Master state for events shared across pages
  const [events, setEvents] = useState([
    { id: 'concert', title: 'Summer Music Festival', category: 'Music', date: 'July 15' },
    { id: 'tech-talk', title: 'AI & React Workshop', category: 'Tech', date: 'August 02' },
    { id: 'art-expo', title: 'Modern Art Exhibition', category: 'Art', date: 'September 10' },
  ]);

  return (
    <BrowserRouter>
      <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'system-ui, sans-serif', padding: '0 20px' }}>
        
        <nav style={{ paddingBottom: '20px', marginBottom: '20px', borderBottom: '2px solid #eee' }}>
          <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard</Link>
          <Link to="/events" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Events ({events.length})</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<Events events={events} setEvents={setEvents} />} />
          <Route path="/events/:eventId" element={<EventDetail events={events} />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}
