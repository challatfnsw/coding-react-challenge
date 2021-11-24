// const updateEmpData = (empData) => {
//   return {
//     type: 'EMP_DATA_UPDATE',
//     payload: empData,
//   };
// };

// ideas on implementing the loading state

const fetchEmpData = (url) => (dispatch) => {
  // implement your logic to fetch data by url
};

export const getEmpData = () => (dispatch) => {
  dispatch(fetchEmpData('getData/emp-data.json'));
};
