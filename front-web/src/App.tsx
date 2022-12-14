import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Filter from './components/Filter';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
