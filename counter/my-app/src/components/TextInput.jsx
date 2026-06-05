import React, { useState } from 'react';

export function TextInput() {
  const [name, setName] = useState('Rahul');

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '15px' }}>
      <h3>2. Live Text Input</h3>
      <input 
        type="text" 
        placeholder="Type your name..." 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Hello, {name ? <strong>{name}</strong> : 'Stranger'}!</p>
    </div>
  );
}
