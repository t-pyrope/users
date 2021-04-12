import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeople } from '../actions/peopleAction';
import VariantInput from './VariantInput';

const FilterPanel = () => {
  const [stablePeople, setStablePeople] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const { people } = useSelector((state) => state.people);
  const { displayPeople } = useSelector((state) => state.people);

  useEffect(() => {
    if (stablePeople.length === displayPeople.length) {
      return setStablePeople([...stablePeople]);
    }

    return setStablePeople([...displayPeople]);
  }, [displayPeople]);

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
        property={property}
      />
    ));
  };

  return (
    <>
      {people.length ? (
        <div className="filter-panel">
          <h3>Filter</h3>
          <div className="filters">
            <div className="filter-item">{stablePeople.length ? makeVariantsHandler(stablePeople, 'gender') : makeVariantsHandler(people, 'gender')}</div>
            <div className="filter-item">{stablePeople.length ? makeVariantsHandler(stablePeople, 'department') : makeVariantsHandler(people, 'department')}</div>
            <div className="filter-item">{stablePeople.length ? makeVariantsHandler(stablePeople, 'address') : makeVariantsHandler(people, 'address')}</div>
          </div>
        </div>
      )
        : <div className="loading" />}
    </>
  );
};

export default FilterPanel;
