import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees, onDelete }) => (
  <table className="table-auto w-full border-collapse border border-gray-300">
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-gray-300 px-4 py-2">ID</th>
        <th className="border border-gray-300 px-4 py-2">Name</th>
        <th className="border border-gray-300 px-4 py-2">Position</th>
        <th className="border border-gray-300 px-4 py-2">Salary</th>
        <th className="border border-gray-300 px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees.map(emp => (
        <tr key={emp.empId} className="hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-2">{emp.empId}</td>
          <td className="border border-gray-300 px-4 py-2">{emp.name}</td>
          <td className="border border-gray-300 px-4 py-2">{emp.position}</td>
          <td className="border border-gray-300 px-4 py-2">{emp.salary}</td>
          <td className="border border-gray-300 px-4 py-2">
            <Link to={`/details/${emp.empId}`} className="text-blue-500">Details</Link> |{' '}
            <Link to={`/edit/${emp.empId}`} className="text-green-500">Edit</Link> |{' '}
            <button onClick={() => onDelete(emp.empId)} className="text-red-500">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeList;
