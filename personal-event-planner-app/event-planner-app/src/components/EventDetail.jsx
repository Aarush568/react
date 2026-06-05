import React from 'react';
import { useParams, Link } from 'react-router-dom';

export function EventDetail({ events }) {
  const { eventId } = useParams();
  
  // Find the match from our master event list array
  const currentEvent = events.find(e => e.id === eventId);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h1>🔍 Event Specifics</h1>
      {currentEvent ? (
        <div>
          <h2>{currentEvent.title}</h2>
          <p><strong>Category:</strong> {currentEvent.category}</p>
          <p><strong>Scheduled Date:</strong> {currentEvent.date}</p>
        </div>
      ) : (
        <p style={{ color: 'red' }}>Event not found!</p>
      )}
      <div style={{ marginTop: '20px' }}>
        <Link to="/events" style={{ textDecoration: 'none', color: '#007bff' }}>⬅️ Back to Events List</Link>
      </div>
    </div>
  );
}
