import { useState } from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display:grid;
    padding: 10px;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    background-color: #efefef;
    padding: 10px;
`;

const Emp = ({ empList = [], children }) => {
  const empClicked = (data) => {
    setEmpData(data);
  };

  const [selectedEmployee, setEmpData] = useState(null);

  return (
    <ContainerDiv>
      {empList.map((emp) => (
        <div
          style={{
            border: '1px solid rgba(0, 0, 0, 0.8)',
            padding: '20px',
            fontSize: '30px',
            textAlign: 'center',
          }}
          key={`emp-${emp.empId}`}
          onClick={() => empClicked(emp)}
        >
          {emp.employeeName}
        </div>
      ))}
      {children(selectedEmployee)}
    </ContainerDiv>
  );
};

export default Emp;
