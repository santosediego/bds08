import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Filter from './components/Filter';
import Header from './components/Header';
import { FilterData } from './types';
import './App.css';

function App() {

  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
