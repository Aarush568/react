import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Events({ events, setEvents }) {
  const [filter, setFilter] = useState('All');
  
  // States for the new event form inputs
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Music');

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!title.trim() || !date.trim()) return;

    const newEvent = {
      id: title.toLowerCase().replace(/[^a-z0-9]/g, '-'), // Generates a clean URL slug ID
      title: title.trim(),
      category,
      date
    };

    setEvents([...events, newEvent]);
    setTitle('');
    setDate('');
  };

  // New function to remove an event using its unique id
  const handleRemoveEvent = (idToRemove) => {
    const updatedEvents = events.filter(event => event.id !== idToRemove);
    setEvents(updatedEvents);
  };

  const displayedEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h1>📅 Upcoming Events</h1>
      
      {/* Creation Form Box */}
      <form onSubmit={handleCreateEvent} style={{ background: '#f9f9f9', padding: '15px', borderRadius: '6px', marginBottom: '20px', border: '1px solid #eee' }}>
        <h3>✨ Create Custom Event</h3>
        <input 
          type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)}
          style={{ display: 'block', width: '95%', padding: '8px', marginBottom: '10px' }}
        />
        <input 
          type="text" placeholder="Date (e.g. Oct 24)" value={date} onChange={(e) => setDate(e.target.value)}
          style={{ display: 'block', width: '95%', padding: '8px', marginBottom: '10px' }}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ display: 'block', padding: '8px', marginBottom: '10px', width: '99%' }}>
          <option value="Music">Music</option>
          <option value="Tech">Tech</option>
          <option value="Art">Art</option>
        </select>
        <button type="submit" style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px' }}>Create Event</button>
      </form>

      {/* Category Filters */}
      <div style={{ margin: '15px 0' }}>
        {['All', 'Music', 'Tech', 'Art'].map(cat => (
          <button 
            key={cat} onClick={() => setFilter(cat)}
            style={{ marginRight: '10px', backgroundColor: filter === cat ? '#007bff' : '#eee', color: filter === cat ? '#fff' : '#000', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events List with Delete Buttons */}
      <ul style={{ paddingLeft: '0', listStyleType: 'none' }}>
        {displayedEvents.map(event => (
          <li 
            key={event.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              margin: '12px 0',
              padding: '10px',
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: '6px'
            }}
          >
            <div>
              <Link to={`/events/${event.id}`} style={{ fontWeight: 'bold', color: '#007bff', textDecoration: 'none' }}>
                {event.title}
              </Link> 
              <span style={{ color: '#666' }}> — {event.date} ({event.category})</span>
            </div>
            
            {/* Click triggers the deletion logic */}
            <button 
              onClick={() => handleRemoveEvent(event.id)}
              style={{ 
                backgroundColor: '#dc3545', 
                color: '#fff', 
                border: 'none', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
