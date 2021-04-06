import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { fetchPeople, loadDisplay } from '../actions/peopleAction';

const Table = () => {
  const [peopleTable, setPeopleTable] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const { people } = useSelector((state) => state.people);
  useEffect(() => {
    dispatch(loadDisplay(people));
  }, [dispatch, people]);
  const { displayPeople } = useSelector((state) => state.people);

  const showTableData = (person) => {
    return (
      <tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td>{person.gender}</td>
        <td>{person.department}</td>
        <td className="hide">
          {person.address.city}
          ,
          {' '}
          {person.address.street}
        </td>
      </tr>
    );
  };

  const sortHandler = (property, direction) => {
    const sortedPeople = [...displayPeople];
    switch (property) {
      case 'age':
        if (direction === 'asc') {
          sortedPeople.sort((a, b) => { return a.age - b.age; });
        }
        if (direction === 'desc') {
          sortedPeople.sort((a, b) => { return b.age - a.age; });
        }
        break;
      case 'name':
        if (direction === 'asc') {
          sortedPeople.sort((a, b) => ((a.name > b.name) ? 1 : -1));
        }
        if (direction === 'desc') {
          sortedPeople.sort((a, b) => ((b.name > a.name) ? 1 : -1));
        }
        break;
      case 'gender':
        if (direction === 'asc') {
          sortedPeople.sort((a, b) => ((a.gender > b.gender) ? 1 : -1));
        }
        if (direction === 'desc') {
          sortedPeople.sort((a, b) => ((b.gender > a.gender) ? 1 : -1));
        }
        break;
      case 'department':
        if (direction === 'asc') {
          sortedPeople.sort((a, b) => ((a.department > b.department) ? 1 : -1));
        }
        if (direction === 'desc') {
          sortedPeople.sort((a, b) => ((b.department > a.department) ? 1 : -1));
        }
        break;
      case 'address':
        if (direction === 'asc') {
          sortedPeople.sort((a, b) => ((`${a.address.city}${a.address.street}` > `${b.address.city}${b.address.street}`) ? 1 : -1));
        }
        if (direction === 'desc') {
          sortedPeople.sort((a, b) => ((`${b.address.city}${b.address.street}` > `${a.address.city}${a.address.street}`) ? 1 : -1));
        }
        break;
      default:
        return [...sortedPeople];
    }

    setPeopleTable(sortedPeople);
    return null;
  };

  return (
    <>
      {displayPeople.length
    && (
      <div className="table-panel">
        <table>
          <thead>
            <tr>
              <th>
                Name
                <button type="button" onClick={() => sortHandler('name', 'asc')} aria-label="ascending"><FontAwesomeIcon icon={faArrowUp} /></button>
                <button type="button" onClick={() => sortHandler('name', 'desc')} aria-label="descending"><FontAwesomeIcon icon={faArrowDown} /></button>
              </th>
              <th>
                Age
                <button type="button" onClick={() => sortHandler('age', 'asc')} aria-label="ascending"><FontAwesomeIcon icon={faArrowUp} /></button>
                <button type="button" onClick={() => sortHandler('age', 'desc')} aria-label="descending"><FontAwesomeIcon icon={faArrowDown} /></button>
              </th>
              <th>
                Gender
                <button type="button" onClick={() => sortHandler('gender', 'asc')} aria-label="ascending"><FontAwesomeIcon icon={faArrowUp} /></button>
                <button type="button" onClick={() => sortHandler('gender', 'desc')} aria-label="descending"><FontAwesomeIcon icon={faArrowDown} /></button>
              </th>
              <th>
                Department
                <button type="button" onClick={() => sortHandler('department', 'asc')} aria-label="ascending"><FontAwesomeIcon icon={faArrowUp} /></button>
                <button type="button" onClick={() => sortHandler('department', 'desc')} aria-label="descending"><FontAwesomeIcon icon={faArrowDown} /></button>
              </th>
              <th className="hide">
                Address
                <button type="button" onClick={() => sortHandler('address', 'asc')} aria-label="ascending"><FontAwesomeIcon icon={faArrowUp} /></button>
                <button type="button" onClick={() => sortHandler('address', 'desc')} aria-label="descending"><FontAwesomeIcon icon={faArrowDown} /></button>
              </th>
            </tr>
          </thead>
          <tbody>
            {peopleTable.length
              ? peopleTable.map((person) => showTableData(person))
              : displayPeople.map((person) => showTableData(person))}
          </tbody>
        </table>
      </div>
    )}
    </>
  );
};

export default Table;
