import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <span style={{ fontSize: "1rem", fontWeight: 400, opacity: 0.67 }}>WebTicTacToe</span>
          </div>
        </div>
      </nav>

      <main>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "85vh" }}>
          <TicTacToe />
        </div>
      </main>
    </div>
  );
}

export default App;
