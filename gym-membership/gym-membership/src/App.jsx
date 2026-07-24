import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import TrainingAreas from './components/TrainingAreas'
import Courses from './components/Courses'
import Membership from './components/Membership'
import Profile from './components/Profile'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/training-areas" element={<TrainingAreas />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
