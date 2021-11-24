import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getEmpData } from './store/data.action';
import Emp from './components/Emp';
import EmpDetails from './components/EmpDetails';

const ContainerDiv = styled.div`
  display: inline-block;
  position: relative;
`;

const App = () => {
  const dispatch = useDispatch();

  const empList = useSelector((state) => state.emp.data);

  useEffect(() => {
    dispatch(getEmpData());
  }, [dispatch]);

  return (
    <ContainerDiv>
      {/* using empData write your logic to use Emp and EmpDetails components to show the required table */}
      <Emp empList={empList}>
        {(selectedEmployee) => (
          <EmpDetails
            empId={selectedEmployee?.empId}
            employeeName={selectedEmployee?.employeeName}
            role={selectedEmployee?.role}
            reportingManager={selectedEmployee?.reportingManager}
            billingProject={selectedEmployee?.billingProject}
          />
        )}
      </Emp>
    </ContainerDiv>
  );
};

export default App;
