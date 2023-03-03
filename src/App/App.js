import React from 'react';
import { BrowserRouter as Router, Form, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../components/home/Home';
import Signup from '../components/auth/Signup';
import Footer from '../components/footer/Index';
import LoginPage from '../components/auth/Login';
import MentionsLegales from '../components/Mentions/MentionsLegales';
import ContactForm from '../components/contact/ContactForm';
import About from '../components/About/About'
import LibraryPage from '../components/library';
import Loader from './Loader';
import SearchBar from '../components/Search/SearchBar';
import SearchResults from '../components/Search/SearchResults';
import Mypage from '../components/Mypage/Mypage';

import './loaderStyle.scss';
import './style.scss';


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
            <Routes>
              <Route path="/" element={<>
                <Navbar />
                <Home />
                </>} />
              <Route path="/signup" element={<>
                <Navbar />
                <Signup />
              </>} />
              <Route path="/login" element={<>
                <Navbar />
                <LoginPage />
              </>} />
              <Route path="/bibliotheque" element={<>
                <Navbar />
                <LibraryPage />
                </>} />
              <Route path="/mypage" element={<>
                <Navbar />
                <Mypage />
                </>} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/contact" element={<>
                <Navbar />
                <ContactForm/>
                </>} />
              <Route path="/mentionslegales" element={<MentionsLegales />} />
              <Route path="/about" element={<>
                <Navbar />
                <About />
                </>} />
            </Routes>
            <Footer />
          </>
        )}

      </div>
    </Router>
  );
}

export default App;

