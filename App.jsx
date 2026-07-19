import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page-container">
      <header>
        <h1>Paradise Nursery</h1>
      </header>
      <main>
        <p>Welcome to the greenest place on earth!</p>
        <button onClick={() => alert('Redirecting to shop...')}>
          Get Started
        </button>
      </main>
    </div>
  );
}

export default App;
