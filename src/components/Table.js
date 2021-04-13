/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { fetchPeople, loadDisplay } from '../actions/peopleAction';

const Table = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const { people } = useSelector((state) => state.people);
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
    const sortedPeople = displayPeople.length ? [...displayPeople] : [...people];
    const variants = [];
    if (property === 'name') {
      if (direction === 'asc') {
        sortedPeople.sort((a, b) => ((a.name > b.name) ? 1 : -1));
      }
      if (direction === 'desc') {
        sortedPeople.sort((a, b) => ((b.name > a.name) ? 1 : -1));
      }
    }
    if (property === 'age') {
      if (direction === 'asc') {
        sortedPeople.sort((a, b) => { return a.age - b.age; });
      }
      if (direction === 'desc') {
        sortedPeople.sort((a, b) => { return b.age - a.age; });
      }
    }
    if (property === 'gender' || property === 'department') {
      sortedPeople.map((person) => {
        if (!variants.includes(person[property])) {
          variants.push(person[property]);
        }
        return variants;
      });
      if (variants.length <= 1) {
        return null;
      }
      if (direction === 'asc') {
        sortedPeople.sort((a, b) => ((a[property] > b[property]) ? 1 : -1));
      }
      if (direction === 'desc') {
        sortedPeople.sort((a, b) => ((b[property] > a[property]) ? 1 : -1));
      }
    }
    if (property === 'address') {
      if (direction === 'asc') {
        sortedPeople.sort((a, b) => ((`${a.address.city}${a.address.street}` > `${b.address.city}${b.address.street}`) ? 1 : -1));
      }
      if (direction === 'desc') {
        sortedPeople.sort((a, b) => ((`${b.address.city}${b.address.street}` > `${a.address.city}${a.address.street}`) ? 1 : -1));
      }
    }
    dispatch(loadDisplay(sortedPeople));
    return null;
  };

  const buttonGroupHandler = (property) => {
    return (
      <div className="button-group">
        <button type="button" onClick={() => sortHandler(property, 'asc')} aria-label="ascending"><FontAwesomeIcon icon={faArrowUp} /></button>
        <button type="button" onClick={() => sortHandler(property, 'desc')} aria-label="descending"><FontAwesomeIcon icon={faArrowDown} /></button>
      </div>
    );
  };

  const tableHeadHandler = (title, property) => {
    return (
      <th>
        <div className="col-name">
          <p>{title}</p>
          {buttonGroupHandler(property)}
        </div>
      </th>
    );
  };

  return (
    <>
      {people.length
        ? (
          <div className="table-panel">
            <table>
              <thead>
                <tr>
                  {tableHeadHandler('Name', 'name')}
                  {tableHeadHandler('Age', 'age')}
                  {tableHeadHandler('Gender', 'gender')}
                  {tableHeadHandler('Department', 'department')}
                  <th className="hide">
                    <div className="col-name">
                      <p>Address</p>
                      {buttonGroupHandler('address')}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayPeople.length
                  ? displayPeople.map((person) => showTableData(person))
                  : people.map((person) => showTableData(person))}
              </tbody>
            </table>
          </div>
        )
        : ''}
    </>
  );
};

export default Table;
