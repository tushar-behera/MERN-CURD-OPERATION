import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmployeeDetailsPage = () => {
  const { empId } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/employees/${empId}`)
      .then(response => setEmployee(response.data))
      .catch(error => console.error('Error fetching employee details:', error));
  }, [empId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Details</h1>
      {employee ? (
        <div className="space-y-4">
          <p><strong>ID:</strong> {employee.empId}</p>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Salary:</strong> ${employee.salary}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmployeeDetailsPage;
