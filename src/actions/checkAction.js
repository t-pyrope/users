const checkItem = (gender, department, city) => (dispatch) => {
  dispatch({
    type: 'CHECK_ITEM',
    payload: {
      gender, department, city,
    },
  });
};

export default checkItem;
