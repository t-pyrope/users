const checkItem = (checkedItems) => (dispatch) => {
  dispatch({
    type: 'CHECK_ITEM',
    payload: {
      checkedItems,
    },
  });
};

export default checkItem;
