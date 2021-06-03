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

  const sortPeople = (sortedPeople, direction, callbackAsc, callbackDesc) => {
    if (direction === 'asc') {
      sortedPeople.sort(callbackAsc);
    }
    if (direction === 'desc') {
      sortedPeople.sort(callbackDesc);
    }
  };

  const sortHandler = (property, direction) => {
    const sortedPeople = displayPeople.length ? [...displayPeople] : [...people];
    const variants = [];
    if (property === 'name') {
      sortPeople(sortedPeople, direction,
        (a, b) => ((a.name > b.name) ? 1 : -1),
        (a, b) => ((b.name > a.name) ? 1 : -1));
    }
    if (property === 'age') {
      sortPeople(sortedPeople, direction,
        (a, b) => a.age - b.age,
        (a, b) => b.age - a.age);
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
      sortPeople(sortedPeople, direction,
        (a, b) => ((a[property] > b[property]) ? 1 : -1),
        (a, b) => ((b[property] > a[property]) ? 1 : -1));
    }
    if (property === 'address') {
      sortPeople(sortedPeople, direction,
        (a, b) => ((`${a.address.city}${a.address.street}` > `${b.address.city}${b.address.street}`) ? 1 : -1),
        (a, b) => ((`${b.address.city}${b.address.street}` > `${a.address.city}${a.address.street}`) ? 1 : -1));
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
      <th scope="col">
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
            <table summary="A table with IT developers from different countries. Column first contains their names. Columns second contains their age. Columns third contains their gender. Column fourth contains the info about their IT specialization (department). Columns fifth has an information about their address. You can filter each column both in ascending and in descending order.">
              <thead>
                <tr>
                  {tableHeadHandler('Name', 'name')}
                  {tableHeadHandler('Age', 'age')}
                  {tableHeadHandler('Gender', 'gender')}
                  {tableHeadHandler('Department', 'department')}
                  <th className="hide" scope="col">
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
