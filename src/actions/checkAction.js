const checkItem = (checkedItem) => (dispatch) => {
  dispatch({
    type: 'CHECK_ITEM',
    payload: {
      checkedItem,
    },
  });
};

export default checkItem;
