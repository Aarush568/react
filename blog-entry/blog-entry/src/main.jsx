// Location: src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. MUST BE IMPORTED
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. MUST WRAP AROUND YOUR APP COMPONENT */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
