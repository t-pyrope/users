import {useEffect, useState} from 'react';
import './styles/app.scss';
import Table from './components/Table';
import FilterPanel from './components/FilterPanel';
import {url} from './api.js';
import axios from 'axios';

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setPeople(response.data);
    })
  }, []);

  return (
    <div className="App">
      <Table people={people} setPeople={setPeople}/>
      {people.length &&
      <FilterPanel people={people} />}
    </div>
  );
}

export default App;
