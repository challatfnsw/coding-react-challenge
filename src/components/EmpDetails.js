import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: block;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    padding: 25px;
`;

const EmpDetails = ({
  empId = 10,
  employeeName = 'employee Name',
  role = 'Project Manager',
  reportingManager = 'John',
  billingProject = 'SCATS',
}) => (
  <ContainerDiv>
    <div style={{ fontWeight: 800, marginBottom: '20px' }}>Employee Data</div>
    <div>Employee Name: {employeeName}</div>
    <div>Employee Id: {empId}</div>
    <div>Role: {role}</div>
    <div>Reporting Manager: {reportingManager}</div>
    <div>Billing Project: {billingProject}</div>
  </ContainerDiv>
);

export default EmpDetails;
