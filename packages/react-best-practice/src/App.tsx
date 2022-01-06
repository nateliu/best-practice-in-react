import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndexRouter from './router/IndexRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IndexRouter/>
      </header>
    </div>
  );
}

export default App;
