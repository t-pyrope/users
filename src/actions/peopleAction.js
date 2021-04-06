import axios from 'axios';
import url from '../api';

export const fetchPeople = () => async (dispatch) => {
  const people = await axios.get(url);
  dispatch({
    type: 'FETCH_PEOPLE',
    payload: {
      people: people.data,
    },
  });
};

export const loadDisplay = (people) => (dispatch) => {
  dispatch({
    type: 'LOAD_DISPLAY',
    payload: {
      displayPeople: people,
    },
  });
};
