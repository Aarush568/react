// Location: src/components/BudgetStats.jsx
export default function BudgetStats({ expenses, limit }) {
  // 1. Math: Total amount permanently spent (only checked items)
  const actualSpent = expenses
    .filter(item => item.completed)
    .reduce((sum, item) => sum + item.amount, 0);

  // 2. Math: Total amount sitting in your planning queue (unchecked items)
  const plannedPending = expenses
    .filter(item => !item.completed)
    .reduce((sum, item) => sum + item.amount, 0);

  const permanentlyRemaining = limit - actualSpent;
  const percentSpent = ((actualSpent / limit) * 100).toFixed(0);

  return (
    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
      <h3 style={{ marginTop: 0, color: '#34495e' }}>Real-Time Ledger</h3>
      
      <div style={{ marginBottom: '15px', fontSize: '15px' }}>
        <p style={{ margin: '6px 0' }}>Starting Allowance: <strong>${limit}</strong></p>
        
        <p style={{ margin: '6px 0', color: '#c0392b' }}>
          Executed Deductions: <strong>-${actualSpent}</strong>
        </p>
        
        <p style={{ margin: '6px 0', color: '#e67e22', fontSize: '14px', fontStyle: 'italic' }}>
          Planned Queue (Pending): <strong>-${plannedPending}</strong>
        </p>
        
        <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '10px 0' }} />
        
        <p style={{ margin: '6px 0', fontSize: '16px' }}>
          Current Wallet Balance: <strong style={{ color: permanentlyRemaining >= 0 ? '#27ae60' : '#c0392b' }}>${permanentlyRemaining}</strong>
        </p>
      </div>

      {/* Progress Bar showing PERMANENT execution depletion */}
      <div style={{ background: '#e9ecef', borderRadius: '10px', height: '12px', width: '100%', overflow: 'hidden' }}>
        <div style={{ 
          background: actualSpent > limit ? '#e74c3c' : '#27ae60', 
          width: `${Math.min(percentSpent, 100)}%`, 
          height: '100%',
          transition: 'width 0.3s ease'
        }} />
      </div>
      <p style={{ fontSize: '12px', color: '#7f8c8d', marginTop: '7px' }}>
        {percentSpent}% of your physical funds have permanently exited your wallet.
      </p>
    </div>
  );
}
