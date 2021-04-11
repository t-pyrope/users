const initState = { gender: [], department: [], city: [] };

const checkReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHECK_ITEM':
      return {
        ...state,
        gender: action.payload.gender,
        department: action.payload.department,
        city: action.payload.city,
      };
    default:
      return { ...state };
  }
};

export default checkReducer;
