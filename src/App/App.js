import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../components/home/Home';
import Signup from '../components/auth/Signup';
import Footer from '../components/footer/Index';
import LoginPage from '../components/auth/Login';
import LibraryPage from '../components/library';
import Loader from './Loader';
import './loaderStyle.scss';

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {loading ? (
          <Loader /> // Afficher le loader si la page est en cours de chargement
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/bibliotheque" element={<LibraryPage />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

