import React from 'react';
import './App.css';
import Signup from '../components/auth/Signup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Signup/>
        </p>
      </header>
    </div>
  );
}

export default App;
