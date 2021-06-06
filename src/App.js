import React from 'react';
import Profile from './components/Profile/Profile';

import user from './components/Profile/user.json';

import './App.css';

function App() {
  return (
    <div>
      <h2>Task 1. Profile</h2>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
