import React, { useState } from 'react';

export function Dashboard() {
  const [guests, setGuests] = useState(['Alice', 'Bob']);
  const [guestInput, setGuestInput] = useState('');

  const handleAddGuest = (e) => {
    e.preventDefault();
    if (!guestInput.trim()) return;
    setGuests([...guests, guestInput.trim()]);
    setGuestInput('');
  };

  const handleRemoveGuest = (indexToRemove) => {
    const updatedGuests = guests.filter((_, index) => index !== indexToRemove);
    setGuests(updatedGuests);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h1>🗓️ Event Dashboard</h1>
      <p>Manage your invitations below.</p>
      
      <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
        <h3>Total RSVP'd Guests: {guests.length}</h3>
        
        <form onSubmit={handleAddGuest} style={{ marginBottom: '15px' }}>
          <input 
            type="text" 
            placeholder="Type guest name..." 
            value={guestInput} 
            onChange={(e) => setGuestInput(e.target.value)}
            style={{ padding: '8px', marginRight: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit">Add Guest</button>
        </form>

        <ul style={{ margin: 0, paddingLeft: '0', listStyleType: 'none' }}>
          {guests.map((name, index) => (
            <li 
              key={index} 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                maxWidth: '220px',
                margin: '8px 0',
                padding: '6px 10px',
                background: '#fff',
                borderRadius: '4px',
                border: '1px solid #eee'
              }}
            >
              <span>{name}</span>
              {/* Click triggers the deletion logic */}
              <button 
                onClick={() => handleRemoveGuest(index)}
                style={{ 
                  backgroundColor: '#dc3545', 
                  color: '#fff', 
                  border: 'none', 
                  padding: '2px 6px', 
                  borderRadius: '3px', 
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
