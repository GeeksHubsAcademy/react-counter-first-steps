import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Persona';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person name="David" surname="Pinilla" age={27} />
        <Person name="Juan" surname="Pérez" age={127} />
        <Person name="David" surname="Ochando" age={97} />
      </header>
    </div>
  );
}

export default App;
