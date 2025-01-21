import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeList from '../components/EmployeeList';

const HomePage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const deleteEmployee = (empId) => {
    axios.delete(`http://localhost:5000/api/employees/${empId}`)
      .then(() => setEmployees(employees.filter(emp => emp.empId !== empId)))
      .catch(error => console.error('Error deleting employee:', error));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
      <EmployeeList employees={employees} onDelete={deleteEmployee} />
    </div>
  );
};

export default HomePage;
