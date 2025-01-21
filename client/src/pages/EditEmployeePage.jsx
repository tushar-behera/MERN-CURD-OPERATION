import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import EmployeeForm from '../components/EmployeeForm';

const EditEmployeePage = () => {
  const { empId } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/employees/${empId}`)
      .then(response => setInitialData(response.data))
      .catch(error => console.error('Error fetching employee data:', error));
  }, [empId]);

  const updateEmployee = (data) => {
    axios.put(`http://localhost:5000/api/employees/${empId}`, data)
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating employee:', error));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Employee</h1>
      {initialData && <EmployeeForm initialData={initialData} onSubmit={updateEmployee} />}
    </div>
  );
};

export default EditEmployeePage;
