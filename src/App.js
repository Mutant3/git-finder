import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar.js'
import UserItem from './components/users/UserItem'

function App() {
  return (
    <div className="App">
      <Navbar title='Git Finder'/>
      <UserItem/>
    </div>
  );
}

export default App;
