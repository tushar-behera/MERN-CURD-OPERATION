const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// Create Employee
router.post('/', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Single Employee
router.get('/:empId', async (req, res) => {
  try {
    const employee = await Employee.findOne({ empId: req.params.empId });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Employee
router.put('/:empId', async (req, res) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { empId: req.params.empId },
      req.body,
      { new: true }
    );
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Employee
router.delete('/:empId', async (req, res) => {
  try {
    const employee = await Employee.findOneAndDelete({ empId: req.params.empId });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
