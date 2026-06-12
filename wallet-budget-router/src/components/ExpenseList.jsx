// Location: src/components/ExpenseList.jsx
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ items, onDelete, onToggleExecute }) {
  return (
    <div>
      <h3 style={{ color: '#34495e' }}>Transaction Stream</h3>
      {items.length === 0 ? (
        <p style={{ color: 'gray', fontStyle: 'italic' }}>No charges on file.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {items.map(item => (
            <ExpenseItem 
              key={item.id} 
              item={item} 
              onDelete={onDelete} 
              onToggleExecute={onToggleExecute} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
