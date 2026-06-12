// Location: src/components/FAQ.jsx
export default function FAQ({ cards }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
      {cards.map(c => (
        <div key={c.id} style={{ border: '2px solid #3498db', borderRadius: '4px', padding: '20px', minHeight: '120px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h4 style={{ margin: '0 0 8px 0', textTransform: 'uppercase' }}>❓ {c.title}</h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#555' }}>{c.detail}</p>
        </div>
      ))}
    </div>
  );
}
