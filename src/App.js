import React from 'react';
import './styles/app.scss';
import Table from './components/Table';
import FilterPanel from './components/FilterPanel';

function App() {
  return (
    <div className="App">
      <FilterPanel />
      <Table />
    </div>
  );
}

export default App;
