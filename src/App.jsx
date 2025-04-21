// App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import BookingDetails from './Pages/BookingDetails';
import SelectCategory from './Pages/SelectCategory';
import ToursContextProvider from './Context/tourContext';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router >
      <ToursContextProvider>
        {loading && <Loader />}
        <ScrollToTop />
        {!loading && (
          <Routes>
            <Route path="/" element={<SelectCategory />} />
            <Route path="/booking-details/:id" element={<BookingDetails />} />
          </Routes>
        )}
      </ToursContextProvider>
    </Router>
  );
}

export default App;
