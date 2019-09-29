import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users'

function App() {
  return (
    <div className="App">
      <Navbar title='Git Finder'/>
      <Users/>
    </div>
  );
}

export default App;
