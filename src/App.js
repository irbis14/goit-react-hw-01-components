import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';

import './App.css';

function App() {
  return (
    <>
      <h1>Home work #1</h1>
      <h2>Task 1. Profile</h2>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <h2>Task 2. Statistics</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <h2>Task 3. FriendList</h2>
      <FriendList friends={friends} />
    </>
  );
}

export default App;
