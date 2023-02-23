import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../components/home/Home';
import Signup from '../components/auth/Signup';
import Footer from '../components/footer/Index';
import LoginPage from '../components/auth/Login';

import MentionsLegales from '../components/Mentions/MentionsLegales';
import ContactForm from '../components/contact/ContactForm';
import About from '../components/About/About'

import LibraryPage from '../components/library';


function App() {
  return (
    <Router>
      <div className="app-container">
     
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/signup" element = {<Signup />} />
          <Route path="/login" element = {<LoginPage />} />

          <Route path="/mentionslegales" element = {<MentionsLegales />} />
          <Route path="/contact" element = {<ContactForm />} />
          <Route path="/about" element = {<About />} />

          <Route path="/bibliotheque" element = {<LibraryPage />} />

        </Routes>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
