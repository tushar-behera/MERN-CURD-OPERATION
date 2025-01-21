import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    empId: '',
    name: '',
    position: '',
    salary: '',
    ...initialData,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      {!initialData.empId && (
        <div>
          <label className="block text-sm font-medium">Employee ID</label>
          <input
            type="text"
            name="empId"
            value={formData.empId}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Position</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Salary</label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;
