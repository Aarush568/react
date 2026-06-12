// Location: src/App.jsx
import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Reviews from './components/Reviews';
import FAQ from './components/FAQs';
import Contact from './components/Contact';

export default function App() {
  // Central State engine holding 6 structural cards for ALL pages
  const [homeCards] = useState([
    { id: 1, title: 'Speed', detail: 'Lightning fast load times worldwide.' },
    { id: 2, title: 'Security', detail: 'End-to-end operational encryption.' },
    { id: 3, title: 'Scale', detail: 'Built to manage massive user traffic.' },
    { id: 4, title: 'Modular', detail: 'Completely reusable element blocks.' },
    { id: 5, title: 'Clean UI', detail: 'Pixel-perfect handcrafted patterns.' },
    { id: 6, title: 'Support', detail: '24/7 technical monitoring panels.' }
  ]);

  const [aboutCards] = useState([
    { id: 1, title: 'Our Vision', detail: 'Architecting high performance solutions.' },
    { id: 2, title: 'Our Mission', detail: 'Empowering software with clean logic.' },
    { id: 3, title: 'Our Team', detail: 'Specialized senior react developers.' },
    { id: 4, title: 'Our Values', detail: 'Transparency and execution speed.' },
    { id: 5, title: 'Our History', detail: 'Disrupting industry code conventions.' },
    { id: 6, title: 'Our Tech', detail: 'Vite, React Router, Tailwind engines.' }
  ]);

  const [reviewCards] = useState([
    { id: 1, title: '⭐ Alex R.', detail: '"Incredible delivery speed and logic."' },
    { id: 2, title: '⭐ Sophia C.', detail: '"Mobile viewports look spectacular."' },
    { id: 3, title: '⭐ Marcus B.', detail: '"The cleanest state tracking systems."' },
    { id: 4, title: '⭐ Emma W.', detail: '"Highly secure database connections."' },
    { id: 5, title: '⭐ David K.', detail: '"Reduced our load times by over 60%."' },
    { id: 6, title: '⭐ Jess T.', detail: '"Perfect Figma translation mappings."' }
  ]);

  const [faqCards] = useState([
    { id: 1, title: 'Timeline?', detail: 'Projects ship within 2 to 4 weeks.' },
    { id: 2, title: 'Support?', detail: 'Dedicated engineering lines.' },
    { id: 3, title: 'Pricing?', detail: 'Fixed milestones agreements.' },
    { id: 4, title: 'Hosting?', detail: 'AWS and Cloudflare networks.' },
    { id: 5, title: 'Legacy?', detail: 'We audit and rewrite existing code.' },
    { id: 6, title: 'Remote?', detail: 'Operating completely globally.' }
  ]);

  const [contactCards] = useState([
    { id: 1, title: '📧 Email', detail: 'dev@nexuscorporate.com' },
    { id: 2, title: '📞 Phone', detail: '+1 (555) 234-8900' },
    { id: 3, title: '📍 HQ Office', detail: 'Berlin Tech Corridor' },
    { id: 4, title: '💬 Live Chat', detail: 'Available 24/7 inside portal' },
    { id: 5, title: '🐦 Twitter/X', detail: '@NexusSoftwareDev' },
    { id: 6, title: '💼 LinkedIn', detail: 'nexus-corporate-systems' }
  ]);

  // Dynamic style engine to highlight the active menu box item
  const linkStyle = ({ isActive }) => ({
    display: 'block',
    textDecoration: 'none',
    color: isActive ? '#000' : '#7f8c8d',
    background: isActive ? '#fff' : '#f5f6fa',
    border: '2px solid #000',
    borderRadius: '4px',
    padding: '12px 15px',
    textAlign: 'center',
    fontWeight: 'bold',
    boxShadow: isActive ? '3px 3px 0px #000' : 'none',
    transition: 'all 0.15s ease'
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* WIREFRAME: Top Header Bar Box */}
      <header style={{ border: '2px solid #000', borderRadius: '4px', padding: '20px', marginBottom: '20px', background: '#f5f6fa', textAlign: 'center' }}>
        <h2 style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>NEXUS NODE FRAMEWORK SYSTEM</h2>
      </header>

      {/* Main Structural Splitting Core Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '20px', alignItems: 'start' }}>
        
        {/* WIREFRAME: Left Sidebar Navigation Column Box */}
        <nav style={{ border: '2px solid #e74c3c', borderRadius: '4px', padding: '15px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#fff' }}>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/about" style={linkStyle}>About us</NavLink>
          <NavLink to="/reviews" style={linkStyle}>Reviews</NavLink>
          <NavLink to="/faq" style={linkStyle}>FAQ</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        </nav>

        {/* WIREFRAME: Right 3x2 Grid Main Content Workspace Area */}
        <main style={{ minHeight: '400px' }}>
          <Routes>
            <Route path="/" element={<Home cards={homeCards} />} />
            <Route path="/about" element={<About cards={aboutCards} />} />
            <Route path="/reviews" element={<Reviews cards={reviewCards} />} />
            <Route path="/faq" element={<FAQ cards={faqCards} />} />
            <Route path="/contact" element={<Contact cards={contactCards} />} />
          </Routes>
        </main>

      </div>
    </div>
  );
}
