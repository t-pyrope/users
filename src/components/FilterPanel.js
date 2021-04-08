import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeople } from '../actions/peopleAction';
import VariantInput from './VariantInput';

const FilterPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const { people } = useSelector((state) => state.people);
  const { displayPeople } = useSelector((state) => state.people);

  const makeVariantsHandler = (arr, property) => {
    let variants;
    if (typeof arr[0][property] === 'string' || typeof arr[0][property] === 'number') {
      variants = arr.reduce((acc, val) => {
        const key = val[property];
        if (key in acc) {
          acc[key] += 1;
        } else {
          acc[key] = 1;
        }
        return acc;
      }, {});
    } else {
      variants = arr.reduce((acc, val) => {
        const string = val[property];
        const { city } = string;
        if (city in acc) {
          acc[city] += 1;
        } else {
          acc[city] = 1;
        }
        return acc;
      }, {});
    }

    return Object.entries(variants).map(([v, num]) => (
      <VariantInput
        key={v}
        v={v}
        num={num}
      />
    ));
  };

  return (
    <>
      {people.length && (
      <div className="filter-panel">
        <h3>Filter</h3>
        <div className="filters">
          <div className="filter-item">{displayPeople.length ? makeVariantsHandler(displayPeople, 'gender') : makeVariantsHandler(people, 'gender')}</div>
          <div className="filter-item">{displayPeople.length ? makeVariantsHandler(displayPeople, 'department') : makeVariantsHandler(people, 'department')}</div>
          <div className="filter-item">{displayPeople.length ? makeVariantsHandler(displayPeople, 'address') : makeVariantsHandler(people, 'address')}</div>
        </div>
      </div>
      )}
    </>
  );
};

export default FilterPanel;
