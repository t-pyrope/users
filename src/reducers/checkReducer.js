const initState = { checkedItems: [] };

const checkReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHECK_ITEM':
      return {
        ...state,
        checkedItems: action.payload.checkedItems,
      };
    default:
      return { ...state };
  }
};

export default checkReducer;
