import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getEmpData } from './store/data.action';

const ContainerDiv = styled.div`
  display: inline-block;
  position: relative;
`;

const App = () => {
  const dispatch = useDispatch();

  // const empList = useSelector((state) => state.emp.data);

  useEffect(() => {
    dispatch(getEmpData());
  }, [dispatch]);

  return (
    <ContainerDiv>
      Employee Portal
      {/* using empData write your logic to use Emp and EmpDetails components to show the required table */}
    </ContainerDiv>
  );
};

export default App;
