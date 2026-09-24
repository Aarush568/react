import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Rooms from './components/Rooms.jsx';
import RoomDetail from './components/RoomDetail.jsx';
import Dining from './components/Dining.jsx';
import DiningDetail from './components/DiningDetail.jsx';
import Spa from './components/Spa.jsx';
import SpaDetail from './components/SpaDetail.jsx';
import Activities from './components/Activities.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';
import Offers from './components/Offers.jsx';
import OfferDetail from './components/OfferDetail.jsx';
import Contact from './components/Contact.jsx';
import NotFound from './components/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/dining/:id" element={<DiningDetail />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/spa/:id" element={<SpaDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetail />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offers/:id" element={<OfferDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
