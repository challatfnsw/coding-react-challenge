const initState = {
  data: [],
};

const empReducer = (state = initState, action) => {
  switch (action.type) {
    case 'EMP_DATA_UPDATE':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default empReducer;
