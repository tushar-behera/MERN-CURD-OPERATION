import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 text-white p-4">
    <div className="flex space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/add" className="hover:underline">Add Employee</Link>
    </div>
  </nav>
);

export default Navbar;
