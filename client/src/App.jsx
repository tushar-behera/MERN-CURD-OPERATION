import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEmployeePage from './pages/AddEmployeePage';
import EditEmployeePage from './pages/EditEmployeePage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import Navbar from './components/Navbar';

const App = () => (
  <div className="container mx-auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddEmployeePage />} />
      <Route path="/edit/:empId" element={<EditEmployeePage />} />
      <Route path="/details/:empId" element={<EmployeeDetailsPage />} />
    </Routes>
  </div>
);

export default App;
