import React from 'react';
import { BrowserRouter as Router, Form, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Components/Home/Home';
import Signup from '../Components/Auth/Signup';
import Footer from '../Components/Footer/Index';
import LoginPage from '../Components/Auth/Login';
import MentionsLegales from '../Components/Mentions/MentionsLegales';
import ContactForm from '../Components/Contact/ContactForm';
import About from '../Components/About/About'
import Loader from './Loader';
import SearchBar from '../Components/Search/SearchBar';
import SearchResults from '../Components/Search/SearchResults';
import Mypage from '../Components/Mypage/Mypage';
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
              <Route path="/mypage" element={<>
                <Navbar />
                <Mypage />
                </>} />
                <Route path="/search" element={<>
                 <Navbar />
                  <SearchResults />
                    </>} />
                {/* <Route path="/search/:query" element={<>
                  <Navbar />
                    <SearchResults />
                  </>} /> */}
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

