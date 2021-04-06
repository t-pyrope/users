import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPeople, loadDisplay } from '../actions/peopleAction';

const VariantInput = ({
  v, num, checkedItems, setCheckedItems,
}) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);
  const { people } = useSelector((state) => state.people);
  useEffect(() => {
    dispatch(loadDisplay(people));
  }, [dispatch]);

  const sortPeople = (inputValue) => {
    const people2 = [...people];
    const sortedPeople = [];
    const checkedItems2 = [...checkedItems];
    if (!toggle) {
      checkedItems2.push(inputValue);
    } else {
      const i = checkedItems2.indexOf(inputValue);
      checkedItems2.splice(i, 1);
    }
    if (checkedItems2.length === 0) {
      setCheckedItems(checkedItems2);
      dispatch(loadDisplay(people2));
      return;
    }
    const ids = [];
    people2.map((person) => {
      checkedItems2.forEach((item) => {
        const values = Object.values(person);
        if (values.includes(item) || values[5].city === item) {
          sortedPeople.push(person);
          ids.push(person.id);
        }
      });
      return null;
    });
    const duplicates = ids.reduce((acc, val) => {
      if (!acc[val]) {
        acc[val] = 1;
      } else {
        acc[val] += 1;
      }
      return acc;
    }, {});
    const finalIds = [];
    Object.keys(duplicates).forEach((key) => {
      const value = duplicates[key];
      if (value >= checkedItems2.length) {
        finalIds.push(key);
      }
    });
    const finalPeople = [];
    people2.map((person) => {
      if (finalIds.includes(person.id)) {
        finalPeople.push(person);
      }
      return null;
    });

    setCheckedItems(checkedItems2);
    dispatch(loadDisplay(finalPeople));
  };

  const inputHandler = (e) => {
    const inputValue = e.target.value;
    setToggle(!toggle);
    sortPeople(inputValue);
  };

  return (
    <label htmlFor={`checkbox${v}`} key={v} className="filter-variant">
      <input type="checkbox" name={`checkbox-${v.toLowerCase()}`} value={v} onChange={(e) => inputHandler(e)} onKeyDown={(e) => inputHandler(e)} checked={toggle ? 'checked' : ''} />
      {v}
      {' '}
      (
      {num}
      )
    </label>
  );
};

VariantInput.propTypes = {
  v: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  checkedItems: PropTypes.arrayOf(PropTypes.string),
  setCheckedItems: PropTypes.func.isRequired,
};

VariantInput.defaultProps = { checkedItems: [] };

export default VariantInput;
