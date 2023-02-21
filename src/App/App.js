import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../components/home/Home';
import Signup from '../components/auth/Signup';
import Footer from '../components/footer/Index';
import './App.scss';
import LoginPage from '../components/auth/Login';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/signup" element = {<Signup />} />
          <Route path="/login" element = {<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
