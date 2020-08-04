import React from 'react';
import './App.css';
import Counter from './Counter.js';
import Menu from './Menu.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" exact><Menu /></Route>
        <Route path="/counter"><Counter /></Route>
      </header>
    </div>
  );
}

export default App;
