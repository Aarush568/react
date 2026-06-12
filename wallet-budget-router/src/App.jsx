// Location: src/App.jsx
import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'; 
import ExpenseList from './components/ExpenseList';
import BudgetStats from './components/BudgetStats';
import ManageTransactions from './components/ManageTransactions';

export default function App() {
  const startingBudget = 1500;

  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Groceries', amount: 120, category: 'Food', completed: true },
    { id: 2, title: 'Internet Bill', amount: 60, category: 'Utilities', completed: false },
    { id: 3, title: 'Streaming Service', amount: 15, category: 'Entertainment', completed: false },
  ]);

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
  };

  const addExpense = (title, amount, category) => {
    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      completed: false
    };
    setExpenses([...expenses, newExpense]);
  };

  const updateExpenseAmount = (id, newAmount) => {
    setExpenses(expenses.map(item => 
      item.id === id ? { ...item, amount: Number(newAmount) } : item
    ));
  };

  const toggleExecuteTransaction = (id) => {
    setExpenses(expenses.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  // 2. A reusable styling function to highlight the active header tab
  const getNavigationStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#27ae60' : '#7f8c8d',           // Green when active, Gray when inactive
    borderBottom: isActive ? '3px solid #27ae60' : '3px solid transparent', // Green underline indicator
    paddingBottom: '5px',
    fontWeight: 'bold',
    fontSize: '15px',
    transition: 'all 0.2s ease'
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '450px', margin: '0 auto' }}>
      <h1 style={{ color: '#647b92', marginBottom: '5px' }}>Wallet Dashboard</h1>
      <p style={{ fontSize: '13px', color: '#7f8c8d', marginTop: 0, marginBottom: '20px' }}>
        Plan transactions under <strong>Manage</strong>, execute them under <strong>Transactions</strong>.
      </p>
      
      {/* Refactored navigation bar using NavLinks */}
      <nav style={{ 
        marginBottom: '25px', 
        display: 'flex', 
        gap: '25px', 
        justifyContent: 'center',
        borderBottom: '1px solid #e0e0e0',
        paddingBottom: '10px' 
      }}>
        <NavLink to="/" style={getNavigationStyle}>
          💸 Transactions
        </NavLink>
        <NavLink to="/stats" style={getNavigationStyle}>
          📊 Metrics
        </NavLink>
        <NavLink to="/manage" style={getNavigationStyle}>
          ⚙️ Manage
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={
          <ExpenseList 
            items={expenses} 
            onDelete={deleteExpense} 
            onToggleExecute={toggleExecuteTransaction} 
          />
        } />
        <Route path="/stats" element={
          <BudgetStats expenses={expenses} limit={startingBudget} />
        } />
        <Route path="/manage" element={
          <ManageTransactions 
            expenses={expenses} 
            onAdd={addExpense} 
            onUpdateAmount={updateExpenseAmount} 
          />
        } />
      </Routes>
    </div>
  );
}
