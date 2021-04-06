import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeople, loadDisplay } from '../actions/peopleAction';
import VariantInput from './VariantInput';
import checkItem from '../actions/checkAction';

const FilterPanel = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadDisplay());
  }, [dispatch]);
  const { displayPeople } = useSelector((state) => state.people);
  useEffect(() => {
    dispatch(checkItem(checkedItems));
  }, [checkedItems]);

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
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
    ));
  };

  return (
    <>
      {displayPeople.length && (
      <div className="filter-panel">
        <h3>Filter</h3>
        <div className="filters">
          <div className="filter-item">{makeVariantsHandler(displayPeople, 'gender')}</div>
          <div className="filter-item">{makeVariantsHandler(displayPeople, 'department')}</div>
          <div className="filter-item">{makeVariantsHandler(displayPeople, 'address')}</div>
        </div>
      </div>
      )}
    </>
  );
};

export default FilterPanel;
