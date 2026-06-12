// Location: src/components/ManageTransactions.jsx
import { useState } from 'react';

export default function ManageTransactions({ expenses, onAdd, onUpdateAmount }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    onAdd(title, amount, category);
    setTitle('');
    setAmount('');
  };

  // Filter out any transaction that has already been executed/checked
  const pendingExpenses = expenses.filter(item => !item.completed);

  return (
    <div>
      {/* SECTION 1: Add Transaction Form */}
      <form onSubmit={handleSubmit} style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h4 style={{ marginTop: 0 }}>Add New Item</h4>
        <input 
          type="text" placeholder="Title (e.g. Bus Ticket)" value={title} 
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '90%', padding: '6px', marginBottom: '10px' }}
        />
        <input 
          type="number" placeholder="Amount ($)" value={amount} 
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '90%', padding: '6px', marginBottom: '10px' }}
        />
        
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '95%', padding: '6px', marginBottom: '10px' }}>
          <option value="Food">🍔 Food</option>
          <option value="Utilities">💡 Utilities</option>
          <option value="Entertainment">🎬 Entertainment</option>
          <option value="Transport">🚗 Transport</option>
          <option value="Medical">🏥 Medical</option>
          <option value="Shopping">🛍️ Shopping</option>
          <option value="Other">📦 Other</option>
        </select>
        
        <button type="submit" style={{ background: '#27ae60', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px' }}>
          Save Transaction
        </button>
      </form>

      {/* SECTION 2: Adjust Pending Items with Sliders */}
      <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #eee' }}>
        <h4>Adjust Planning Phase</h4>
        
        {pendingExpenses.length === 0 ? (
          <p style={{ color: 'gray', fontStyle: 'italic', fontSize: '13px' }}>
            No active planning items. All transactions are finalized or empty.
          </p>
        ) : (
          pendingExpenses.map(item => (
            <div key={item.id} style={{ marginBottom: '15px', borderBottom: '1px solid #f1f1f1', paddingBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <strong>{item.title} <span style={{ fontSize: '11px', color: '#7f8c8d', fontWeight: 'normal' }}>({item.category})</span></strong>
                <span>${item.amount}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="500" 
                value={item.amount} 
                onChange={(e) => onUpdateAmount(item.id, e.target.value)}
                style={{ width: '100%', cursor: 'pointer' }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
