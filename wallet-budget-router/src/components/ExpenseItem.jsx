// Location: src/components/ExpenseItem.jsx
export default function ExpenseItem({ item, onDelete, onToggleExecute }) {
  const categoryColors = {
    Food: '#e67e22', Utilities: '#f1c40f', Entertainment: '#9b59b6',
    Transport: '#3498db', Medical: '#e74c3c', Shopping: '#e91e63', Other: '#7f8c8d'
  };

  const borderLeftColor = categoryColors[item.category] || '#7f8c8d';

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px',
      borderRadius: '6px',
      background: item.completed ? '#f0f4f1' : '#fdfefe', // Fades row if executed
      borderLeft: `5px solid ${borderLeftColor}`,
      opacity: item.completed ? 0.75 : 1, // Visual indicator for locked item
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'all 0.2s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* The Execution Trigger Checkbox */}
        <input 
          type="checkbox" 
          checked={item.completed} 
          onChange={() => onToggleExecute(item.id)}
          style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#27ae60' }}
        />
        <div>
          <span style={{ 
            fontWeight: 'bold', 
            display: 'block',
            textDecoration: item.completed ? 'line-through' : 'none',
            color: item.completed ? '#7f8c8d' : '#2c3e50'
          }}>
            {item.title}
          </span>
          <span style={{ fontSize: '12px', color: '#95a5a6' }}>
            {item.category} {item.completed ? '(Executed)' : '(Planned)'}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <strong style={{ color: item.completed ? '#7f8c8d' : '#c0392b' }}>
          -${item.amount}
        </strong>
        <button 
          onClick={() => onDelete(item.id)}
          style={{ background: '#ecf0f1', color: '#95a5a6', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
