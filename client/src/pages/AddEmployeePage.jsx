import React from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import axios from '../axiosConfig';
import EmployeeForm from '../components/EmployeeForm';

const AddEmployeePage = () => {
  const navigate = useNavigate();

  const addEmployee = (data) => {
    axios.post('/api/employees', data)
      .then(() => navigate('/'))
      .catch(error => {
        console.error('Error adding employee:', error);
        alert('Failed to add employee.');
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Employee</h1>
      <EmployeeForm onSubmit={addEmployee} />
    </div>
  );
};

export default AddEmployeePage;
