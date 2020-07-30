import React from 'react';
import './App.css';
import Counter from './Counter.js';
import Menu from './Menu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Counter />
      </header>
    </div>
  );
}

export default App;
