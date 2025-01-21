# MERN CURD OPERATION USING EMPLOYEE DATA

A simple and efficient Employee Management System built with **React**, **Node.js**, **Express**, and **MongoDB**. This project demonstrates a full-stack CRUD (Create, Read, Update, Delete) application with a focus on responsive design, dynamic routing, and RESTful API integration.

---

## Features
- Add new employee records with unique ID, name, position, and salary.
- Edit existing employee details.
- View detailed information about an employee.
- Delete employee records.

---

## Installation Instructions

Follow these steps to set up the project on your local machine:

### Prerequisites
- Node.js installed on your system.
- MongoDB instance running locally or on a cloud service like MongoDB Atlas.
- Database Name : employeeDB, Collection Name: employees .

### Steps
1. **Clone the Repository** from : **Master Barnch**
   ```bash
   git clone https://github.com/tushar-behera/MERN-CURD-OPERATION.git
   cd MERN-CURD-OPERATION
2. **Backend Setup:**
   ```bash
   cd server
   npm i
   node server.js
3. **Frontend Setup:**
   ```bash
   cd client
   npm install
   npm run dev
### Testing
- use Postman
- Example requests:
  (Create Employee)
  ```bash
  POST http://localhost:5000/api/employees
  Content-Type: application/json (Body>raw)
  
  {
    "empId": "EMP001",
    "name": "John Doe",
    "position": "Developer",
    "salary": 75000
  }

(Get All Employees)
   ```bash
   GET http://localhost:5000/api/employees
