import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPeople, loadDisplay } from '../actions/peopleAction';
import checkItem from '../actions/checkAction';

const VariantInput = ({ v, num, property }) => {
  const [toggle, setToggle] = useState(false);
  const { gender, department, city } = useSelector((state) => state.checked);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);
  const { people } = useSelector((state) => state.people);

  const sortPeople = (inputValue) => {
    const people2 = [...people];

    let gender2 = [...gender];
    let department2 = [...department];
    let city2 = [...city];

    if (!toggle) {
      if (property === 'gender') {
        gender2.push(inputValue);
      }
      if (property === 'department') {
        department2.push(inputValue);
      }
      if (property === 'address') {
        city2.push(inputValue);
      }
    } else {
      if (property === 'gender') {
        gender2 = [];
      }
      if (property === 'department') {
        department2 = [];
      }
      if (property === 'address') {
        city2 = [];
      }
    }

    const filteredPeople = people2.filter((person) => {
      if ((gender2.length === 0 || person.gender === gender2[0])
        && (department2.length === 0 || person.department === department2[0])
        && (city2.length === 0 || person.address.city === city2[0])) {
        return person;
      }
      return null;
    });

    dispatch(checkItem(gender2, department2, city2));
    dispatch(loadDisplay(filteredPeople));
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
  property: PropTypes.string.isRequired,
};

export default VariantInput;
