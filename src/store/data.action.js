import { EMP_DATA_UPDATE } from './';

const updateEmpData = (empData) => {
  return {
    type: EMP_DATA_UPDATE,
    payload: empData,
  };
};

// ideas on implementing the loading state

const fetchEmpData = (url) => (dispatch) => {
  // implement your logic to fetch data by url
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dispatch(updateEmpData(data));
    })
    .catch((error) => {
      console.error('There was an error getting Employee data!', error);
    });
};

export const getEmpData = () => (dispatch) => {
  dispatch(fetchEmpData('/getData/emp-data.json'));
};
