const initState = { people: [], displayPeople: [] };

const peopleReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE':
      return { ...state, people: action.payload.people };
    case 'LOAD_DISPLAY':
      return { ...state, displayPeople: action.payload.displayPeople };
    default:
      return { ...state };
  }
};

export default peopleReducer;
